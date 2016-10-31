'use strict';

function testFalseLooseEqualityComparison(){
  return 0 == 1;
}

function testTrueLooseNonEqualityComparison(){
  return !0 ==1;

}

function  testTrueLooseEqualityComparison(){
    return 1 == "1"

}

function testFalseStrictEqualityComparison(){
  return 1 === "1"
}

function testTrueStrictEqualityComparison(){
  return 1 === parseInt("1");
}
