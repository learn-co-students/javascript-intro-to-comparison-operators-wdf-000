'use strict';

function testFalseStrictEqualityComparison() {
  var zero = 0
  var one = 1
  return zero == one
}


function testTrueStrictEqualityComparison() {
  var one = 1
  var one_string = "1"
  return one !== one_string
}

function testFalseLooseEqualityComparison() {
  var zero = 0
  var one = 1
  return zero == one
}


function testTrueLooseNonEqualityComparison() {
  var zero = 0
  var one = 1
  return zero != one
}


function testTrueLooseEqualityComparison() {
  var one = 1
  var one_string = "1"
  return one == one_string
}
