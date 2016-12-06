'use strict';

function testFalseLooseEqualityComparison(){
  var x = 0;
  var y = "1";
  return x == y;
}

function testTrueLooseNonEqualityComparison(){
  var x = 0;
  var y = "1";
  return x != y;
}

function testTrueLooseEqualityComparison(){
  var x = 1;
  var y = "1";
  return x == y;
}

function testFalseStrictEqualityComparison(){
  var x = 1;
  var y = "1";
  return x === y;
}

function testTrueStrictEqualityComparison(){
  var x = 1;
  var y = "1";
  return x === parseInt(y);
}
