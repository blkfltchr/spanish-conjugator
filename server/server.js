const express = require('express');
const server = express();
const cors = require('cors')
server.use(cors())

const billingRoutes = require('./billingRoutes')

server.use('/billing', billingRoutes)

module.exports = server;