const Projects = require('../data/helpers/projectModel.js');

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

module.exports = validateProjectId;
