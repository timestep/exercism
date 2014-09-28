'use strict'

var Bob = function(){};

Bob.prototype.hey = function(str){
  if(str.isAllUpperCase()){
    return 'Whoa, chill out!';
  }
  if(str.isQuestion()){
    return 'Sure.';
  }
  if(str.isExclimation()){
    return 'Whatever';
  }

  return 'Whatever.';
  
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
