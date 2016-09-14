'use strict';

function testFalseLooseEqualityComparison() {
  // should return false because 0 and 1 are not equal in value
  return 0 == 1
}

function testTrueLooseNonEqualityComparison() {
  // should return true because 0 and 1 are not equal in value}
  return 0 != 1
}

function testTrueLooseEqualityComparison() {
  // should return true because "1" and 1 are equal in value
  return 1 == "1"
}

function testFalseStrictEqualityComparison() {
  // should return false because 1 and "1" are not the same datatype
  return 1 === "1"
}

function testTrueStrictEqualityComparison() {
  // should return true because 1 and parseInt("1") are the same datatype
  return 1 === parseInt("1")
}