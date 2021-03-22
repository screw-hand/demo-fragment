const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
const app = express()
const port = 3000
const path = require('path')
const mineType = require('mime-types')
const uploadPath = path.join(__dirname, './uploads/') // 上传目录
const staticPath = path.join(__dirname, './static') // 静态资源目录
const upload = multer({
  dest: uploadPath,
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})

app.use(bodyParser.json({ limit: '100mb' })) // for parsing application/json
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', express.static(staticPath))

//初始化uploadPath
fs.exists(uploadPath, exists => {
  if (!exists) {
    fs.mkdir(uploadPath, e => {
      e && console.error(e)
    })
  }
})


// 下载文件
app.get('/api/file/download', (req, res) => {
  const { type, fileName } = req.query

  // 是否缺失必填参数
  if (!type) {
    return res.status(200).json({
      code: -1,
      msg: 'query type is must need!'
    })
  } else if (!fileName) {
    return res.status(200).json({
      code: -1,
      msg: 'fileName type is must need!'
    })
  }

  if (type === 'file') { // 返回文件
    let fileURL = path.join(uploadPath, fileName)
    res.download(fileURL)
  } else if (type === 'content') { // 返回文件内容
    let fileURL = path.join(uploadPath, fileName)
    let fileData = fs.readFileSync(fileURL)
    let bufferData = Buffer.from(fileData).toString()
    res.json({
      code: 1,
      msg: 'success',
      data: bufferData
    })
  } else if (type === 'base64') { // 返回base64
    let fileURL = path.join(uploadPath, fileName)
    let fileData = fs.readFileSync(fileURL)
    let bufferData = Buffer.from(fileData).toString('base64')
    let base64 = 'data:' + mineType.lookup(fileURL) + ';base64,' + bufferData.toString('base64')
    res.json({
      code: 1,
      msg: 'success',
      data: base64
    })
  } else if (type === 'path') { // 返回路径
    res.json({
      code: 1,
      msg: 'success',
      data: `/api/uploads/${fileName}`
    })
  }
})

// 上传文件
app.post('/api/file/upload', upload.fields([{ name: 'file', maxCount: 1 }]), (req, res) => {
  res.json({
    code: 1,
    msg: 'success',
    data: null
  })
})

// 下载文件
app.get('/api/uploads/:fileName', (req, res) => {
  const { fileName } = req.params
  let fileURL = path.join(uploadPath, fileName)
  res.download(fileURL, fileName)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
