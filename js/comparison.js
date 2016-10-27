'use strict';

function testFalseLooseEqualityComparison(){
  var firstnum = 0;
  var secondnum = 1;
  return firstnum === secondnum;
}

function testTrueLooseNonEqualityComparison(){
  var firstnum = 0;
  var secondnum = 1;
  return firstnum != secondnum;
}

function testTrueLooseEqualityComparison(){
  var firstnum = 1;
  var secondnum = "1";
  return firstnum == secondnum;
}

function testFalseStrictEqualityComparison(){
  var firstnum = 1;
  var secondnum = "1";
  return firstnum === secondnum;
}

function testTrueStrictEqualityComparison(){
  var firstnum = 1;
  var secondnum = "1";
  return firstnum !== secondnum;
}
