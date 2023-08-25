const express = require("express");

const userRouter = express.Router();

const user = {
  id: 1,
  name: "user",
  email: "user@gmail.com",
  password: "123456",
  role: "user",
  createdAt: "2021-01-01",
  updatedAt: "2021-01-01",
};

const cb1 = (req, res, next) => {
  req.user = {...user, id: 2}
  next();
};
const cb2 = (req, res, next) => {
  req.user = {...req.user, name: 'xiaoma'}
  next();
};

userRouter.get("/", [cb1, cb2], (req, res) =>{
  res.json(req.user);
});

userRouter.get("/list", (req, res) => {
  res.json([{}]);
});

module.exports = userRouter;
