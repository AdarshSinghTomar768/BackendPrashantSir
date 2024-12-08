const fs = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
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
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);  //<Buffer 75 73 65 72 6e 61 6d 65 3d 41 64 61 72 73 68 26 67 65 6e 64 65 72 3d 6d 61 6c 65>
      body.push(chunk);
      console.log(body); // [<Buffer 75 73 65 72 6e 61 6d 65 3d 41 6e 75 73 68 6b 61 2b 54 6f 6d 61 72 26 67 65 6e 64 65 72 3d 66 65 6d 61 6c 65>]
    })
    req.on("end",() => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody); //username=Adarsh+Singh+Tomar&gender=male

      // const bodyObject = {};
      const prams = new URLSearchParams(fullBody); 

      // for (const [key, value] of prams.entries()) {
      //   bodyObject[key] = value;
      // }

      const bodyObject = Object.fromEntries(prams);
      fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
      console.log(bodyObject); //{ username: 'Adarsh Singh Tomar', gender: 'male' }
    })
    // fs.writeFileSync('user.txt','Adarsh Singh Tomar'); //it make the file name as user.txt and write the Adarsh Singh Tomar in it.
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
  
};

module.exports = userRequestHandler;
