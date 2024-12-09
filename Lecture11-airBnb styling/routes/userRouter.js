//core module
const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");


userRouter.get("/",(req,res,next) => {
  res.sendFile(path.join(rootDir,"views","home.html"));
});
userRouter.get("/go-to-home",(req,res,next) => {
  res.redirect("/"); 
});

module.exports = userRouter;