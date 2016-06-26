'use strict';

function testFalseLooseEqualityComparison(){
  var a = 0, 
      b = 1;

  return a == b;
}

function testTrueLooseNonEqualityComparison(){
  var a = 0,
      b = 1;

  return a != b;
}

function testTrueLooseEqualityComparison(){
  var a = 1,
      b = 1

  return a == b;
}

function testFalseStrictEqualityComparison(){
  var a = 1,
      b = "1"

  return a === b;
}

function testTrueStrictEqualityComparison(){
  var a = 1,
      b = "1"

  return a === parseInt(b);
}
