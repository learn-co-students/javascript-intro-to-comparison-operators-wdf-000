'use strict';
var expect = require('expect.js');
describe('Comparison Operator Basics', function() {

  describe('#testFalseLooseEqualityComparison', function() {
    it('should return false because 0 and 1 are not equal in value', function() {
      expect(testFalseLooseEqualityComparison()).toBe(false);
    });

  });

  describe('#testTrueLooseNonEqualityComparison', function() {
    it('should return true because 0 and 1 are not equal in value', function() {
      expect(testTrueLooseNonEqualityComparison()).toBe(true);
    });
  });

  describe('#testTrueLooseEqualityComparison', function() {
    it('should return true because "1" and 1 are equal in value', function() {
      expect(testTrueLooseEqualityComparison()).toBe(true);
    });
  });

  describe('#testFalseStrictEqualityComparison', function() {
    it('should return false because 1 and "1" are not the same datatype', function() {
      expect(testFalseStrictEqualityComparison()).toBe(false);
    });

  });

  describe('#testTrueStrictEqualityComparison', function() {
    it('should return true because 1 and parseInt("1") are the same datatype', function() {
      expect(testTrueStrictEqualityComparison()).toBe(true);
    });

  });



});
