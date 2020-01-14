const http = require('http');
const express = require('express');
const path = require('path');

const port = 5001;

const app = express();
app.use(express.static(path.join(__dirname, './build')));

const server = http.createServer(app);

server.listen(port);
