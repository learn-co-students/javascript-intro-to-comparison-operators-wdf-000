'use strict';

var x = 0;
var y = 0;


function testFalseLooseEqualityComparison() {
  x = 0;
  y = 1;
  return x == y
}

function testTrueLooseNonEqualityComparison() {
  x = 0;
  y = 1;
  return x != y;
}

function testTrueLooseEqualityComparison() {
  x = "1";
  y = 1;
  return x == y;
}

function testFalseStrictEqualityComparison() {
  x = 1;
  y = "1";
  return x === y;
}

function testTrueStrictEqualityComparison() {
  x = 1;
  y = parseInt("1");
  return x === y;
}
