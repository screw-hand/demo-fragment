const fs = require('fs');

// 定义你的函数
function writeJsonToFile(obj, filename) {
  let jsonStr = JSON.stringify(obj, null, 2);
  fs.writeFileSync(filename, jsonStr);
  console.log(`Data written to file ${filename}`);
}

module.exports = writeJsonToFile;
exports.default = writeJsonToFile;
