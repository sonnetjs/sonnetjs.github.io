---
slug: protype-in-js
title: "Protype in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Protype in JS
=============

JavaScript is an object-oriented programming (OOP) language that uses prototypes instead of classes for creating objects. Prototypes are a fundamental concept in JavaScript and understanding them is essential in creating efficient and effective code.
<!-- truncate -->

What is a Prototype?
====================

A prototype is an object that is associated with every constructor function in JavaScript that acts as a blueprint for creating new objects. When a new object is created using a constructor function, the prototype of the constructor function is set as the prototype of the new object. In other words, the prototype is like a template for the object, defining its properties and methods.

Prototype Chain
===============

The prototype chain is a series of links between objects. When a property is accessed on an object, JavaScript first looks for the property on the object itself. If the property is not found, JavaScript looks at the object’s prototype. If the property is not found on the prototype, JavaScript looks at the prototype’s prototype, and so on, until the property is found or until the end of the prototype chain is reached (which is the Object.prototype).

This concept of the prototype chain is essential to JavaScript programming, and understanding how it works is crucial. It allows developers to create complex and powerful code by building objects that are linked together in a chain of prototypes.

Creating Prototypes
===================

Prototypes can be created in several ways in JavaScript. One way to create a prototype is to use the constructor function syntax:

```js
function Car(make, model, year) {  
    this.make = make;  
    this.model = model;  
    this.year = year;  
}  
Car.prototype.getInfo = function() {  
    return this.make + ' ' + this.model + ' (' + this.year + ')';  
};
```

You can initiate different instances of Car.

```js
const car1 = new Car('Abc', 'Xyz', '2000');  
const car2 = new Car('Def', 'Uvw', '2020');  
car1.getInfo(); // Abc Xyz 2000
```

Using Prototypes
================

Another way is to use the object literal syntax. For example, let’s say we want to create a prototype object for a car:

```js
let carPrototype = {  
    make: 'Honda',  
    model: 'Civic',  
    year: 2021,  
    getInfo: function() {  
        return this.make + ' ' + this.model + ' (' + this.year + ')';  
    }  
};
```

Once a prototype is created, it can be used to create new objects. To create a new object using a prototype, you can use the `Object.create()` method:

```js
let myCar = Object.create(carPrototype);
```

In this example, `myCar` is a new object that has `carPrototype` as its prototype. We can then access the properties and methods of `carPrototype` through `myCar`:

```js
console.log(myCar.make); // 'Honda'  
console.log(myCar.model); // 'Civic'  
console.log(myCar.year); // 2021  
console.log(myCar.getInfo()); // 'Honda Civic (2021)'
```

Modifying Prototypes
====================

Prototypes can be modified at runtime, which means that changes made to a prototype will affect all objects that are created using that prototype. For example, you can add a new property to a prototype like this:

```js
carPrototype.color = 'red';
```

All objects that are created using `carPrototype` will now have a `color` property with a value of `'red'`.

Related Methods
===============

1.  `Object.getPrototypeOf`

```js
const person = {  
  firstName: 'John',  
  lastName: 'Doe',  
  getFullName() {  
    return `${this.firstName} ${this.lastName}`;  
  }  
};  
const john = Object.create(person);  
console.log(Object.getPrototypeOf(john) === person); // true
```

1.  `Object.setPrototypeOf`

```js
const person = {  
  firstName: 'John',  
  lastName: 'Doe',  
  getFullName() {  
    return `${this.firstName} ${this.lastName}`;  
  }  
};  
const john = {};  
Object.setPrototypeOf(john, person);  
console.log(john.getFullName()); // John Doe
```

1.  `Object.prototype.isPrototypeOf()`

```js
const person = {  
  firstName: 'John',  
  lastName: 'Doe',  
  getFullName() {  
    return `${this.firstName} ${this.lastName}`;  
  }  
};  
const john = Object.create(person);  
console.log(person.isPrototypeOf(john)); // true
```

1.  `Object.prototype.hasOwnProperty()`

```js
const person = {  
  firstName: 'John',  
  lastName: 'Doe',  
  getFullName() {  
    return `${this.firstName} ${this.lastName}`;  
  }  
};  
const john = Object.create(person);  
john.age = 25;  
console.log(john.hasOwnProperty('age')); // true  
console.log(john.hasOwnProperty('getFullName')); // false
```

1.  `Object.prototype.toString()`

```js
const person = {  
  firstName: 'John',  
  lastName: 'Doe',  
  getFullName() {  
    return `${this.firstName} ${this.lastName}`;  
  }  
};  
console.log(person.toString()); // [object Object]
```

1.  `Object.getOwnPropertyNames()`

```js
const person = {  
  firstName: 'John',  
  lastName: 'Doe',  
  getFullName() {  
    return `${this.firstName} ${this.lastName}`;  
  }  
};  
const john = Object.create(person);  
john.age = 25;  
console.log(Object.getOwnPropertyNames(john)); // ["age"]
```

1.  `Object.defineProperties()`

```js
const person = {};  
Object.defineProperties(person, {  
  firstName: {  
    value: 'John',  
    writable: true,  
    enumerable: true,  
    configurable: true  
  },  
  lastName: {  
    value: 'Doe',  
    writable: true,  
    enumerable: true,  
    configurable: true  
  },  
  fullName: {  
    get() {  
      return `${this.firstName} ${this.lastName}`;  
    },  
    enumerable: true,  
    configurable: true  
  }  
});  
console.log(person.fullName); // "John Doe"
```

```js
const person = {  
  firstName: 'John',  
  lastName: 'Doe'  
};  
console.log(person.propertyIsEnumerable('firstName')); // true  
console.log(person.propertyIsEnumerable('toString')); // false
```

1.  `Object.prototype.propertyIsEnumerable()`
2.  `Object.getOwnPropertyDescriptors()`

```js
const person = {  
  firstName: 'John',  
  lastName: 'Doe'  
};  
Object.defineProperty(person, 'age', {  
  value: 25,  
  writable: true,  
  enumerable: true,  
  configurable: true  
});  
const descriptors = Object.getOwnPropertyDescriptors(person);  
console.log(descriptors.firstName); // { value: 'John', writable: true, enumerable: true, configurable: true }  
console.log(descriptors.age); // { value: 25, writable: true, enumerable: true, configurable: true }
```

Prototypes are a fundamental concept in JavaScript and are essential in creating efficient and effective code. By understanding the prototype chain and how to create and use prototypes, you can take your JavaScript programming skills to the next level. With prototypes, you can create powerful objects that are linked together in a chain, providing a flexible and scalable way to build complex applications.