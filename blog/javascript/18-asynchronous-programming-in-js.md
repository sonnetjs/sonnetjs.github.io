---
slug: asynchronous-programming-in-js
title: "Asynchronous Programming in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Asynchronous Programming in JS
==============================

Asynchronous programming is a way of writing non-blocking code in JavaScript. In traditional programming, code runs sequentially from top to bottom, which means that one line of code is executed at a time. However, when dealing with long-running tasks such as network requests or file I/O, synchronous programming can lead to unresponsive applications.
<!-- truncate -->

Background
==========

Asynchronous programming is necessary in JavaScript for several reasons, especially when it comes to web development.

Firstly, many web applications need to perform I/O operations, such as reading and writing data to databases or making HTTP requests to external APIs. These operations can take a long time to complete, especially if the network connection is slow or the server is under heavy load. If we execute these operations synchronously, they will block the main thread of execution, making the entire application unresponsive until the operation is complete. Asynchronous programming allows us to execute these operations in the background, without blocking the main thread, making the application more responsive and performant.

Secondly, JavaScript runs on a single thread, which means that it can only execute one task at a time. Asynchronous programming allows us to break up long-running tasks into smaller, asynchronous tasks, which can be executed simultaneously. For example, we can load several images in the background while the main thread is handling user input. This approach makes the application appear more responsive and improves the user experience.

Finally, JavaScript is frequently used to build real-time applications, such as chat applications or online multiplayer games. In these applications, it is essential to update the UI in real-time, based on data received from the server. Asynchronous programming allows us to receive and process data in the background, without blocking the main thread, and then update the UI when the data is ready. This approach enables real-time updates and improves the overall user experience.

In asynchronous programming, we execute tasks without blocking the main thread of execution, allowing for multiple tasks to run simultaneously. JavaScript provides several mechanisms for implementing asynchronous programming, including callbacks, promises, and the newer async/await syntax.

Callback
========

Callbacks are the oldest mechanism for implementing asynchronous programming in JavaScript. They are functions that are passed as arguments to other functions and executed once a particular task is complete. Callbacks allow developers to handle asynchronous operations by providing a way to execute code once a particular task has finished. However, as the complexity of the codebase increases, callbacks can become challenging to manage, leading to callback hell, where the code becomes nested and difficult to read.

```js
function add(a, b) {  
  return a + b;  
}  
function multiply(a, b, callback) {  
  const result = callback(a, b);  
  console.log(result);  
}  
multiply(3, 4, add); // Output: 7
```

`setTimeOut` is an asynchronous function which creates a separate thread to perform function which is happening inside callback of this function.

```js
function fetchData(callback) {  
  // Simulate a delay of 2 seconds (2000 milliseconds)  
  setTimeout(function() {  
    const data = {  
      name: "John Doe",  
      age: 30,  
      city: "New York"  
    };  
    callback(data);  
  }, 2000);  
console.log("Fetching data...");  
}  
function displayData(data) {  
  // Log the data to the console  
  console.log(data);  
}  
// Fetch the data and display it using the displayData callback function  
fetchData(displayData);  
// Fetching data...  
// {name: "John Doe", age: 30, city: "New York"}
```

Callback Hell
=============

Callback hell is a term used to describe deeply nested and difficult-to-read code that arises from using multiple levels of callbacks in JavaScript. Here’s an example of callback hell:

```js
function operation1(callback1) {  
  // First level of nesting  
  setTimeout(function() {  
    console.log('Operation 1');  
    callback1();  
  }, 1000);  
}  
function operation2(callback2) {  
  // Second level of nesting  
  setTimeout(function() {  
    console.log('Operation 2');  
    callback2();  
  }, 1000);  
}  
function operation3(callback3) {  
  // Third level of nesting  
  setTimeout(function() {  
    console.log('Operation 3');  
    callback3();  
  }, 1000);  
}  
operation1(function() {  
  operation2(function() {  
    operation3(function() {  
      console.log('All operations completed!');  
    });  
  });  
});
```

Promise
=======

Promises were introduced in ECMAScript 6 as an alternative to callbacks. A promise is an object representing the eventual completion or failure of an asynchronous operation. They provide a more flexible and expressive way to write asynchronous code than callbacks, as they allow developers to chain multiple asynchronous operations and handle errors in a more structured and easy-to-read manner. Promises are easier to manage than callbacks, but they still require a fair amount of boilerplate code.

```js
function fetchData() {  
  return new Promise(function(resolve, reject) {  
    // Simulate a delay of 2 seconds (2000 milliseconds)  
    setTimeout(function() {  
      const data = {  
        name: "John Doe",  
        age: 30,  
        city: "New York"  
      };  
if (data) {  
        resolve(data);  
      } else {  
        reject("Error fetching data.");  
      }  
    }, 2000);  
  });  
}  
fetchData()  
  .then(function(data) {  
    console.log(data);  
  })  
  .catch(function(error) {  
    console.log(error);  
  });
```

Promise Chaining
================

Promise chaining is a technique for managing multiple asynchronous operations in a specific order using Promises. It involves returning a Promise from a `**then()**` callback function, which can then be chained with another `**then()**` function.

When chaining Promises, each `**then()**` callback function is executed after the previous Promise has resolved. The result of the previous Promise is passed as an argument to the `**then()**` callback function, which can then return a new Promise to continue the chain.

By chaining Promises together, we can perform a series of asynchronous operations in a specific order, without having to nest multiple callback functions within each other (known as “callback hell”). This makes the code easier to read and maintain.

```js
function fetchUserData() {  
  return new Promise(function(resolve, reject) {  
    setTimeout(function() {  
      const userData = {  
        name: "John Doe",  
        age: 30,  
        city: "New York"  
      };  
if (userData) {  
        resolve(userData);  
      } else {  
        reject("Error fetching user data.");  
      }  
    }, 2000);  
  });  
}  
function fetchOrdersData(userId) {  
  return new Promise(function(resolve, reject) {  
    setTimeout(function() {  
      const ordersData = {  
        id: "123456",  
        userId: userId,  
        items: ["item1", "item2", "item3"],  
        totalPrice: 100  
      };  
      if (ordersData) {  
        resolve(ordersData);  
      } else {  
        reject("Error fetching orders data.");  
      }  
    }, 2000);  
  });  
}  
fetchUserData()  
  .then(function(userData) {  
    console.log(userData);  
    return fetchOrdersData(userData.id);  
  })  
  .then(function(ordersData) {  
    console.log(ordersData);  
  })  
  .catch(function(error) {  
    console.log(error);  
  });
```

`async` / `await`
=================

The async/await syntax, introduced in ECMAScript 2017, provides a cleaner and more concise way of working with promises. Async/await is built on top of promises, and it allows developers to write asynchronous code that looks more like synchronous code. Async/await uses the keywords `**async**` and `**await**` to manage promises, making it easier to handle errors and write cleaner code. It is quickly becoming the preferred way of handling asynchronous programming in JavaScript.

```js
function fetchData() {  
  return new Promise(function(resolve, reject) {  
    // Simulate a delay of 2 seconds (2000 milliseconds)  
    setTimeout(function() {  
      const data = {  
        name: "John Doe",  
        age: 30,  
        city: "New York"  
      };  
if (data) {  
        resolve(data);  
      } else {  
        reject("Error fetching data.");  
      }  
    }, 2000);  
  });  
}  
async function getData() {  
  try {  
    const data = await fetchData();  
    console.log(data);  
  } catch (error) {  
    console.log(error);  
  }  
}  
getData();
```

In conclusion, asynchronous programming is a powerful technique that allows JavaScript to handle long-running tasks without disrupting the user experience. By using callbacks, promises, and async/await, developers can write more efficient and maintainable code, resulting in better performing applications.