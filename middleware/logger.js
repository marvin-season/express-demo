const logger = (req, res, next) => {
  const time = new Date();
  console.log("===============================start=============================");
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  console.log(`[${time.toLocaleString()}] body: ${JSON.stringify(req.body)}`);
  console.log(`[${time.toLocaleString()}] params:  ${JSON.stringify(req.params)}`);
  console.log("===============================end=============================");
  next();
};

module.exports = logger;
