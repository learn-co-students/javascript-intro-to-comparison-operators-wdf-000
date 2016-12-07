'use strict';

function testFalseLooseEqualityComparison(){
	var zero = 0;
	var bar = 1;

	return zero == bar;
}

function testTrueLooseNonEqualityComparison(){
	var zero = 0;
	var bar = 1;

	return zero != bar;
}

function testTrueLooseEqualityComparison(){
	var bar = 1;
	var string = "1";

	return bar == string;
}

function testFalseStrictEqualityComparison(){
	var bar = 1;
	var string = "1";

	return bar === string;
}

function testTrueStrictEqualityComparison(){
	var bar = 1;
	var string = "1";

	return bar === parseInt(string);
}
