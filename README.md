## express

express 是一个基于 Node.js 平台的 Web 开发框架。
express中一切都可视为中间件，包括路由、错误处理、请求处理等。
中间件： 一个 处理请求-响应循环的函数。

```js
// middleware
function (req, res, next) {
    // TODO:
    next();
}
```

### 安装
```bash
npm install express --save
```

