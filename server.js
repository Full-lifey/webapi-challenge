const express = require('express');
const cors = require('cors');

const server = express();

const projectsRouter = require('./routes/projectsRouter.js');
const actionsRouter = require('./routes/actionsRouter.js');

server.use(logger);
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send(`<h2>Sprint Challenge!</h2>`);
});

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} from ${req.url}`);

  next();
}

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;
