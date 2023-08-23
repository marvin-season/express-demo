const express = require("express");

const userRouter = express.Router();
userRouter.get("/", (req, res) => {
  res.json({});
});
userRouter.get("/list", (req, res) => {
  res.json([{}]);
});

module.exports = userRouter;
