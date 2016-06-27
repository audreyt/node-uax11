(function(){
  var unorm;
  unorm = require('unorm');
  function toFullwidth(it){
    return unorm.nfd(it + "").replace(/ /g, '\u3000').replace(/[\u0020-\u007E]/g, function(it){
      return String.fromCharCode(it.charCodeAt(0) + 0xFEE0);
    });
  }
  function toFullwidthNFC(it){
    return unorm.nfc(toFullwidth(it));
  }
  function toHalfwidth(it){
    return unorm.nfd(it + "").replace(/\u3000/g, ' ').replace(/[\uFF01-\uFF5E]/g, function(it){
      return String.fromCharCode(it.charCodeAt(0) - 0xFEE0);
    });
  }
  function toHalfwidthNFC(it){
    return unorm.nfc(toHalfwidth(it));
  }
  module.exports = function(str, cb){
    return cb(toFullwidth(str));
  };
  module.exports.toFullwidth = toFullwidthNFC;
  module.exports.toHalfwidth = toHalfwidthNFC;
  module.exports.toFullwidthNFC = toFullwidthNFC;
  module.exports.toHalfwidthNFC = toFullwidthNFC;
}).call(this);
