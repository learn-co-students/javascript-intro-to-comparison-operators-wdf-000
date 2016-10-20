'use strict';

function testFalseLooseEqualityComparison() {
  var one = 0
  var two = 1
  return one == two
}

function testTrueLooseNonEqualityComparison() {
  var one = 0
  var two = 1
  return one != two
}

function testTrueLooseEqualityComparison() {
  var one = "1"
  var two = 1
  return one == two
}

function testFalseStrictEqualityComparison() {
  var one = "1"
  var two = 1
  return one === two
}
function testTrueStrictEqualityComparison() {
  var one = '1'
  var two = 1
  return two === parseInt(one);
}
