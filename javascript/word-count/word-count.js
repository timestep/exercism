'use strict';

var words = function (input) {
  return input.countWords();
}

String.prototype.countWords = function() {
  var splitString = this.split(' ');
  var obj = {};
  for (var i = splitString.length - 1; i >= 0; i--) {
    if(!obj[splitString[i]]){
      obj[splitString[i]] = 1;
    } else {
      ++obj[splitString[i]];
    }
  };
  return obj;
};

module.exports = words;