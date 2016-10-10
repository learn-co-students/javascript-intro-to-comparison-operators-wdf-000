'use strict';
var firstVar;
var secondVar;

function testFalseLooseEqualityComparison(){
  firstVar = 0;
  secondVar = 1;

  return firstVar == secondVar;
}

function testTrueLooseNonEqualityComparison(){
  firstVar = 0;
  secondVar = 1;

  return firstVar != secondVar;
}

function testTrueLooseEqualityComparison(){
  firstVar = 1;
  secondVar = "1";

  return firstVar == secondVar;
}

function testFalseStrictEqualityComparison(){
  firstVar = 1;
  secondVar = "1";

  return firstVar === secondVar;
}

function testTrueStrictEqualityComparison(){
  firstVar = 1;
  secondVar = "1";

  return firstVar === parseInt(secondVar);
}
