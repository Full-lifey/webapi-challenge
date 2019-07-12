const express = require('express');

const server = express();

const projectsRouter = require('./routes/projectsRouter.js');

server.use(logger);
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Sprint Challenge!</h2>`);
});

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} from ${req.url}`);

  next();
}

server.use('/api/projects', projectsRouter);

module.exports = server;
