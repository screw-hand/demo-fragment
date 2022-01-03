var loaderUtils = require('loader-utils');
var SourceNode = require('source-map').SourceNode;
var SourceMapConsumer = require('source-map').SourceMapConsumer;

module.exports = function (content, sourceMap) {
  var useStrictPrefix = '\'use strict\';\n\n';
  if (this.cacheable) {
    console.log('cacheable')
    this.cacheable();
  }
  // source-map
  var options = loaderUtils.getOptions(this) || {};
  console.log('options', options)
  if (options.sourceMap && sourceMap) {
    var currentRequest = loaderUtils.getCurrentRequest(this);
    var node = SourceNode.fromStringWithSourceMap(
      content,
      new SourceMapConsumer(sourceMap)
    );
    node.prepend(useStrictPrefix);
    var result = node.toStringWithSourceMap({ file: currentRequest });
    this.callback(null, result.code, result.map.toJSON());
    return;
  }
  var useStrictPrefix = '\'use strict\'; \n \n';
  var loaderName = '\'force-string-loader;\' \n \n';
  return loaderName + useStrictPrefix + loaderName + content;
};
