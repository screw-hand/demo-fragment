const path = require('path');

const help = (module_name, module_params) => {
  let helpFileFn = null;
  try {
    if (!module_name) {
      helpFileFn = require(path.join(__dirname, "../help/index"));
    } else {
      helpFileFn = require(path.join(__dirname, "../help/" + module_name));
    }
  } catch (error) {
    console.error(error);
    require(path.join(__dirname, "../help/index"))();
    process.exit(1);
  }
  return console.log(
    helpFileFn(module_name, module_params)
  )
}

module.exports = help;
exports.default = help;
