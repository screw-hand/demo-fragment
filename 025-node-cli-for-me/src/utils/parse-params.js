const parseParmas = (args, keyArry) => {
  let result = {}
  if (args && args._ && args._.length > 0) {
    for (let i = 0; i < args._.length; i++) {
      result[keyArry[i]] = args._[i]
    }
  }
  return result;
}

module.exports = parseParmas;
exports.defualt = parseParmas;