const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
var fs = require('fs');
var util = require('util');
var express = require('express');
var serveStatic = require('serve-static');
const middlewares = jsonServer.defaults()
const port = 3010;

const data = jsonServer.router(path.join(__dirname, '/../data/db.json'))

server.use(middlewares)
server.use(data)

server.listen(port, () => {
  console.log('JSON Server is running on port', port)
})

//module.exports = {server,data};
