const express = require('express');

const router = express.Router();

const Actions = require('../data/helpers/actionModel.js');
const validateActionId = require('../middleware/validateActionId.js');
const validateProjectId = require('../middleware/validateProjectId.js');
const validateAction = require('../middleware/validateAction.js');

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

router.get('/:id', validateActionId, (req, res) => {
  Actions.get(req.params.id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Server error, unable to retrieve action' });
    });
});

router.post('/:id', validateProjectId, validateAction, (req, res) => {
  console.log(req.project, req.action);
});

module.exports = router;
