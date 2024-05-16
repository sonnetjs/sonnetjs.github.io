---
slug: scheduling-in-js
title: "Scheduling in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Scheduling in JS
================

JavaScript is a programming language that is widely used for building web applications. One of the important features of JavaScript is scheduling, which allows developers to execute code at a specific time or after a certain interval.
<!-- truncate -->

setTimeout()
============

The `setTimeout()` function is used to execute a function after a certain delay. The delay is specified in milliseconds. Here is an example of using `setTimeout()`:

```js
setTimeout(function() {  
  console.log("Hello, World!");  
}, 3000);
```

In this example, the function `console.log()` will be executed after a delay of 3 seconds.

setInterval()
=============

The `setInterval()` function is used to execute a function repeatedly after a certain interval. The interval is specified in milliseconds. Here is an example of using `setInterval()`:

```js
setInterval(function() {  
  console.log("Hello, World!");  
}, 1000);
```

In this example, the function `console.log()` will be executed every 1 second.

clearTimeout()
==============

The `clearTimeout()` function is used to cancel a `setTimeout()` function. Here is an example of using `clearTimeout()`:

```js
var timeoutID = setTimeout(function() {  
  console.log("Hello, World!");  
}, 3000);  
clearTimeout(timeoutID);
```

In this example, the `setTimeout()` function will be cancelled before it has a chance to execute.

clearInterval()
===============

The `clearInterval()` function is used to cancel a `setInterval()` function. Here is an example of using `clearInterval()`:

```js
var intervalID = setInterval(function() {  
  console.log("Hello, World!");  
}, 1000);  
clearInterval(intervalID);
```

In this example, the `setInterval()` function will be cancelled and the code inside the function will no longer be executed.

In conclusion, scheduling is an important feature of JavaScript that allows developers to execute code at a specific time or after a certain interval. The `setTimeout()` and `setInterval()` functions are used to achieve this functionality. Additionally, the `clearTimeout()` and `clearInterval()` functions are used to cancel scheduled functions.