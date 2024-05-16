---
slug: functions-in-js-named-anonymous
title: "Functions in JS: named, anonymous"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Functions in JS: named, anonymous
=================================

JavaScript is a programming language used mainly for creating interactive web pages. One of its most powerful features is the ability to create functions, which are reusable blocks of code that perform a specific task. In this blog post, we will discuss what functions are, how they work, and how to create and use them in JavaScript.
<!-- truncate -->

What are Functions?
===================

Functions are reusable blocks of code that perform a specific task. They take input in the form of arguments and return output in the form of a value. Functions can be used to perform a variety of tasks, from simple calculations to complex operations.

Creating Functions in JavaScript
================================

The simplest function in JavaScript will look like:

```js
function myFunction(){  
	console.log('Hello, I am a function');  
}
```

To execute the function we need to call the function:

```js
// calling to function  
myFunction(); // Hello, I am a function  
// again calling the function  
myFunction(); // Hello, I am a function
```

Function don’t only use for consoling some output or simple operations, you can also use function to return some value, like:

```js
function myFunction(){  
	return 'Hello I am a function';  
}  
myFunction() // no output  
console.log(myFunction()) // Hello, I am a function
```

You can also pass parameter to function

```js
function greet(name) {  
  console.log(`Hello, ${name}!`);  
}  
greet("John"); // "Hello, John!"  
greet("Jane"); // "Hello, Jane!"
```

You can also pass multiple parameters to a JavaScript function, like this:

```js
function add(a, b) {  
  return a + b;  
}  
console.log(add(2, 3)); // 5  
console.log(add(4, 5)); // 9
```

Rest parameters allow you to pass an arbitrary number of arguments to a function as an array. You can define a rest parameter using three dots (…) followed by the parameter name.

For example, consider the following code that calculates the sum of an arbitrary number of arguments using a rest parameter:

```js
function sum(...nums) {  
  return nums.reduce((total, num) => total + num);  
}  
console.log(sum(1, 2, 3, 4, 5)); // Output: 15  
console.log(sum(10, 20)); // Output: 30
```

Functions can also return objects or arrays or any complex datatype

```js
function createPerson(name, age) {  
  return {  
    name: name,  
    age: age  
  };  
}  
let person1 = createPerson("John", 30);  
let person2 = createPerson("Jane", 25);  
console.log(person1); // outputs {name: "John", age: 30}  
console.log(person2); // outputs {name: "Jane", age: 25}
```

Functions as First-Class Citizens
=================================

In JavaScript, functions are considered “first-class citizens”, which means that they are treated like any other value or data type, such as strings or numbers.

This means that functions can be:

1.  Assigned to variables:

```js
const myFunction = function() {  
  console.log("Hello world!");  
};
```

1.  Passed as arguments to other functions:

```js
function execute(func) {  
  func();  
}  
execute(function() {  
  console.log("Hello world!");  
});
```

1.  Returned as values from functions:

```js
function createFunction() {  
  return function() {  
    console.log("Hello world!");  
  };  
}  
const myFunction = createFunction();  
myFunction(); // Hello World  
createFunction()(); // Hello World
```

Because of this first-class status, functions in JavaScript can be used to create powerful abstractions and higher-order functions. This is what makes JavaScript a powerful functional programming language.

Named vs. Anonymous Functions
=============================

In JavaScript, there are two types of functions: named and anonymous.

Named Functions
===============

Named functions have a name identifier and can be defined using the `**function**` keyword.

```js
function namedFunction(param1, param2) {  
  // function body  
}
```

Named functions are hoisted at the top of the scope.

Anonymous Functions
===================

Anonymous functions do not have a name identifier, but can be assigned to a variable or passed as an argument to another function. They are also defined using the `**function**` keyword.

```js
const anonymousFunction = function(param1, param2) {  
  // function body  
};
```

Anonymous functions are not hoisted.

Arrow Functions
===============

Arrow functions are a concise way to define a function and are defined using the `**=>**` syntax. They are similar to anonymous functions but have a shorter syntax and do not have their own `**this**` keyword and instead inherit it from their lexical scope.

```js
const arrowFunction = (param1, param2) => {  
  // function body  
};
```

Arrow functions are not hoisted.

Properties of JS Functions
==========================

1.  Functions are objects: In JavaScript, functions are actually objects. This means that they can have properties and methods just like any other object.\\

```js
function myFunction() {  
  console.log("Hello, World!");  
}  
// Functions are objects and can have properties and methods  
myFunction.myProperty = "This is a property of myFunction";  
myFunction.myMethod = function() {  
  console.log("This is a method of myFunction");  
}  
// Access the property and method of myFunction  
console.log(myFunction.myProperty); // "This is a property of myFunction"  
myFunction.myMethod(); // "This is a method of myFunction"
```

2\. Functions can be nested: In JavaScript, functions can be nested within other functions. This allows for the creation of closures, which are powerful tools for maintaining state and creating private variables.

```js
function outerFunction() {  
  const outerVar = "I am defined in the outer function";  
  function innerFunction() {  
    const innerVar = "I am defined in the inner function";  
    console.log(innerVar);  
    console.log(outerVar);  
  }  
  innerFunction();  
}  
outerFunction();   
// I am defined in the outer function  
// I am defined in the inner function
```

3\. Functions can have default parameters: Starting with ES6, JavaScript allows for the use of default function parameters. This means that you can specify default values for parameters that are not passed in when the function is called.

```js
function greet(name = "World") {  
  console.log(`Hello, ${name}!`);  
}  
greet(); // "Hello, World!"  
greet("John"); // "Hello, John!"
```

Conclusion
==========

In this blog post, we have discussed what functions are, how to create and use them, and the different types of functions in JavaScript. Functions are an essential part of JavaScript programming and are used extensively in web development. By understanding how functions work, you can write more efficient and maintainable code.