const express = require('express');

const router = express.Router();

const Projects = require('../data/helpers/projectModel.js');

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

function validateProjectId(req, res, next) {
  const { id } = req.params;
  Projects.get(id)
    .then(project => {
      if (project) {
        req.project = project;
        next();
      } else {
        res.status(400).json({ message: 'invalid project ID' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error, unable to retrieve' });
    });
}

function validateProject(req, res, next) {
  if (!req.body.name || !req.body.description) {
    res.status(400).json({ message: 'name and description are required' });
  } else {
    next();
  }
}

module.exports = router;
