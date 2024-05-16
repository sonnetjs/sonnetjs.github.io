---
slug: commenting-and-debugging-in-js
title: "Commenting and Debugging in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Commenting and Debugging in JS
==============================

When it comes to programming in JavaScript, commenting and debugging are two important tasks that every developer should be familiar with.
<!-- truncate -->

Commenting in JS
================

Commenting in JavaScript is the process of adding notes or explanations within the code. These comments are not executed by the browser and are only meant for developers to read.

In JS, there are two ways to add comments:

Single-line comments
--------------------

Single-line comments start with ‘//’ and continue until the end of the line. For example:

```js
// This is a single-line comment
```

Multi-line comments
-------------------

Multi-line comments start with ‘/_’ and end with ‘_/’. They can span across multiple lines. For example:

```js
/*  
This is a multi-line comment  
It can span across multiple lines  
*/
```

Here’s an example of a function definition with JSDoc comments:

```js
/**
 * Adds two numbers together and returns the result  
 * @param {number} num1 - The first number to add  
 * @param {number} num2 - The second number to add  
 * @returns {number} The sum of the two numbers  
 */  
function addNumbers(num1, num2) {  
  return num1 + num2;  
}  
// Example usage  
let result = addNumbers(5, 7);  
console.log(result); // 12
```

Adding comments to your code can make it more readable and easier to understand for other developers who may have to work on the same codebase.

Debugging in JS
===============

Debugging in JavaScript is the process of finding and fixing errors or bugs in the code. There are different ways to debug JavaScript code, including:

Console
-------

The console object in JavaScript provides a way to output messages to the browser’s console. This is useful for debugging purposes or for displaying information to the user. Here are some of the different functions available on the console object:

1.  console.log(): Outputs a message to the console. This method is used to log messages, variables or other information to the console.

```js
console.log('Hello, world!'); // Hello, world!  
  
const name = 'John';  
console.log(`My name is ${name}.`); // My name is John.
```

2\. console.error(): Outputs an error message to the console. This method is used to log error messages to the console.

```js
console.error('Something went wrong.'); // Something went wrong.
```

3\. console.warn(): Outputs a warning message to the console. This method is used to log warning messages to the console.

```js
console.warn('This could be a problem.'); // This could be a problem.
```

4\. console.info(): Outputs an informational message to the console. This method is used to log informational messages to the console.

```js
console.info('The sky is blue.'); // The sky is blue.
```

5\. console.debug(): Outputs a debug message to the console. This method is used to log debug messages to the console.

```js
console.debug('This is a debug message.'); // This is a debug message.
```

6\. console.assert(): Writes an error message to the console if the assertion is false. This method is used to check assertions and log error messages if they are false.

```js
const num1 = 5;  
const num2 = 10;  
  
console.assert(num1 < num2, 'num1 is not less than num2.'); // No output  
  
console.assert(num1 > num2, 'num1 is not greater than num2.'); // num1 is not greater than num2.
```

7\. console.clear(): Clears the console. This method is used to clear the console.

```js
console.clear(); // Clears the console
```

8\. console.count(): Outputs the number of times that the count() method has been called with the given label. This method is used to count how many times a specific label has been counted.

```js
function foo() {  
  console.count('foo');  
}  
  
foo(); // foo: 1  
foo(); // foo: 2  
foo(); // foo: 3
```

9\. console.group(): Groups together a set of console messages. This method is used to group console messages together.

```js
console.group('Group');  
console.log('Hello, world!');  
console.warn('This could be a problem.');  
console.groupEnd();
```

10\. console.groupCollapsed(): Groups together a set of console messages, but collapses the group initially. This method is used to group console messages together and collapse them initially.

```js
console.groupCollapsed('Group');  
console.log('Hello, world!');  
console.warn('This could be a problem.');  
console.groupEnd();
```

11\. console.groupEnd(): Ends the current group of console messages. This method is used to end a group of console messages.

```js
console.group('Group');  
console.log('Hello, world!');  
console.warn('This could be a problem.');  
console.groupEnd();  
console.log('Hello, world!'); // Not part of the group
```

12\. console.table(): Outputs an array or object as a table to the console. This method is used to log an array or object in tabular form.

```js
const fruits = ['Apple', 'Banana', 'Orange'];  
console.table(fruits);  
  
const person = {  
  name: 'John',  
  age: 30,  
  city: 'New York'  
};  
console.table(person);
```

13\. console.time(): Starts a timer in the console. This method is used to start a timer.

```js
console.time('Timer');  
// Code to be timed goes here  
console.timeEnd('Timer');
```

14\. console.timeEnd(): Ends a timer in the console. This method is used to end a timer.

```js
console.time('Timer');  
// Code to be timed goes here  
console.timeEnd('Timer');
```

15\. console.trace(): Outputs a stack trace to the console. This method is used to log a stack trace to the console.

```js
function foo() {  
  console.trace();  
}  
  
function bar() {  
  foo();  
}  
  
bar();
```

16\. console.dir(): Outputs a directory of an object to the console. This method is used to log a directory of an object to the console.

```js
const person = {  
  name: 'John',  
  age: 30,  
  city: 'New York'  
};  
  
console.dir(person);
```

17\. console.profile(): Starts the profiler in the console. This method is used to start the profiler.

```js
console.profile('Profile');  
// Code to be profiled goes here  
console.profileEnd('Profile');
```

18\. console.profileEnd(): Ends the profiler in the console. This method is used to end the profiler.

```js
console.profile('Profile');  
// Code to be profiled goes here  
console.profileEnd('Profile');
```

Using breakpoints
-----------------

Another way to debug JavaScript code is by using breakpoints. Breakpoints are markers that you can set in the code, which will pause the execution of the code at that point. This allows you to inspect the values of variables and objects at that point in time.

Using the debugger statement
----------------------------

The debugger statement is a statement in JavaScript that stops the execution of the code and launches the browser’s debugging tool. For example:

```js
let x = 10;  
debugger;  
console.log(x);
```

When the code reaches the debugger statement, it will pause execution and launch the browser’s debugging tool.

Debugging in JavaScript is an essential skill for every developer. It helps to identify and fix errors in the code, making it more efficient and reliable.