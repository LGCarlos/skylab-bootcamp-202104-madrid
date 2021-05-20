const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());

server.use(express.json());

const heroRouter = require('./routes/heroRoutes');
const rickRouter = require('./routes/rickRoutes');

server.use('/', heroRouter);
server.use('/', rickRouter);

const port = 4000;

server.listen(port, () => console.log(`server is running on http://localhost:${port}`));
