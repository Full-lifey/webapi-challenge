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

module.exports = router;
