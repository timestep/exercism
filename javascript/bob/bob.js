'use strict'

var Bob = function(){};

Bob.prototype.hey = function(str){
  if(str === ''){
    return 'Fine. Be that way!';
  }
  if(str.isOnlyNumber() && str.isQuestion()){
    return 'Sure.';
  }
  if(str.isOnlyNumber()){
    return 'Whatever.';
  }
  if(str.isAllUpperCase()){
    return 'Whoa, chill out!';
  }
  if(str.isQuestion()){
    return 'Sure.';
  }
  if(str.isExclimation() || str.hasAcronym()){
    return 'Whatever.';
  }
  return 'Whatever.';
  
}

String.prototype.hasAcronym = function () {
  var splitStrings = this.split(" ");
  for (var i = splitStrings.length - 1; i >= 0; i--) {
    if(splitStrings[i].isAllUpperCase()){
      return true;
    }
  };
  return false;  
}

String.prototype.hasSpecial = function () {
  return /[_\W0-9]/.test(this);
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

String.prototype.isOnlyNumber = function () {
  var splitStrings = this.split(' ');
  var isIt = false;
  for (var i = splitStrings.length - 1; i >= 0; i--) {
    if(!isNaN(parseInt(splitStrings[i]))){
      isIt = true;
    } else {
      return false;
    }
  };
  return isIt;
}

String.prototype.isExclimation = function () {
  if(this[this.length -1] == '!'){
    return true;
  } else {
    return false;
  }
}

module.exports = Bob;
