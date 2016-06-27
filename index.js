var path = require('path');

var flexedEntryPoint = require.resolve('flexed');
var flexedDir = path.dirname(flexedEntryPoint);

function includePaths() {
  return flexedDir;
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};
