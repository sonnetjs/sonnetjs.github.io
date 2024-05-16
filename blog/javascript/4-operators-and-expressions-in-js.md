---
slug: operators-and-expressions-in-js
title: "Operators and Expressions in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Operators and Expressions in JS
===============================

JavaScript is a powerful programming language that allows you to create dynamic and interactive web pages. One of the key features of JavaScript is its use of operators and expressions.
<!-- truncate -->

Operators in JS
===============

Operators in JavaScript are used to perform various operations on values. JavaScript has several types of operators, including arithmetic, comparison, logical, assignment, bitwise, and conditional operators.

Arithmetic Operators
====================

Arithmetic operators are used to perform mathematical calculations on numeric values. These operators include addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).

```js
let num1 = 10;  
let num2 = 20;  
// Addition  
let sum = num1 + num2;  
console.log(sum); // 30  
// Subtraction  
let difference = num1 - num2;  
console.log(difference); // -10  
// Multiplication  
let product = num1 * num2;  
console.log(product); // 200  
// Division  
let quotient = num2 / num1;  
console.log(quotient); // 2  
// Modulo (Remainder)  
let remainder = num2 % num1;  
console.log(remainder); // 0  
// Increment  
num1++;  
console.log(num1); // 11  
// Decrement  
num2--;  
console.log(num2); // 19
```

Comparison Operators
====================

Comparison operators are used to compare two values and return a Boolean value of true or false. These operators include `==`, `!=`, `>`, `<`, `>=`, and `<=`.

```js
let num1 = 10;  
let num2 = 20;  
// Equal to  
console.log(num1 == num2); // false  
// Not equal to  
console.log(num1 != num2); // true  
// Greater than  
console.log(num2 > num1); // true  
// Less than  
console.log(num1 < num2); // true  
// Greater than or equal to  
console.log(num2 >= num1); // true  
// Less than or equal to  
console.log(num1 <= num2); // true
```

Logical Operators
=================

Logical operators are used to evaluate two or more expressions and return a Boolean value of true or false. These operators include &&, ||, and !.

```js
let num1 = 10;  
let num2 = 20;  
let num3 = 30;  
// Logical AND  
console.log(num1 < num2 && num2 < num3); // true  
// Logical OR  
console.log(num1 < num2 || num2 > num3); // true  
// Logical NOT  
console.log(!(num1 == num2)); // true
```

Assignment Operators
====================

Assignment operators are used to assign values to variables. These operators include `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `<<=`, `>>=`, `&=`, `^=`, and `|=`.

```js
let num1 = 10;  
let num2 = 20;  
// Assignment  
num1 = num2;  
console.log(num1); // 20  
// Addition assignment  
num1 += num2;  
console.log(num1); // 40  
// Subtraction assignment  
num1 -= num2;  
console.log(num1); // 20  
// Multiplication assignment  
num1 *= num2;  
console.log(num1); // 400  
// Division assignment  
num1 /= num2;  
console.log(num1); // 20  
// Modulo (Remainder) assignment  
num1 %= num2;  
console.log(num1); // 0
```

Bitwise Operators
=================

Bitwise operators are used to perform bitwise operations on values. These operators include `&`, `|`, `^`, `~`, `<<`, and `>>`.

```js
let num1 = 10;  
let num2 = 20;  
// Bitwise AND  
console.log(num1 & num2); // 0  
// Bitwise OR  
console.log(num1 | num2); // 30  
// Bitwise XOR  
console.log(num1 ^ num2); // 30  
// Bitwise NOT  
console.log(~num1); // -11  
// Left shift  
console.log(num1 << 1); // 20  
// Right shift  
console.log(num1 >> 1); // 5
```

Conditional Operator
====================

Conditional operators are used to assign a value to a variable based on a condition. The syntax for the conditional operator is as follows:

```js
let age = 20;  
let status = (age >= 18) ? "adult" : "minor";  
console.log(status); // "adult"
```

Nullish Coalescing Operator
===========================

The Nullish Coalescing Operator (??) is used to check if a value is null or undefined, and if it is, it returns a default value instead.

```js
let num1 = 10;  
let num2 = null;  
// Using the Nullish Coalescing Operator  
let result = num1 ?? 20;  
console.log(result); // 10  
result = num2 ?? 20;  
console.log(result); // 20
```

Expressions in JS
=================

Expressions in JavaScript are combinations of values, variables, and operators that are evaluated to produce a value. There are several types of expressions in JavaScript, including arithmetic expressions, string expressions, Boolean expressions, and object expressions.

Arithmetic Expressions
======================

Arithmetic expressions are expressions that use arithmetic operators to perform mathematical calculations on numeric values.

```js
let num1 = 10;  
let num2 = 20;  
// Addition  
let result1 = num1 + num2;  
console.log(result1); // 30  
// Subtraction  
let result2 = num1 - num2;  
console.log(result2); // -10  
// Multiplication  
let result3 = num1 * num2;  
console.log(result3); // 200  
// Division  
let result4 = num1 / num2;  
console.log(result4); // 0.5  
// Modulo (Remainder)  
let result5 = num1 % num2;  
console.log(result5); // 10
```

String Expressions
==================

String expressions are expressions that concatenate two or more strings together using the + operator.

```js
let firstName = "John";  
let lastName = "Doe";  
// Concatenation  
let fullName = firstName + " " + lastName;  
console.log(fullName); // "John Doe"  
// String Length  
let nameLength = fullName.length;  
console.log(nameLength); // 8  
// Accessing Characters  
let firstChar = fullName[0];  
console.log(firstChar); // "J"  
// Substring  
let firstNameSubstring = fullName.substring(0, 4);  
console.log(firstNameSubstring); // "John"  
// Replacing Characters  
let replacedName = fullName.replace("Doe", "Smith");  
console.log(replacedName); // "John Smith"
```

Boolean Expressions
===================

Boolean expressions are expressions that evaluate to either true or false.

```js
let num1 = 10;  
let num2 = 20;  
// Greater Than  
let greaterThan = num2 > num1;  
console.log(greaterThan); // true  
// Less Than  
let lessThan = num1 < num2;  
console.log(lessThan); // true  
// Greater Than or Equal To  
let greaterThanOrEqualTo = num1 >= num2;  
console.log(greaterThanOrEqualTo); // false  
// Less Than or Equal To  
let lessThanOrEqualTo = num2 <= num1;  
console.log(lessThanOrEqualTo); // false  
// Equal To  
let equalTo = num1 == num2;  
console.log(equalTo); // false  
// Not Equal To  
let notEqualTo = num1 != num2;  
console.log(notEqualTo); // true
```

Object expressions are expressions that create a new object using the new operator.

```js
let person = {  
  firstName: "John",  
  lastName: "Doe",  
  age: 30,  
  hobbies: ["reading", "swimming", "hiking"],  
  address: {  
    street: "123 Main St",  
    city: "Anytown",  
    state: "CA",  
    zip: "12345"  
  },  
  isStudent: false  
};  
console.log(person.firstName); // "John"  
console.log(person.age); // 30  
console.log(person.hobbies[1]); // "swimming"  
console.log(person.address.city); // "Anytown"  
console.log(person.isStudent); // false  
// Adding a new property to the object  
person.email = "john.doe@example.com";  
console.log(person.email); // "john.doe@example.com"  
// Modifying an existing property of the object  
person.age = 35;  
console.log(person.age); // 35  
// Deleting a property of the object  
delete person.isStudent;  
console.log(person.isStudent); // undefined
```

Operators and expressions are essential components of JavaScript programming. By understanding how operators and expressions work in JS, you can create powerful and dynamic web pages that are sure to impress your users.