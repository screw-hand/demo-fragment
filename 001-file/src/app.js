const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/', express.static(path.join(__dirname, './static')))

app.get('/api/file', (req, res) => {
  const { type } = req.query
  let imgURL = path.join(__dirname, './file/logo.png')

  if (type && type !== '') {
    const fs = require("fs");
    const mineType = require('mime-types')
    try {
      let imageData = fs.readFileSync(imgURL)
      let bufferData = Buffer.from(imageData).toString('base64')
      let base64 = "data:" + mineType.lookup(imgURL) + ';base64,' + bufferData
      if (type === 'content') {
        // 响应文件内容
        res.send(bufferData)
      } else {
        // 响应data url base64
        res.send(base64)
      }
    } catch (error) {
      console.error(error)
      res.status(502).send(error)
    }
  } else {
    // 直接响应文件
    res.download(imgURL, 'logo.png')
  }
})

app.get('/api/file-download', (req, res) => {
  res.send('/api/file-download')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
