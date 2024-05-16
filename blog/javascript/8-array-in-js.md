---
slug: array-in-js
title: "Array in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Array in JS
===========

JavaScript is an incredibly popular programming language and one of the reasons it is so popular is because of the versatility of arrays in JavaScript. Arrays in JavaScript are used to store multiple values in a single variable.
<!-- truncate -->

Creating an Array
=================

There are two ways to create an array in JavaScript. The first method is to use the Array() constructor. Here is an example:

```js
let fruits = new Array("apple", "banana", "orange");
```

The second method is to use array literal notation. Here is an example:

```js
let fruits = ["apple", "banana", "orange"];
```

Accessing Array Elements
========================

You can access individual elements of an array by referring to the index number. Here is an example:

```js
let fruits = ["apple", "banana", "orange"];  
console.log(fruits[0]); // "apple"
```

Modifying Array Elements
========================

You can modify elements of an array by referring to the index number and assigning a new value. Here is an example:

```js
let fruits = ["apple", "banana", "orange"];  
fruits[0] = "pear";  
console.log(fruits); // ["pear", "banana", "orange"]
```

Spread Syntax
=============

Spread syntax allows you to spread an array or object into another array or object. You can use the spread syntax by using three dots (…) before the array or object name.

For example, consider the following code that concatenates two arrays using spread syntax:

```js
const arr1 = [1, 2, 3];  
const arr2 = [4, 5, 6];  
const arr3 = [...arr1, ...arr2];  
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
```

You can also use spread syntax to create a copy of an array or object:

```js
javascriptCopy code  
const arr1 = [1, 2, 3];  
const arr2 = [...arr1];  
console.log(arr2); // Output: [1, 2, 3]
```

typeof Array
============

In JavaScript, the `**typeof**` operator will return "object" for an array. This is because arrays in JavaScript are a type of object.

For example:

```js
const myArray = [1, 2, 3];  
console.log(typeof myArray); // "object"
```

This can be surprising at first, but it’s important to remember that arrays in JavaScript are implemented as objects with integer-based keys that are automatically updated when elements are added or removed.

To check if a variable is an array, you can use the `**Array.isArray()**` method instead. This method returns `**true**` if the variable is an array and `**false**` otherwise. For example:

```js
const myArray = [1, 2, 3];  
console.log(Array.isArray(myArray)); // true
```

Array Methods
=============

JavaScript provides several methods for working with arrays. Here are a few of the most common methods:

push()
======

The push() method adds one or more elements to the end of an array. Here is an example:

```js
let fruits = ["apple", "banana", "orange"];  
fruits.push("pear");  
console.log(fruits); // ["apple", "banana", "orange", "pear"]
```

pop()
=====

The pop() method removes the last element from an array. Here is an example:

```js
let fruits = ["apple", "banana", "orange"];  
fruits.pop();  
console.log(fruits); // ["apple", "banana"]
```

shift()
=======

The shift() method removes the first element from an array. Here is an example:

```js
let fruits = ["apple", "banana", "orange"];  
fruits.shift();  
console.log(fruits); // ["banana", "orange"]
```

unshift()
=========

The unshift() method adds one or more elements to the beginning of an array. Here is an example:

```js
let fruits = ["apple", "banana", "orange"];  
fruits.unshift("pear");  
console.log(fruits); // ["pear", "apple", "banana", "orange"]
```

slice()
=======

The slice() method returns a new array that contains a portion of the original array. Here is an example:

```js
let fruits = ["apple", "banana", "orange", "pear"];  
let newFruits = fruits.slice(1, 3);  
console.log(newFruits); // ["banana", "orange"]
```

Loops of Array in JavaScript
============================

One of the most important features of arrays in JavaScript is the ability to loop through the elements of an array. There are several ways to loop through an array in JavaScript.

For Loop
========

The for loop is the most common way to loop through an array in JavaScript. Here is an example:

```js
let fruits = ["apple", "banana", "orange", "pear"];  
for (let i = 0; i < fruits.length; i++) {  
  console.log(fruits[i]);  
}
```

forEach() Method
================

The forEach() method is a built-in method of arrays in JavaScript that provides a convenient way to loop through the elements of an array. Here is an example:

```js
let fruits = ["apple", "banana", "orange", "pear"];  
fruits.forEach(function(fruit) {  
  console.log(fruit);  
});
```

For…of Loop
===========

The for…of loop is a newer feature of JavaScript that provides a simpler way to loop through arrays. Here is an example:

```js
let fruits = ["apple", "banana", "orange", "pear"];  
for (let fruit of fruits) {  
  console.log(fruit);  
}
```

Iterables
=========

Using loops, we can easily perform operations on each element of an array, such as displaying the elements or modifying them.

map() Method
============

The map() method is used to create a new array by applying a function to each element of an existing array. Here is an example:

```js
let numbers = [1, 2, 3, 4, 5];  
let doubledNumbers = numbers.map(function(number) {  
  return number * 2;  
});  
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

reduce() Method
===============

The reduce() method is used to reduce an array to a single value by applying a function to each element of the array. Here is an example:

```js
let numbers = [1, 2, 3, 4, 5];  
let sum = numbers.reduce(function(accumulator, currentValue) {  
  return accumulator + currentValue;  
});  
console.log(sum); // 15
```

filter() Method
===============

The filter() method is used to create a new array that contains only the elements of an existing array that meet a certain condition. Here is an example:

```js
let numbers = [1, 2, 3, 4, 5];  
let evenNumbers = numbers.filter(function(number) {  
  return number % 2 === 0;  
});  
console.log(evenNumbers); // [2, 4]
```

Using the map(), reduce(), and filter() methods, we can easily manipulate and transform arrays in JavaScript.

Conclusion
==========

Arrays are an essential tool in JavaScript programming. They are used to store multiple values in a single variable and provide a convenient way to access and modify those values. With the built-in methods provided by JavaScript, working with arrays is easy and efficient.