---
slug: function-binding-in-js
title: "Function Binding in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Function Binding in JS
======================

JavaScript is a versatile language that allows developers to create complex applications with ease. One of the language’s most powerful features is its ability to manipulate the behavior of functions through binding.
<!-- truncate -->

Understanding Binding
=====================

In JavaScript, binding refers to the process of assigning a specific context or value to the ‘this’ keyword inside a function. By default, the ‘this’ keyword refers to the global object, but when a function is bound to a specific context or value, ‘this’ will refer to that context instead.

For example, consider the following code snippet:

```js
const person = {  
  name: 'John',  
  greet: function() {  
    console.log(`Hello, my name is ${this.name}`);  
  }  
}  
person.greet(); // Output: Hello, my name is John
```

In this example, the ‘this’ keyword inside the ‘greet’ method refers to the ‘person’ object. We can also bind the ‘greet’ method to a different context by using the ‘bind’ method, like so:

```js
const anotherPerson = {  
  name: 'Sarah'  
}  
const greetAnotherPerson = person.greet.bind(anotherPerson);  
greetAnotherPerson(); // Output: Hello, my name is Sarah
```

Here, we have bound the ‘greet’ method to the ‘anotherPerson’ object using the ‘bind’ method. This means that when we call ‘greetAnotherPerson’, the ‘this’ keyword inside the ‘greet’ method will refer to the ‘anotherPerson’ object instead of the ‘person’ object.

The Benefits of Binding
=======================

Binding is a powerful tool in JavaScript because it allows developers to control the behavior of functions in a more flexible way. By binding a function to a specific context, we can ensure that it behaves consistently regardless of where it is called from. This is especially useful when working with objects that have methods, as it allows us to easily reuse those methods in different contexts.

Another benefit of binding is that it allows us to create new functions that inherit the behavior of existing functions. This is known as function currying and is a common technique used in functional programming. By binding some of the arguments of a function to specific values, we can create a new function that takes fewer arguments and behaves differently than the original function.

`call` method
=============

The `**call()**` method is a built-in JavaScript function that allows you to call a function with a specified `**this**` value and arguments provided individually, instead of as an array (as with the `**apply()**` method).

The main purpose of the `**call()**` method is to execute a function with a specified `**this**` value, so you can control the value of `**this**` inside a function when it is called. By default, the `**this**` keyword inside a function refers to the global `**window**` object in a web browser, or to the global `**global**` object in Node.js.

However, by using the `**call()**` method, you can specify a different `**this**` value, such as an object that contains the properties and methods you want to use inside the function. This allows you to reuse a function with different objects and ensure that the function is executed in the correct context.

In addition to specifying a `**this**` value, the `**call()**` method also allows you to pass in arguments to the function individually, instead of as an array (as with the `**apply()**` method). This can be useful if you have a function that expects multiple arguments and you want to specify them individually, rather than as an array.

```js
const person = {  
  firstName: 'John',  
  lastName: 'Doe',  
  getFullName: function() {  
    return this.firstName + ' ' + this.lastName;  
  }  
}  
const person2 = {  
  firstName: 'Jane',  
  lastName: 'Doe'  
}  
const fullName = person.getFullName.call(person2);  
console.log(fullName); // 'Jane Doe'
```

```js
function greet(greeting, punctuation) {  
  console.log(`${greeting}, ${this.name}${punctuation}`);  
}  
const person = { name: 'John' };  
const args = ['Hello', '!'];  
// Call greet with person as the this value and args as the arguments  
greet.apply(person, args);
```

`apply` method
==============

The `**apply()**` method in JavaScript is used to call a function with a specified `**this**` value and arguments provided as an array. The main purpose of this method is to execute a function in a specific context or scope, which can be useful in scenarios where you want to reuse a function with different objects and ensure that the function is executed in the correct context.

One of the primary use cases of the `**apply()**` method is to set the value of the `**this**` keyword inside a function to a specific object. By passing in an object as the first argument to the `**apply()**` method, you can set the `**this**` keyword to that object when the function is called. This is especially useful in cases where the function is designed to work with a specific object's properties and methods.

Another advantage of the `**apply()**` method is that it allows you to pass in arguments to a function as an array. This can be useful if you have a function that expects multiple arguments, and you want to pass them in as an array rather than individually. The `**apply()**` method can also be used to call a function with a variable number of arguments since you can pass in the arguments as an array, and the function can then use the `**length**` property of the array to determine how many arguments were passed in.

```js
function greet(greeting, punctuation) {  
  console.log(`${greeting}, ${this.name}${punctuation}`);  
}  
const person = { name: 'John' };  
const args = ['Hello', '!'];  
// Call greet with person as the this value and args as the arguments  
greet.apply(person, args);
```

The `call` method is also use to call constructor of parent

```js
function Animal(name) {  
  this.name = name;  
}  
function Cat(name, color) {  
  Animal.call(this, name);  
  this.color = color;  
}  
const myCat = new Cat('Fluffy', 'orange');  
console.log(myCat.name); // Fluffy  
console.log(myCat.color); // orange
```

`bind` method
=============

In JavaScript, the `**bind()**` method is used to create a new function that has a specific `**this**` value and, optionally, arguments that are pre-set. When the new function is called, the `**this**` keyword inside the function body will be bound to the value passed as the first argument to the `**bind()**` method.

The `**bind()**` method is commonly used in scenarios where a function needs to be passed as a callback or event handler, but the `**this**` value needs to be a specific object, and not the default `**this**` value that is determined by the context of the function call. By using `**bind()**`, you can ensure that the `**this**` value inside the function is always what you expect it to be.

```js
const person = {  
  name: 'John',  
  greet: function() {  
    console.log(`Hello, my name is ${this.name}.`);  
  }  
};  
const person1 = {  
 name: 'Jane',  
}  
const boundGreet = person.greet.bind(person1);  
// Call the boundGreet function  
boundGreet();
```

Difference
==========

Here is difference between these three methods:

1.  `**call**`: The `**call**` method invokes a function with a specified `**this**` value and arguments provided as a comma-separated list. The first argument of `**call**` is the `**this**` value, followed by any arguments the function requires.
2.  `**apply**`: The `**apply**` method is similar to `**call**`, but the arguments are provided as an array. The first argument of `**apply**` is the `**this**` value, followed by an array of arguments.
3.  `**bind**`: The `**bind**` method creates a new function with the same body as the original function, but with a specified `**this**` value. It returns a new function that can be called later with the provided `**this**` value and arguments.

```js
function greet(name) {  
  console.log(`Hello, ${name}! My name is ${this.name}.`);  
}  
const person1 = { name: 'John' };  
const person2 = { name: 'Alice' };  
greet.call(person1, 'Alice'); // Hello, Alice! My name is John.  
greet.apply(person2, ['Bob']); // Hello, Bob! My name is Alice.  
const boundGreet = greet.bind(person1);  
boundGreet('Alice'); // Hello, Alice! My name is John.
```

Binding is a powerful technique in JavaScript that allows us to control the behavior of functions in a flexible way. By binding functions to specific contexts, we can ensure that they behave consistently regardless of where they are called from. We can also use binding to create new functions that inherit the behavior of existing functions. By mastering the basics of binding, developers can unlock the full potential of JavaScript and create applications that are both powerful and flexible.