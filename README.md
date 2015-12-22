# JavaScript Comparison Operators

## Objectives

+ Explain the different comparison operators in JS
+ Explain strict comparison operators
+ Use strict comparison operators

## About

Recall that Comparison operators allow you to test the relationship (equality and identity) between objects. 

## List

By now you know about the following comparison operators: 

| Operator      | Description   | Example |
| ------------- | ------------- |-------- |
| ==            | checks if value of two operands are equal or not. If yes then returns true  | (10 == 20) is not true; hence returns false |
| !=            |checks if the value of 2 operands are equal. If values are not equal, returns true| (a != b) is true; hence returns true |
| >             | checks if value of left operand is greater than value of right operand. If left operand is greater than right operand, returns true  | (10 > 20) is not true hence returns false         | 
| <  | checks if value of left operand is less than value of right operand. If left operand is less than right operand, returns true | (10 < 20) is true        | 
| >=   | checks if value of left operand is greater than or equal to value of right operand. If it is, returns true; else returns false  | (10 >= 20 ) is false         | 
| <=  | checks if value of left operand is less than or equal to right operand. If left operand is less than or equal to right operand, returns true; else returns false  |  (10 <= 20) is true       | 

## Unique to JavaScript

In JavaScript, in addition to the regular comparison operators, we have **strict comparison operators**; which are strict equals  (`===`) and strict not-equals (`!==`).

#### Loose comparison operators

**Loose comparison operators** ( `==` and `!=` ) are quite liberal - they convert type to match one another. This means that values may be considered equal even if they are different types, since the operator will force coercion of one or both operators into a single type (usually a number) before performing a comparison.

```javascript
var bar = 0;
var foo = 1;

var yoo = "1";
var zee = 2;

// does 1 equal 0?
foo == bar; // returns false
foo != bar; // returns true

// does  1 equal "1"?
foo == yoo; // returns true. Why? Because == operator forces coercion of string 1 ("1") into number 1 (1)
```

#### Strict comparison operators

On the other hand, **strict comparison operators** (`===` and `!==` ) compare both type and value equality.

```javascript
var bar = 0;
var foo = 1;

var yoo = '1';
var zee = 2;

foo === yoo; // returns false because though 0 and 1 are of the same type (both are numbers = identities match) they are not equal

foo === parseInt(yoo); returns true because `parseInt` converts string 1 to integer(number) 1
```

## Resources

* [MDN - Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

<a href='https://learn.co/lessons/intro-to-comparison-operators.js' data-visibility='hidden'>View this lesson on Learn.co</a>
