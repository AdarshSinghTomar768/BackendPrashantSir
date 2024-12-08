const http = require("http"); //for request and response
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Enter your details:</h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write("<input type='text' name='username'><br>");
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label>');
    res.write("<br><button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if(req.url.toLowerCase() === "/submit-details" && req.method === "POST"){
    fs.writeFileSync('user.txt','Adarsh Singh Tomar'); //it make the file name as user.txt and write the Adarsh Singh Tomar in it.
    res.statusCode = 302;
    res.setHeader('Location', '/');
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
