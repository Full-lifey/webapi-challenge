function validateProject(req, res, next) {
  if (!req.body.name || !req.body.description) {
    res.status(400).json({ message: 'name and description are required' });
  } else {
    next();
  }
}

module.exports = validateProject;
