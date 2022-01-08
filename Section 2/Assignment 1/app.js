const html = require('http');

const routes = require('./routes');

const server = html.createServer(routes);

server.listen(3000);