// Import the express in typescript file
// import express from 'express';
const express = require('express')

// Initialize the express engine
const app = express()

const { render } = require('../dist/bundle_server.js')

// 调用构建出的 bundle_server.js 中暴露出的渲染函数，再拼接下 HTML 模版，形成完整的 HTML 文件
app.get('/', function (req, res) {
  res.send(`
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
<div id="app">${render()}</div>
<script src="./dist/bundle_client.js"></script>
</body>
</html>
  `)
})

// 其它请求路径返回对应的本地文件
app.use(express.static('.'))

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
