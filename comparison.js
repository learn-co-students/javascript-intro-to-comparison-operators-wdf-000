'use strict';

function testFalseLooseEqualityComparison() {
  var one = 0, two = 1;
  return one == two;
}

function testTrueLooseNonEqualityComparison() {
  var one = 0, two = 1;
  return one != two;
}

function testTrueLooseEqualityComparison() {
  var one = "1", two = 1;
  return one == two;
}

function testFalseStrictEqualityComparison() {
  var one = "1", two = 1;
  return one === two;
}

function testTrueStrictEqualityComparison() {
  var one = "1", two = 1;
  return parseInt(one) === two;
}