'use strict';

function testFalseLooseEqualityComparison(){
  var zero = 0
  var one = 1
  return zero == one
}

function testTrueLooseNonEqualityComparison(){
  var zero = 0
  var one = 1
  return zero != one
}

function testTrueLooseEqualityComparison(){
  var one = 1
  var strOne = '1'
  return one == strOne
}

function testFalseStrictEqualityComparison(){
  var one = 1
  var strOne = '1'
  return one === strOne
}

function testTrueStrictEqualityComparison(){
  var one = 1
  var strOne = '1'
  return one === parseInt(strOne)
}