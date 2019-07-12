function validateAction(req, res, next) {
  if (!req.body.notes || !req.body.description) {
    res.status(400).json({ message: 'notes and description are required' });
  } else {
    next();
  }
}

module.exports = validateAction;
