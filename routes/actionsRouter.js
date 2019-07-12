const express = require('express');

const router = express.Router();

const Actions = require('../data/helpers/actionModel.js');
const validateProjectId = require('../middleware/validateProjectId.js');
const validateProject = require('../middleware/validateProject.js');

router.get('/', (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Server error, unable to retrieve actions' });
    });
});

module.exports = router;
