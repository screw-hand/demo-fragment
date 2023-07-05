#!/usr/bin/env node
const writeJsonToFile = require('../src/write-json-to-file.js');

let objStr = process.argv[2];
let filename = process.argv[3];

// 将对象字符串转为对象
let obj;
try {
  obj = JSON.parse(objStr);
} catch (error) {
  console.error('Error parsing JSON string:', error);
  process.exit(1); // 非0代表程序异常退出
}

// 将对象写入文件
writeJsonToFile(obj, filename);