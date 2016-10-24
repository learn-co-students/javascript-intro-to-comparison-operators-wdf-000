'use strict';
function testFalseLooseEqualityComparison(){
  var zero = 0;
  var one = 1;
  return zero == one;
}

function testTrueLooseNonEqualityComparison(){
  var zero = 0;
  var one = 1;
  return zero != one;
}

function testTrueLooseEqualityComparison(){
  var yi = 1;
  var one = "1";
  return yi == one;
}

function testFalseStrictEqualityComparison(){
  var a = 1;
  var b = "1";
  return a === b;
}

function testTrueStrictEqualityComparison(){
  var a = 1;
  var b = "1";
  return a === parseInt(b);
}
