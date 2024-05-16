---
slug: variables-in-js-var-let-const
title: "Variables in JS: var, let, const"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Variables in JS: var, let, const
================================

JavaScript is a high-level programming language that is widely used for web development. One of the fundamental concepts in JavaScript is the use of variables. Variables are used to store data values that can be used throughout the code.
<!-- truncate -->

There are three different ways to declare variables in JavaScript: const, let, and var.

var
===

To use `var` in JavaScript, you simply need to declare a variable using the keyword `var`, followed by the variable name and an optional assignment operator to set the initial value. For example:

```js
var x = 5;  
console.log(x); // 5  
var y;  
y = 12;  
console.log(y); // 12
```

If you don’t initialize a variable declared with `var`, the initial value of variable is `undefined`.

```js
var x;  
console.log(x) // undefined
```

In JavaScript, variables declared with the `var` keyword can be reinitialized, which means you can initialize a variable multiple times with different values.

```js
var x = 5;  
x = 18;  
console.log(x) // 18
```

In JavaScript, variables declared with the `var` keyword can also be redeclared within the same scope. This means you can declare the same variable multiple times with different values.

```js
var x = 10;  
console.log(x); // 10  
var x;  
console.log(x); // undefined  
var x = 20;  
console.log(x); // 20
```

Scoping Rules
-------------

Variables declared with the `var` keyword have function-level scope. This means that if a variable is declared within a function, it is only accessible within that function.

```js
function myFunction() {  
  var x = 10;  
  console.log(x); // 10  
}  
myFunction();  
console.log(x); // ReferenceError: x is not defined
```

If a variable is declared outside of a function, it is accessible throughout the entire program.

```js
var x = 3;  
function myFunction(){  
	x = 6 // global scoped   
}  
myFunction();  
console.log(x) // 6
```

```js
var x = 3;  
function myFunction(){  
	var x = 6 // local scoped to myFunction   
}  
myFunction();  
console.log(x) // 3
```

It is important to note that `var` does not have block-level scope. This means that if a variable is declared within a block, such as an `if` statement or loop, it is still accessible outside of that block.

```js
if (true) {  
  var x = 10;  
}  
console.log(x); // 10
```

Hoisting
--------

One important feature of `var` is hoisting, which means that variable declarations are moved to the top of their scope before the code is executed. This means that you can use a variable before it has been declared without getting an error.

```js
console.log(x); // undefined  
var x = 10;
```

This code is equivalent to:

```js
var x;  
console.log(x); // undefined  
x = 10;
```

Following code will also work fine because of the concept of hoisting in `var`

```js
x = 10;  
var x;  
console.log(x); // 10
```

However, it is generally considered best practice to declare all variables at the beginning of their scope to avoid confusion and bugs in your code.

let
===

`let` is another way to declare variables in JavaScript.

```js
let x = 5;  
console.log(x); // 5  
let y;  
y = 12;  
console.log(y); // 12
```

You can also use `let` to declare a variable without assigning a value to it. In this case, the variable will be initialized with the value `undefined`.

```js
let x;  
console.log(x); // undefined
```

Unlike `var`, `let` variables can be reassigned, but they cannot be redeclared within the same block.

```js
let x = 12;  
console.log(x); // 12  
x = 14;  
console.log(); // 14  
let x; // SyntaxError: Identifier 'x' has already been declared
```

Scoping Rules
-------------

`let` variables have block-level scope. This means that if a variable is declared within a block, such as an `if` statement or loop, it is only accessible within that block. If a variable is declared outside of a block, it is accessible throughout the entire program.

```js
function myFunction(){  
	let x = 9;  
}  
myFunction();  
console.log(x); // ReferenceError: x is not defined  
if(true){  
	let y = 2;  
}  
console.log(x); // ReferenceError: x is not defined
```

On the other hand, if we declare `let x` outside of the function or any block, it is accessible throughout the entire program:

```js
let x = 3;  
function myFunction(){  
	x = 6 // initialized the outside variable x  
}  
myFunction();  
console.log(x) // 6  
if(true){  
	x = 7;  
}  
console.log(x) // 7
```

We can redeclare the variable in different block.

```js
let x = 3;  
function myFunction(){  
	let x = 6 // local scoped to myFunction  
}  
myFunction();  
console.log(x) // 3
```

```js
let x = 3;  
if (true) {  
	let x = 6 // block scoped to if statement  
	console.log(x) // 6  
}  
console.log(x) // 3
```

Hoisting
--------

`let` variables are not hoisted to the top of their scope. This means that if you try to use a `let` variable before it is declared, you will get a `ReferenceError`.

```js
console.log(x); // ReferenceError: x is not defined  
let x = 10;
```

const
=====

`const` is used to declare a variable that cannot be reassigned, similar to a constant in other programming languages. However, it is important to note that the value of a `const` variable is not immutable. If the `const` variable is an object or an array, its properties or elements can still be modified.

```js
const myObj = {name: "John", age: 30};  
myObj.age = 31;  
console.log(myObj); // {name: "John", age: 31}
```

It is also important to note that `const` variables have block-level scope, similar to `let` variables. This means that if a variable is declared within a block, such as an `if` statement or loop, it is only accessible within that block. If a variable is declared outside of a block, it is accessible throughout the entire program.

Like `let`, `const` variables are not hoisted to the top of their scope. This means that if you try to use a `const` variable before it is declared, you will get a `ReferenceError`.

```js
console.log(x); // ReferenceError: x is not defined  
const x = 10;
```

It is generally considered best practice to use `const` for variables that will not be reassigned, and `let` for variables that will be reassigned.

Variable Naming Rules
=====================

In JavaScript, variable names must follow certain rules to be valid. Here are the common rules for naming variables in JavaScript:

1.  The variable name must start with a letter, underscore (_), or dollar sign ($). It cannot start with a number.
2.  The variable name can contain letters, digits, underscores, or dollar signs. It is recommended to use only alphanumeric characters and underscores in variable names.
3.  JavaScript is case sensitive, so `**myVariable**` and `**myvariable**` are two different variables.
4.  Avoid using reserved words as variable names, such as `**if**`, `**else**`, `**while**`, etc.
5.  Use descriptive names that reflect the purpose of the variable. This helps to make the code more readable and maintainable.
6.  Do not use spaces in variable names. Use camelCase or underscores to separate words in the variable name.
7.  Variable names should be concise and meaningful. A good variable name should accurately describe the data it holds or the purpose it serves.

Following these rules and conventions helps to write clean, readable, and maintainable code in JavaScript.

This blog explains the three ways to declare variables in JavaScript: `const`, `let`, and `var`. It covers the syntax, scoping rules, and hoisting behavior of each type of variable, as well as best practices for using them. It also notes that `const` variables cannot be reassigned or redeclared, but their properties or elements can still be modified if they are objects or arrays.