const http = require("http"); //for request and response
const requestHandler = require("./user");

const server = http.createServer(requestHandler);

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
