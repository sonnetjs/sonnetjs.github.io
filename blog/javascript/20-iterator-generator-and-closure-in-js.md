---
slug: iterator-generator-and-closure-in-js
title: "Iterator, Generator and Closure in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Iterator, Generator and Closure in JS
=====================================

JavaScript is a versatile language that supports several powerful features that make it easier to write efficient, reusable, and modular code. In this blog post, we’ll take a closer look at three such features — iterators, generators, and closures.
<!-- truncate -->

Iterator
========

Iterators are objects that allow you to traverse through a collection of data. In JavaScript, iterators are implemented using the **Symbol.iterator** method. This method returns an object with a **next()** method. The **next()** method returns an object with two properties — **value** and **done**. The **value** property is the next value in the collection and the **done** property is a boolean that indicates whether the end of the collection has been reached.

Here is an example of how to use an iterator in JavaScript:

```js
const arr = [1, 2, 3];  
const iterator = arr[Symbol.iterator]();  
console.log(iterator.next()); // { value: 1, done: false }  
console.log(iterator.next()); // { value: 2, done: false }  
console.log(iterator.next()); // { value: 3, done: false }  
console.log(iterator.next()); // { value: undefined, done: true }
```

ere’s an example of how to implement an iterator for an array of values:

```js
let arr = [1, 2, 3, 4];  
let myIterator = {  
  [Symbol.iterator]() {  
    let i = 0;  
    return {  
      next() {  
        if (i < arr.length) {  
          return { value: arr[i++], done: false };  
        } else {  
          return { value: undefined, done: true };  
        }  
      }  
    };  
  }  
};  
for (let value of myIterator) {  
  console.log(value);  
}
```

Generator
=========

Generators are functions that allow you to define an iterative algorithm by writing a single function that can maintain its own state. In JavaScript, generators are defined using the **function\\*()** syntax. The **yield** keyword is used to indicate a pause in the generator, and the **next()** method is used to continue the generator from where it left off.

Here is an example of how to use a generator in JavaScript:

```js
function* countFrom(n) {  
  while (true) {  
    yield n++;  
  }  
}  
const counter = countFrom(1);  
console.log(counter.next()); // { value: 1, done: false }  
console.log(counter.next()); // { value: 2, done: false }  
console.log(counter.next()); // { value: 3, done: false }
```

Generators are useful when you need to iterate through a large collection of data or when you need to maintain a specific state throughout the iteration process. They are also useful for creating custom iterable objects.

Closure
=======

One of the most common uses of closures is to create private variables and methods. By defining variables and functions inside another function, they are not accessible from the outside, but they can still be used by functions defined within the outer function.

Closures are formed when a function is defined inside another function. The inner function has access to the outer function’s variables and parameters even after the outer function has returned. This allows for some interesting and powerful programming techniques.

Here is an example of a closure in JavaScript:

```js
function outerFunction() {  
  let outerVariable = "I am outside!";  
function innerFunction() {  
    console.log(outerVariable);  
  }  
  return innerFunction;  
}  
let inner = outerFunction();  
inner(); // "I am outside!"
```

This is just one example of how closures can be used in JavaScript. They are a powerful tool for creating modular and encapsulated code.

Another common use of closures is to create factory functions. A factory function is a function that returns another function, and the returned function can be customized with parameters.

Here is an example of a factory function that creates functions to add a given value to a number:

```js
function createAdder(value) {  
  return function(number) {  
    return number + value;  
  }  
}  
let add5 = createAdder(5);  
let add10 = createAdder(10);  
console.log(add5(2)); // 7  
console.log(add10(2)); // 12
```

Closures can also be used to create iterators. An iterator is an object that returns a sequence of values, typically used in a loop.

Here is an example of an iterator created using a closure:

```js
function createCounter() {  
  let count = 0;  
return function() {  
    count++;  
    return count;  
  }  
}  
let counter = createCounter();  
console.log(counter()); // Output: 1  
console.log(counter()); // Output: 2  
console.log(counter()); // Output: 3
```

When `counter` is called, it returns a new value each time, starting with 1. This allows for easy iteration over a sequence of numbers without the need for a traditional loop.

In conclusion, closures are a powerful tool in JavaScript for creating modular and encapsulated code. They allow for private variables and methods, factory functions, and iterators. Understanding closures is an important part of learning advanced JavaScript programming techniques.