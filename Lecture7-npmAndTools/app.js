const http = require("http"); //for request and response

const server = http.createServer((req,res) => {
  console.log(req);
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
