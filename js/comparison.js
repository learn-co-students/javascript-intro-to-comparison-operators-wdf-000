'use strict';

function testFalseLooseEqualityComparison() {
  const zero = 0;
  const one  = 1;

  return zero == one;
}

function testTrueLooseNonEqualityComparison() {
  const zero = 0;
  const one  = 1;
  
  return zero != one;
}

function testTrueLooseEqualityComparison() {
  const one = 1;
  const oneStr  = '1';

  return one == oneStr;
}

// Strict comparisons below
function testFalseStrictEqualityComparison() {
  const one = 1;
  const oneStr = '1';
  
  return one === oneStr;
}

function testTrueStrictEqualityComparison() {
  const one = 1;
  const oneStr = '1';

  return one === parseInt(oneStr);
}
