'use strict'

var Bob = function(){};

Bob.prototype.hey = function(str){
  if(str.isAllUpperCase()){
    return 'Whoa, chill out!';
  }
  if(str.isExclimation() || str.hasAcronym()){
    return 'Whatever.';
  }
  if(str.isQuestion()){
    return 'Sure.';
  }

  return 'Whatever.';
  
}

String.prototype.hasAcronym = function () {
  var splitStrings = this.split(" ");
  for (var i = splitStrings.length - 1; i >= 0; i--) {
    if(splitStrings[i].isAllUpperCase()){
      return true
    }
  };
  return false;  
}

String.prototype.isAllUpperCase = function () {
  if(this.toUpperCase() !== this){
    return false;
  }
  return true;
}

String.prototype.isQuestion = function () {
  if(this[this.length -1] == '?'){
    return true;
  } else {
    return false;
  }
}

String.prototype.isExclimation = function () {
  if(this[this.length -1] == '!'){
    return true;
  } else {
    return false;
  }
}

module.exports = Bob;
