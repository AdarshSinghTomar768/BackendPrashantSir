const http = require('http'); //for request and response

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit(); // stop the server
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});