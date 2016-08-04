'use strict';



function testFalseLooseEqualityComparison(){
  var zero = 0;
  var one = 1;  
  return zero == one;
}

function testTrueLooseNonEqualityComparison(){
  var zero = 0;
  var one = 1;  
  return zero != one;
}

function testTrueLooseEqualityComparison(){
  var one = 1;  
  var one_s = "1"
  return one == one_s;
}


function testFalseStrictEqualityComparison(){
  var one = 1;
  var one_s = '1';
  return one === one_s;
}

function testTrueStrictEqualityComparison(){
  var one = 1;
  var one_s = '1';
  return one === parseInt(one_s);
}
