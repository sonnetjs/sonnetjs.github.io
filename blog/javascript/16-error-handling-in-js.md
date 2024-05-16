---
slug: error-handling-in-js
title: "Error Handling in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Error Handling in JS
====================

JavaScript is a programming language that is widely used for creating dynamic and interactive web pages. Like other programming languages, it is important to handle errors that may occur during the execution of JavaScript code.
<!-- truncate -->

Types of Errors in JS
=====================

There are three types of errors that can occur in JavaScript code:

1.  **Syntax Errors**: These are errors that occur when there is a mistake in the syntax of the code. For example, missing semicolons or brackets can cause syntax errors.
2.  **Runtime Errors**: These are errors that occur during the execution of the code. For example, trying to access an undefined variable can cause a runtime error.
3.  **Logical Errors**: These are errors that occur when the code does not do what it is supposed to do. For example, a function that returns the wrong value.

Error Handling Techniques in JS
===============================

There are several techniques that can be used to handle errors in JavaScript code:

Try-Catch Statement
===================

In JavaScript, the try-catch statement is used to handle exceptions or errors that may occur in a block of code. The try block contains the code that may cause an exception, and the catch block handles the exception if it is thrown.

Here’s the basic syntax of the try-catch statement in JavaScript:

```js
try {  
  // code that may cause an exception  
} catch (error) {  
  // code to handle the exception  
}
```

The `**try**` block contains the code that may cause an exception. If an exception is thrown, JavaScript will jump out of the `**try**` block and into the `**catch**` block. The `**catch**` block takes an error object as a parameter, which contains information about the exception that was thrown.

Here’s an example that demonstrates the use of the try-catch statement in JavaScript:

```js
javascriptCopy code  
function divide(a, b) {  
  try {  
    if (b === 0) {  
      throw new Error('Cannot divide by zero');  
    }  
    return a / b;  
  } catch (error) {  
    console.log(error.message);  
    return null;  
  }  
}  
console.log(divide(10, 5)); // Output: 2  
console.log(divide(10, 0)); // Output: Cannot divide by zero, null
```

When an exception is thrown and caught using a `**catch**` block, the `**catch**` block receives an `**error**` object that contains information about the exception that was thrown. The `**error**` object has several properties that you can use to get more information about the exception. Some of the most commonly used properties are:

*   `**message**`: A string that contains a description of the exception.
*   `**name**`: A string that contains the name of the exception. This is usually the name of the constructor function that was used to create the exception.
*   `**stack**`: A string that contains a stack trace of the call stack at the time the exception was thrown. This can be useful for debugging purposes.

Here is an example that demonstrates how to use the `**error**` object to handle an exception:

```js
try {  
  // Some code that might throw an exception  
} catch (error) {  
  console.error('An error occurred:', error.message);  
  console.error('Error name:', error.name);  
  console.error('Stack trace:', error.stack);  
}
```

Throw Statement
===============

In JavaScript, the `**throw**` statement is used to throw an exception. When an exception is thrown, the JavaScript interpreter immediately stops executing the current function and looks for the nearest exception handling code to catch and handle the exception.

The basic syntax for the `**throw**` statement is as follows:

```js
throw expression;
```

The `**expression**` can be any value or object that represents the exception that you want to throw. For example, you can throw a string, a number, an object, or an error.

Here is an example that demonstrates how to use the `**throw**` statement to throw a custom error message:

```js
function divide(a, b) {  
  if (b === 0) {  
    throw 'Cannot divide by zero';  
  }  
  return a / b;  
}  
console.log(divide(10, 0)); // Throws "Cannot divide by zero" exception
```

Finally Block
=============

The `**finally**` block is a part of a `**try...catch**` statement in JavaScript. It is used to execute code that should always run, regardless of whether an exception was thrown or not. The `**finally**` block is optional, but if it is present, it is always executed, even if there is no `**catch**` block.

Here’s an example:

```js
try {  
  // Code that may throw an exception  
  // ...  
} catch (error) {  
  // Code to handle the exception  
  // ...  
} finally {  
  // Code that should always run  
  // ...  
}
```

In this example, the `**try**` block contains code that may throw an exception. If an exception is thrown, the `**catch**` block is executed to handle it. If there is no exception, the `**catch**` block is skipped.

Regardless of whether an exception was thrown or not, the code in the `**finally**` block is always executed. This can be useful for performing cleanup tasks, such as closing files or releasing resources.

Here’s an example of how you could use the `**finally**` block:

```js
function divide(a, b) {  
  try {  
    return a / b;  
  } catch (error) {  
    console.error('An error occurred:', error);  
  } finally {  
    console.log('Division operation completed');  
  }  
}  
console.log(divide(10, 2));  // Output: 5  
console.log(divide(10, 0));  // Output: Infinity
```

Custom Error Class
==================

In JavaScript, you can create custom error classes by extending the built-in `**Error**` class. This can be useful when you want to create specific types of errors for your application that have their own unique properties and behaviors. Here's an example of how you can create a custom error class:

```js
class MyError extends Error {  
  constructor(message, code) {  
    super(message);  
    this.code = code;  
    this.name = 'MyError';  
  }  
}
```

Here’s an example of how you can use this custom error class:

```js
function myFunction() {  
  throw new MyError('An error occurred', 500);  
}  
try {  
  myFunction();  
} catch (error) {  
  console.error(error.name);    // Output: "MyError"  
  console.error(error.message); // Output: "An error occurred"  
  console.error(error.code);    // Output: 500  
}
```

In conclusion, error handling is an important part of writing JavaScript code. By using techniques such as try-catch statements, throw statements, and finally blocks, you can effectively handle errors that may occur during the execution of your code.