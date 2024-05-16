---
slug: object-methods-in-js
title: "Object Methods in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Object Methods in JS
====================

JavaScript functions are a powerful tool that can help you build complex and dynamic web applications. Whether you’re building a simple website or a large-scale web application, functions are essential for adding interactivity and functionality to your code.
<!-- truncate -->

In JavaScript, it’s possible to define functions as properties of an object. These functions are commonly referred to as methods.

```js
// Define a greetings object with a function to greet the user  
const greetings = {  
  greetUser: function(name) {  
    console.log(`Hello, ${name}! Welcome to our website.`);  
  }  
};  
// Use the greetings object to greet the user  
greetings.greetUser("John"); // "Hello, John! Welcome to our website."
```

You can achieve the similar functionality in this way:

```js
// Define a greetings object with a function to greet the user  
const greetings = {};  
greetings.greetUser = function(){  
 console.log(`Hello, ${name}! Welcome to our website.`);  
}  
// Use the greetings object to greet the user  
greetings.greetUser("John"); // "Hello, John! Welcome to our website."
```

Arrow functions can also be used inside an object:

```js
// Define a greetings object with a function to greet the user  
const greetings = {  
  greetUser: (name) => {  
    console.log(`Hello, ${name}! Welcome to our website.`);  
  }  
};  
// Use the greetings object to greet the user  
greetings.greetUser("John"); // "Hello, John! Welcome to our website."
```

The `this` Keyword
==================

The `this` keyword refers to the current object in JavaScript. It is often used inside object methods to refer to the object that the method belongs to.

For example, let’s say we have an object with a `name` property and a method called `greet`:

```js
const person = {  
  firstName: "John",  
  lastName: "Doe",  
  fullName: function() {  
    return `${this.firstName} ${this.lastName}`;  
  }  
};  
console.log(person.fullName()); // "John Doe"
```

When using arrow functions as methods inside objects, it’s important to be conscious of the value of the `**this**` keyword. Unlike regular functions, arrow functions do not have their own `**this**` context, but instead inherit the `**this**` value from their enclosing lexical scope. This can lead to unexpected behavior if you're not careful.

```js
const person = {  
  firstName: "John",  
  lastName: "Doe",  
  fullName: () => {  
    return `${this.firstName} ${this.lastName}`;  
  }  
};  
console.log(person.fullName()); // "undefined undefined"
```

Here’s an example of how you can use an arrow function inside an object method:

```js
const calculator = {  
  operand1: 0,  
  operand2: 0,  
  add: function() {  
    const sum = () => {  
			/*  
			* As arrow functions inherit this value from their enclosing lexical scope,  
			* now it is inheriting from add function context  
			*/  
      return this.operand1 + this.operand2;  
    }  
    console.log(`Sum: ${sum()}`);  
  }  
};  
calculator.operand1 = 10;  
calculator.operand2 = 20;  
calculator.add(); // "Sum: 30"
```

The `new` Keyword
=================

In JavaScript, the `**new**` keyword is used to create new instances of a constructor function. A constructor function is a special type of function that is used to create and initialize objects with the same properties and methods.

When the `**new**` keyword is used with a constructor function, a new object is created with its own set of properties and methods. The `**this**` keyword inside the constructor function refers to the new object being created, and can be used to set the initial values of its properties.

Here’s an example of using the `**new**` keyword to create a new instance of a constructor function:

```js
function Person(firstName, lastName) {  
  this.firstName = firstName;  
  this.lastName = lastName;  
}  
const person1 = new Person('John', 'Doe');  
const person2 = new Person('Jane', 'Doe');  
console.log(person1); // Person { firstName: 'John', lastName: 'Doe' }  
console.log(person2); // Person { firstName: 'Jane', lastName: 'Doe' }
```

The `**new**` keyword is used to create two instances of `**Person**`: `**person1**` and `**person2**`. Each instance has its own set of properties `**firstName**` and `**lastName**` with different values.

Note that the `**new**` keyword is not necessary when creating objects using object literals `**{}**` or when using classes in modern JavaScript. However, it is still commonly used when working with constructor functions or legacy code.

You can also define methods in an object instance with this way:

```js
function Person(name, age) {  
  this.name = name;  
  this.age = age;  
}  
Person.prototype.greet = function() {  
  console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');  
};  
const person1 = new Person('John', 30);  
person1.greet(); // "Hello, my name is John and I am 30 years old."
```

Inheritance can achieve in this way:

```js
function Animal(name) {  
  this.name = name;  
}  
Animal.prototype.speak = function() {  
  console.log(`${this.name} makes a noise.`);  
}  
function Dog(name) {  
  Animal.call(this, name);  
}  
Dog.prototype = Object.create(Animal.prototype);  
Dog.prototype.constructor = Dog;  
Dog.prototype.speak = function() {  
  console.log(`${this.name} barks.`);  
}  
let dog = new Dog('Rex');  
dog.speak(); // "Rex barks."
```

Getter and Setter
=================

Encapsulation is a technique used to control access to object properties and methods. One way to achieve encapsulation in JavaScript is to use a naming **convention** where properties that are intended to be protected are prefixed with an underscore (`**_**`).

By convention, properties and methods that start with an underscore are meant to be accessed only within the object, and not from outside the object. This means that developers can create private properties and methods that are hidden from the outside world, while still allowing public properties and methods to be accessed and used as intended.

```js
const person = {  
  _name: 'John',  
};  
// Accessing the private _name property directly from outside the object  
console.log(person._name); // 'Jane'  
// Attempting to modify the private _name property directly from outside the object  
person._name = 'Bob';  
console.log(person._name); // 'Bob'
```

Getter and setter methods are a way to control access to object properties. They allow you to define custom behavior when getting or setting a property’s value. To define a getter or setter method, use the `get` or `set` keyword followed by the name of the property you want to define the behavior for. For example:

```js
const person = {  
  _firstName: "John",  
  _lastName: "Doe",  
  get fullName() {  
    return `${this._firstName} ${this._lastName}`;  
  },  
  set fullName(name) {  
    const parts = name.split(" ");  
    this._firstName = parts[0];  
    this._lastName = parts[1];  
  }  
};  
console.log(person.fullName); // "John Doe"  
person.fullName = "Jane Smith";  
console.log(person.fullName); // "Jane Smith"
```

**Note:** In more recent versions of JavaScript # is introduced for strictly enforcing private fields but it has limited support.

In summary, defining functions inside objects can be useful for encapsulating related functionality and keeping your code organized. Additionally, it allows you to access other properties and methods of the same object, which can be helpful for building more complex functionality.