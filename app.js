const http = require('http');

const hostname = '127.0.0.1'; // this is a localhost
const port = process.env.PORT || 3000; // this is like a mailbox in a subdivision
// process.env.PORT allows this file to use the port heroku makes OR you use 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});