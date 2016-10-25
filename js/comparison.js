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
  var shwam = 1;
  var one = "1";
  return shwam == one;
}

function testFalseStrictEqualityComparison() {
  var shwam = 1;
  var one = "1";
  return shwam === one;
}


function testTrueStrictEqualityComparison() {
  var shwam = 1;
  var one = "1";
  return shwam === parseInt(one);
}
