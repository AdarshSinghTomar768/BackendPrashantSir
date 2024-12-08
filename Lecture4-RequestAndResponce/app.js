const http = require("http"); //for request and response

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Welcome to home</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if(req.url === "/products"){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Checkout our products</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Hello World</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});