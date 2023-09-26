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

const response = {
  code: 200,
  message: "success",
  data: user,
};

const isResponseOk = (response_data) => {
  return [200, 0].includes(response_data.code);
};

const cb1 = (req, res, next) => {
  console.log("得到数据：", response);
  req.response = response;
  next()
  console.log('==========');
};

const cb2 = (req, res, next) => {
  const { response: response_data } = req;
  console.log("处理异常", response_data);

  if (isResponseOk(response_data)) {
    delete req.response;
    req.data = response_data.data;
    if (req.data) {
      next();
    } else {
      res.status(response_data.code).json(response_data.message);
    }
  } else {
    console.log("抛出异常");
    res.status(response_data.code).json(response_data.message);
  }
};

userRouter.get(
  "/",
  [cb1, cb2],
  (req, res) => {
    const data = req.data;
    console.log("正常数据", data);
    res.json(data);
  }
);

userRouter.get("/list", (req, res) => {
  res.json([{}]);
});

module.exports = userRouter;
