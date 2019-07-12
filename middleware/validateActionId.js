const Actions = require('../data/helpers/actionModel');

function validateActionId(req, res, next) {
  const { id } = req.params;
  Actions.get(id)
    .then(action => {
      if (action) {
        req.action = action;
        next();
      } else {
        res.status(400).json({ message: 'invalid project ID' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error, unable to retrieve' });
    });
}

module.exports = validateActionId;
