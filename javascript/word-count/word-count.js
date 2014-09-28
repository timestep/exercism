'use strict';

var words = function (input) {
  if(input){
    var obj = {}
    obj[input] = 1;
    return obj;
  }
}

module.exports = words;