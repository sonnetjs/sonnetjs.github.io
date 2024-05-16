---
slug: module-in-js-import-export
title: "Module in JS: Import, Export"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Module in JS: Import, Export
============================

JavaScript modules are a way of organizing code into reusable, self-contained components that can be easily imported and exported between different parts of an application. They provide a mechanism for encapsulating code and avoiding naming collisions, making it easier to build and maintain large-scale applications. In this blog post, we’ll dive deeper into the concept of modules in JavaScript.
<!-- truncate -->

The module system in JavaScript
===============================

JavaScript modules were introduced in ECMAScript 6 (ES6) and are now a standard feature of modern JavaScript. The module system in JavaScript allows us to define modules, which are self-contained units of code that can be imported and used in other parts of an application. Each module has its own private scope, which means that variables, functions, and classes defined in a module are not accessible from outside the module unless they are explicitly exported.

Modules can be defined in two ways: using the `**import**` and `**export**` keywords or using the `**CommonJS**` module system.

Using `import` and `export`
===========================

Exporting a Module
------------------

To make a variable, function or object available to other files, we need to export it. We can use the `export` keyword to do so. For example,

```js
// greet.js  
export function sayHello(name) {  
  console.log(`Hello, ${name}!`);  
}  
export let message = "Welcome to our website";
```

Importing a Module
------------------

To use the exported variable, function or object in another file, we need to import it. We can use the `import` keyword to do so. For example,

```js
// main.js  
import { sayHello, message } from './greet.js';  
sayHello('Lily'); // Output: Hello, Lily!  
console.log(message); // Output: Welcome to our website
```

We can also import everything from a module using the `*` character. For example,

```js
// main.js  
import * as greetings from './greet.js';  
greetings.sayHello('Lily'); // Output: Hello, Lily!  
console.log(greetings.message); // Output: Welcome to our website
```

Dynamic Import
--------------

Dynamic import is a new feature in JavaScript that allows us to load modules on-demand or asynchronously. This can be useful when we have a large application with many modules, and we don’t want to load all of them at once. Instead, we can load only the modules that are needed at a particular time. To use dynamic import, we can use the `import()` function. For example,

```js
// main.js  
import('./greet.js')  
  .then(module => {  
    module.sayHello('Lily'); // Output: Hello, Lily!  
    console.log(module.message); // Output: Welcome to our website  
  })  
  .catch(err => {  
    console.log('Failed to load module:', err);  
  });
```

Default Export
--------------

We can also have a default export in a module. We use the `export default` syntax to do so. For example,

```js
// greet.js  
export default function(name) {  
  console.log(`Hello, ${name}!`);  
}
```

In this case, we don’t need to use curly braces while importing the default export. For example,

```js
// main.js  
import sayHello from './greet.js';  
sayHello('Lily'); // Output: Hello, Lily!
```

Using `CommonJS`
================

The `**CommonJS**` module system is an older, but still widely used module system in Node.js. It allows us to define modules using the `**module.exports**` and `**require**` keywords. With `**module.exports**`, we can export variables, functions, and classes from our module. With `**require**`, we can import variables, functions, and classes from other modules.

Here’s an example of how to define and use modules using the `**CommonJS**` module system:

```js
// Math.js  
const add = (a, b) => a + b;  
const subtract = (a, b) => a - b;  
module.exports = { add, subtract };
```

```js
// App.js  
const { add, subtract } = require('./Math.js');  
console.log(add(2, 3)); // Output: 5  
console.log(subtract(5, 2)); // Output: 3
```

Advantages of using modules
===========================

Using modules in JavaScript has several advantages, including:

Encapsulation
-------------

Modules provide a way of encapsulating code, which means that variables, functions, and classes defined in a module are not accessible from outside the module unless they are explicitly exported. This helps to prevent naming collisions and makes it easier to build and maintain large-scale applications.

Reusability
-----------

Modules can be easily imported and exported between different parts of an application, making it easy to reuse code across multiple files and projects. This can save a lot of time and effort when building complex applications.

Dependency management
---------------------

Modules can be used to manage dependencies between different parts of an application. By importing only the specific functions or classes that are needed from a module, we can reduce the amount of code that needs to be loaded, which can improve application performance.

In conclusion, JavaScript modules provide a way of organizing code into reusable, self-contained components that can be easily imported and exported between different parts of an application. They provide a mechanism for encapsulating code and avoiding naming collisions, making it easier to build and maintain large-scale applications. By using modules, we can improve the reusability, encapsulation, and dependency management of our code, which can lead to more efficient and maintainable applications.