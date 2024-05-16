---
slug: call-stack-and-callback-queue-in-js
title: "Call Stack and Callback Queue in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Call Stack and Callback Queue in JS
===================================

JavaScript is a single-threaded language, which means it can only perform one task at a time. However, it is capable of handling multiple tasks simultaneously using the concept of Call Stack. The Call Stack is a mechanism used by the JavaScript engine to keep track of function calls. When a function is called, it is added to the top of the Call Stack, and when it returns, it is removed from the stack.
<!-- truncate -->

Call Stack
==========

Consider the following code example:

```js
function firstFunction() {  
  console.log("This is the first function.");  
}  
function secondFunction() {  
  firstFunction();  
  console.log("This is the second function.");  
}  
secondFunction();
```

When `secondFunction()` is called, it first calls `firstFunction()`, which is added to the top of the Call Stack. Once `firstFunction()` completes its execution, it is removed from the stack, and `secondFunction()` continues its execution, adding itself to the top of the stack. Finally, when `secondFunction()` completes its execution, it is removed from the stack.

Recursion
=========

Recursion is a powerful programming technique that can be used to solve complex problems. Recursion is a technique in programming where a function calls itself repeatedly until it reaches a base condition. Recursion is an essential concept in JavaScript and is widely used in various programming scenarios.

**Direct Recursion**: This is the most common type of recursion, in which a function calls itself directly.

```js
function factorial(n) {  
  if (n === 0) {  
    return 1;  
  } else {  
    return n * factorial(n - 1);  
  }  
}  
console.log(factorial(5));
```

**Indirect Recursion**: In this type of recursion, multiple functions call each other in a circular manner.

```js
function fib1(num) {  
  if (num <= 1) {  
    return num;  
  } else {  
    return fib2(num - 1) + fib1(num - 2);  
  }  
}  
function fib2(num) {  
  if (num <= 1) {  
    return num;  
  } else {  
    return fib1(num - 1) + fib2(num - 2);  
  }  
}  
console.log(fib1(6)); // 8
```

Recursion should be used with caution, as it can lead to stack overflow errors if not implemented correctly.

Callback Queue
==============

The Callback Queue is a data structure that holds a queue of functions to be executed. When a function is invoked and its operation is asynchronous, it is added to the Callback Queue instead of blocking the execution of other code. This means that while the asynchronous operation is in progress, other code can continue to execute without interruption.

```js
// Example of adding a function to the Callback Queue  
setTimeout(function(){  
  console.log("This function is added to the Callback Queue");  
}, 0);
```

The Callback Queue maintains the order in which the functions are added. The first function to be added to the queue will be the first to be executed when the Call Stack is empty. This ensures that the functions are executed in the order they were added to the Callback Queue.

Event Loop
==========

The Event Loop is a process that constantly checks the Callback Queue for functions to execute. If the Call Stack is empty, it dequeues the first function in the Callback Queue and adds it to the Call Stack for execution.

```js
// Example of the Event Loop  
function firstFunction(){  
  console.log("This is the first function");  
  setTimeout(function(){  
    console.log("This is the second function");  
  }, 0);  
  console.log("This is the third function");  
}  
firstFunction();
```

The Call Stack is a data structure that keeps track of the functions that are currently being executed. When a function is called, it is added to the Call Stack. When a function completes its execution, it is removed from the Call Stack.

How they work together
======================

When an asynchronous operation is triggered, a function (the callback function) is added to the Callback Queue. The Event Loop constantly checks the Callback Queue for the next function to execute. Once the Call Stack is emptied, the Event Loop dequeues the first function in the Callback Queue and adds it to the Call Stack for execution.

```js
// Example of how the Callback Queue and Event Loop work together  
console.log("Start");  
setTimeout(function() {  
  console.log("This is the first function");  
}, 3000);  
setTimeout(function() {  
  console.log("This is the second function");  
}, 1000);  
console.log("End");
```

This allows JavaScript to handle asynchronous operations without blocking the execution of other code.

In conclusion, the Call Stack is used to keep track of function calls, while Recursion is a technique in programming where a function calls itself repeatedly. The Callback Queue is a data structure that holds a queue of functions to be executed, while the Event Loop is a process that constantly checks the Callback Queue for functions to execute. These concepts allow JavaScript to handle multiple tasks simultaneously without blocking the execution of other code.