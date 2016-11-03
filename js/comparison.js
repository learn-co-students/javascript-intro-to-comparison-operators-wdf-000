'use strict';

function testFalseLooseEqualityComparison () {
  var first = 0
  var second = 1
  return first == second
}

function testTrueLooseNonEqualityComparison () {
  var first = 0
  var second = 1
  return first != second
}

function testTrueLooseEqualityComparison () {
  var first = 1
  var second = "1"
  return first == second
}

function testFalseStrictEqualityComparison () {
  var first = 1
  var second = "1"
  return first === second
}

function testTrueStrictEqualityComparison () {
  var first = 1
  var second = "1"
  return first === parseInt(second)
}
