const express = require('express');
const routesIndex = require('./routes/index');
const app = express();

app.use('/', routesIndex);

module.exports = app;
