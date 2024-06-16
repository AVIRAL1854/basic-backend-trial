const express = require("express");
const cors = require("cors");
const app = express();
const port = 4001;
// const count=0;
// count++;

app.use(cors());
app.use("/*", (req, res, next) => {

  console.log("this is a middleware use everywhere");
  next();
});

app.get("/sum1", (req, res) => {
  const a = parseInt(req.header("a"));
  const b = parseInt(req.header("b"));

  return res.status(211).json({
    msg: `this is json hit by get and answer is: ${a + b}`,
    data: a + b,
  });
});
app.get("/sum2", (req, res) => {
  const a = parseInt(req.header("a"));
  const b = parseInt(req.header("b"));

  return res.status(411).json({
    msg: `this is json hit by get and answer is: ${a + b}`,
    data: a + b,
  });
});
app.get("/sum3", (req, res) => {
  const a = parseInt(req.header("a"));
  const b = parseInt(req.header("b"));

  return res.status(411).json({
    msg: `this is json hit by get and answer is: ${a + b}`,
    data: a + b,
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/sum`);
});
