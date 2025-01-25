// Create web server
// Create a web server that listens for requests on port 3000. When a request is received, it should return the content of the comments.json file.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('File not found');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
