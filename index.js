(function(){
  var unorm, out$ = typeof exports != 'undefined' && exports || this;
  unorm = require('unorm');
  out$.toFullwidth = toFullwidth;
  function toFullwidth(it){
    return unorm.nfd(it).replace(/ /g, '\u3000').replace(/[\u0020-\u007E]/g, function(it){
      return String.fromCharCode(it.charCodeAt(0) + 0xFEE0);
    });
  }
  out$.toFullwidthNFC = toFullwidthNFC;
  function toFullwidthNFC(it){
    return unorm.nfc(toFullwidth(it));
  }
  out$.toHalfwidth = toHalfwidth;
  function toHalfwidth(x){
    return unorm.nfd(it).replace(/\u3000/g, ' ').replace(/[\uFF01-\uFF5E]/g, function(it){
      return String.fromCharCode(it.charCodeAt(0) - 0xFEE0);
    });
  }
  out$.toHalfwidthNFC = toHalfwidthNFC;
  function toHalfwidthNFC(it){
    return unorm.nfc(toHalfwidth(it));
  }
}).call(this);
