'use strict';

function testFalseLooseEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero == one;
}

function testTrueLooseNonEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero != one;
}

function testTrueLooseEqualityComparison() {
  var one = 1;
  var two = "1";
  return one == two;
}

function testFalseStrictEqualityComparison() {
  var one = 1;
  var two = "1";
  return one === two;
}

function testTrueStrictEqualityComparison() {
  var one = 1;
  var two = "1";
  return one == two;
}
