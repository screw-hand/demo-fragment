const path = require('path');

const pkg = require(path.join(__dirname, '../../package.json'));

const help = () => {
  return `${pkg.name} - ${pkg.version}
${pkg.description},
You can use "cli-me".
cli-me <module> <params...>

example:
cli-me write-json-to-file '{"key":"value"}' output.json
... `;
}
module.exports = help;
exports.default = help;
