const express = require('express');

const router = express.Router();

const Projects = require('../data/helpers/projectModel.js');
const validateProjectId = require('../middleware/validateProjectId.js');
const validateProject = require('../middleware/validateProject.js');

router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Server error, unable to retrieve projects' });
    });
});

router.get('/:id', validateProjectId, (req, res) => {
  Projects.get(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Server error, unable to retrieve projects' });
    });
});

router.get('/:id/actions', validateProjectId, (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error, unable to get actions' });
    });
});

router.post('/', validateProject, (req, res) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Server error, unable to create project' });
    });
});

router.put('/:id', validateProjectId, validateProject, (req, res) => {
  Projects.update(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Server error, unable to update project' });
    });
});

router.delete('/:id', validateProjectId, (req, res) => {
  Projects.remove(req.params.id)
    .then(deleted => {
      res.status(204).end();
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Server error, unable to delete project' });
    });
});

module.exports = router;
