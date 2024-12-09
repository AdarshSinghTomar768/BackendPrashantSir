const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//Local Modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use((req,res,next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(userRouter);

app.use("/host",hostRouter);

app.use((req,res,next) => {
  res.sendFile(path.join(rootDir,"views","404.html"));
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});