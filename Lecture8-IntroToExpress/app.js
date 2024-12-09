//Core Modules
//const http = require("http"); //for request and response

//External Modules
const express = require("express");

//Local Modules
const requestHandler = require("./user");

const app = express(); 

app.get("/",(req,res,next) => { //Middleware  //this will work for / when it is only at homepage
  console.log("Came in first Middleware", req.url, req.method);
  //res.send("<p>Came in first Middleware</p>");
  next();
});
app.post("/submit-details",(req,res,next) => { //now this will not work for /submit as it is a get request.not a form
  console.log("Came in second Middleware", req.url, req.method);
  res.send("<h1>Hello World!Welcome to express</h1>");
});
app.use("/",(req,res,next) => { //Middleware  //this will work for / every where
  console.log("Came in another Middleware", req.url, req.method);
  res.send("<p>Came in another Middleware</p>");
});

//const server = http.createServer(app);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
