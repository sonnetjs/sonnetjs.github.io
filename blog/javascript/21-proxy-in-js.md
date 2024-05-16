---
slug: proxy-in-js
title: "Proxy in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Proxy in JS
===========

JavaScript Proxy is a powerful feature that was introduced in ECMAScript 6 (ES6) that allows us to intercept and customize operations performed on objects. It allows us to define custom behavior for fundamental operations like object property access, assignment, and deletion. In this blog post, we’ll dive deeper into the concept of proxies in JavaScript.
<!-- truncate -->

What is a Proxy?
================

A proxy is an object that wraps an existing object and intercepts operations performed on the wrapped object. It acts as a middleman between the code and the original object, allowing us to modify its behavior without modifying the object itself.

Creating a Proxy
================

To create a Proxy, you need to use the `Proxy` constructor. The `Proxy` constructor takes two arguments: the target object and a handler object. The target object is the object that you want to wrap with the Proxy, and the handler object is an object that defines the behavior of the Proxy.

```js
let target = {};  
let handler = {};  
let proxy = new Proxy(target, handler);
```

Handler object
==============

The handler object is used to define the behavior of the Proxy. It is an object that contains one or more methods called traps. The traps are called when certain operations are performed on the Proxy.

Trap methods
============

The following are the available trap methods:

*   `get(target, property, receiver)`: This trap is called when a property of the Proxy is accessed.
*   `set(target, property, value, receiver)`: This trap is called when a property of the Proxy is set.
*   `apply(target, thisArg, argumentsList)`: This trap is called when the Proxy is called as a function.
*   `construct(target, argumentsList, newTarget)`: This trap is called when the Proxy is used with the `new` keyword.
*   `has(target, property)`: This trap is called when the `in` operator is used on the Proxy.
*   `deleteProperty(target, property)`: This trap is called when a property of the Proxy is deleted.
*   `getOwnPropertyDescriptor(target, property)`: This trap is called when the `Object.getOwnPropertyDescriptor()` method is called on the Proxy.
*   `defineProperty(target, property, descriptor)`: This trap is called when the `Object.defineProperty()` method is called on the Proxy.
*   `getPrototypeOf(target)`: This trap is called when the `Object.getPrototypeOf()` method is called on the Proxy.
*   `setPrototypeOf(target, prototype)`: This trap is called when the `Object.setPrototypeOf()` method is called on the Proxy.

Examples
========

Let’s take an example to understand how to create a proxy:

```js
let target = {  
    name: "John",  
    age: 30  
};  
let handler = {  
    get: function(target, prop, receiver) {  
        console.log(`Getting ${prop}`);  
        return target[prop];  
    },  
    set: function(target, prop, value) {  
        console.log(`Setting ${prop} to ${value}`);  
        target[prop] = value;  
    }  
};  
let proxy = new Proxy(target, handler);  
console.log(proxy.name); // Getting name, John  
proxy.age = 40; // Setting age to 40  
console.log(proxy.age); // Getting age, 40
```

Another example where the Proxy is used for validation:

```js
let user = {  
    name: "",  
    age: 0  
};  
let handler = {  
    set: function(target, prop, value) {  
        if (prop === "age" && (!Number.isInteger(value) || value < 0)) {  
            throw new TypeError("Age must be a positive integer");  
        }  
        target[prop] = value;  
    }  
};  
let proxy = new Proxy(user, handler);  
proxy.name = "John";  
proxy.age = 30;  
console.log(proxy); // {name: "John", age: 30}  
proxy.age = -1; // Throws TypeError: Age must be a positive integer
```

Common use cases of Proxies
===========================

Validation
==========

One of the most common use cases for proxies is input validation. Proxies can be used to define rules for valid data types and formats for object properties, and any attempts to set properties that violate these rules can be blocked or thrown an error.

```js
let target = {};  
let handler = {  
    set: function(target, property, value, receiver) {  
        if (typeof value !== 'string') {  
            throw new Error('Only string values are allowed');  
        }  
        target[property] = value;  
        return true;  
    }  
};  
let proxy = new Proxy(target, handler);  
proxy.name = "John"; // Allowed  
proxy.age = 30; // Throws an error
```

Performance optimization
========================

Another common use case for proxies is performance optimization. For example, suppose you have a large object that is frequently accessed, and you want to cache its properties to improve performance. You can use a proxy to intercept property access and cache the values to avoid repeated access to the object.

```js
let target = { /* Large object */ };  
let cache = {};  
let handler = {  
    get: function(target, property, receiver) {  
        if (!(property in cache)) {  
            cache[property] = target[property];  
        }  
        return cache[property];  
    }  
};  
let proxy = new Proxy(target, handler);  
console.log(proxy.property1); // The value is cached  
console.log(proxy.property2); // The value is cached
```

Proxies are a powerful feature in JavaScript that allows you to intercept and customize certain operations that are performed on another object. They provide a way to implement custom behavior for fundamental language operations that is not possible with normal JavaScript objects. Proxies can be used for a variety of purposes such as validation, logging, and caching.