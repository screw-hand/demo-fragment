const fs = require('fs');
const parseParmas = require('./utils/parse-params');

function writeJsonToFile(args) {
  const { json, file } = parseParmas(args, ["json", "file"]);
  let jsonStr = JSON.stringify(json, null, 2);
  fs.writeFileSync(file, jsonStr);
  console.log(`Data written to file ${file}`);
}

module.exports = writeJsonToFile;
exports.default = writeJsonToFile;
