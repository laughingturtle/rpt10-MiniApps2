const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const middlewares = jsonServer.defaults()
const port = 3010;

const router = jsonServer.router(path.join(__dirname, '/../data/db.json'))

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running on port', port)
})

module.exports = server;
