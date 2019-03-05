const express = require('express');
const server = express();

const billingRoutes = require('./billingRoutes')

server.use('/billing', billingRoutes)

module.exports = server;