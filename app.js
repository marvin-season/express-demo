const express = require("express");
const logger = require("./middleware/logger");
const userRouter = require("./router/user");
const bookRouter = require("./router/book");
const app = express();
const port = 9000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use("/user", userRouter);
app.use("/book", bookRouter);

app.get("/", logger, (req, res) => {
  return res.json({ name: "aa" });
});

app.get("/chatflows/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.headers);
  return res.json({ name: "aa" });
});

app.post("/chatflows", (req, res) => {
  console.log("保存成功");
  console.log(req.body);
  return res.json(req.body);
});

app.put("/chatflows", (req, res) => {
  console.log("修改成功");
  console.log(req.body);
  return res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
