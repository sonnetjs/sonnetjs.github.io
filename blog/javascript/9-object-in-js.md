---
slug: object-in-js
title: "Object in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Object in JS
============

In JavaScript, an object is a collection of key-value pairs, where the keys are strings (or symbols) and the values can be of any type. It is an unordered data structure that can hold primitive data types, arrays, and even functions. Objects are used to represent real-world entities, and they provide a way to organize and store related data.
<!-- truncate -->

Creating Objects in JavaScript
==============================

There are several ways to create objects in JavaScript:

Object Literals
===============

The most common way to create an object is by using an object literal. An object literal is a comma-separated list of key-value pairs enclosed in curly braces. For example:

```js
let person = {  
  name: "John",  
  age: 30,  
  address: {  
    street: "123 Main St",  
    city: "New York",  
    state: "NY"  
  }  
};
```

Using the Object Constructor
============================

Another way to create objects is by using the Object constructor. This method is less commonly used but can be useful in certain situations. For example:

```js
let person = new Object();  
person.name = "John";  
person.age = 30;  
person.address = {  
  street: "123 Main St",  
  city: "New York",  
  state: "NY"  
};
```

Using Object.create()
=====================

A third way to create objects is by using the Object.create() method. This method creates a new object and sets its prototype to an existing object. For example:

```js
let person = Object.create(null);  
person.name = "John";  
person.age = 30;  
person.address = {  
  street: "123 Main St",  
  city: "New York",  
  state: "NY"  
};
```

Accessing Object Properties
===========================

You can access object properties using dot notation or bracket notation. For example:

```js
let person = {  
  name: "John",  
  age: 30  
};  
console.log(person.name); // "John"  
console.log(person["age"]); // 30
```

Modifying Object Properties
===========================

You can modify object properties by simply assigning a new value to them. For example:

```js
let person = {  
  name: "John",  
  age: 30  
};  
person.age = 40;  
console.log(person.age); // 40
```

Adding Object Properties
========================

You can add new properties to an object by simply assigning a value to a new key. For example:

```js
let person = {  
  name: "John",  
  age: 30  
};  
person.address = {  
  street: "123 Main St",  
  city: "New York",  
  state: "NY"  
};  
console.log(person.address); // { street: "123 Main St", city: "New York", state: "NY" }
```

Characteristics of Keys and Values in JS Objects
================================================

The characteristics of keys and values in JavaScript objects are as follows:

1.  Keys must be unique within an object. If you try to add a new property with an existing key, the value of the existing property will be overwritten with the new value.
2.  Keys are always converted to strings. If you use a non-string value as a key, it will be automatically converted to a string using the `**toString()**` method.
3.  Values can be of any type, including strings, numbers, booleans, objects, arrays, and functions.
4.  Values can be accessed using dot notation (`**object.property**`) or bracket notation (`**object["property"]**`). Dot notation can only be used if the property name is a valid identifier (i.e., it does not contain spaces or special characters).
5.  Values can be added or modified at any time by assigning a new value to a property: `**object.property = value**` or `**object["property"] = value**`.
6.  Values can also be removed using the `**delete**` operator: `**delete object.property**` or `**delete object["property"]**`.
7.  In JavaScript, it is generally not recommended to use spaces in the name of a key in an object. While it is possible to use spaces in key names using bracket notation, it can make it harder to work with the object, as you would always have to use bracket notation to access the property.

For example, let’s say you have an object with a key called “first name” and you try to access it using dot notation:

```
const person = {  
  "first name": "John",  
  age: 30  
};  
console.log(person.first name); // Outputs: undefined
```

This code would result in an error because dot notation does not allow for spaces in the property name. Instead, you would have to use bracket notation to access the “first name” property:

```
console.log(person["first name"]); // Outputs: "John"
```

This can make the code more difficult to read and can introduce errors if you forget to use bracket notation when accessing the property.

It is generally recommended to use camelCase or snake_case for key names in JavaScript objects, as they are easier to read and less error-prone.

for…in loop
===========

The for…in loop is a useful tool for iterating over an object’s properties. This loop allows you to loop through all of the object’s properties and perform some action on each one. For example:

```js
let person = {  
  name: "John",  
  age: 30,  
  address: {  
    street: "123 Main St",  
    city: "New York",  
    state: "NY"  
  }  
};  
for (let prop in person) {  
  console.log(prop + ": " + person[prop]);  
}  
// Output:  
// name: John  
// age: 30  
// address: [object Object]
```

Object Reference
================

When you create two empty objects in JavaScript, they are not equal to each other, even though they are both objects.

For example:

```js
const person1 = {};  
const person2 = {};  
console.log(person1 == person2); // false
```

This is because `**person1**` and `**person2**` are both references to different objects in memory, even though the objects themselves have no properties or values.

So, objects are reference types, which means that when you assign an object to a variable or pass it as an argument to a function, you are actually passing a reference to the object in memory, rather than creating a new copy of the object.

Here’s an example of how object references work in JavaScript:

```js
const person1 = { name: "John", age: 30 };  
const person2 = person1;  

```

To make a copy of an object in JavaScript, you can use the spread operator or the `**Object.assign()**` method:

```js
// Using the spread operator  
const person1 = { name: "John", age: 30 };  
const person2 = { ...person1 };  
person2.age = 31;  
console.log(person1.age); // 30
```

`Object.assign()` works in this way:

```js
const user = {};  
// Using Object.assign() to add a "name" property to the "user" object  
Object.assign(user, { name: "john" });  
console.log(user); // { name: "john" }
```

`Object.assign` can also be used to copy an object:

```js
// Using Object.assign()  
const person3 = { name: "John", age: 30 };  
const person4 = Object.assign({}, person3);  
person4.age = 31;  
console.log(person3.age); // 30
```

Garbage Collection
==================

Garbage collection is the process by which JavaScript automatically frees up memory that is no longer being used by an object. When an object is created, it is allocated a block of memory on the heap. When the object is no longer needed, the memory is freed up so that it can be used by other objects.

JavaScript uses a form of garbage collection called reference counting. This means that each object keeps track of how many other objects are referencing it. When the reference count drops to zero, the object is no longer needed and its memory can be freed up.

While garbage collection is a useful feature of JavaScript, it can also have some downsides. For example, managing memory can be slower than in other languages, as the garbage collector has to constantly monitor the reference counts of objects. Additionally, the garbage collector can sometimes be too aggressive, causing performance issues in some cases.

Despite these limitations, garbage collection is still an important feature of JavaScript that helps developers to write more efficient and reliable code.

```js
// user is reference to object  
let user = {  
	name: "John"  
}  
// now reference is overridden  
user = null;  
// there is no variable pointing to {name: "John"}, it will be in garbage collection
```

Optional Chaining
=================

Optional chaining is a feature in JavaScript that allows you to safely access deeply nested properties of an object without worrying about the intermediate properties being `**null**` or `**undefined**`.

```js
const user = {  
  name: "John",  
  address: {  
    street: "123 Main St",  
    city: "Anytown",  
    state: "CA",  
    zip: "12345"  
  }  
};  
// Using optional chaining to access nested properties  
const zipCode = user?.address?.zip; // "12345"  
// Trying to access a non-existent property with optional chaining  
const phone = user?.contact?.phone; // undefined
```

Symbol Type
===========

In JavaScript, `**Symbol**` is a primitive data type that is used to create unique identifiers for objects. Symbols are created using the `**Symbol()**` constructor function, which returns a new, unique symbol each time it is called.

Here is an example of creating and using symbols with an object:

```js
const name = Symbol('name');  
const age = Symbol('age');  
const person = {  
  [name]: 'John',  
  [age]: 30,  
  gender: 'male'  
};  
console.log(person[name]); // "John"  
console.log(person[age]); // 30  
console.log(person.gender); // "male"
```

We can access the values of the symbol properties using the square bracket notation with the symbol as the key. Note that we cannot access the symbol properties using dot notation, as symbols are not valid property names in that syntax.

Symbols are often used to create private or hidden properties in objects, as they cannot be accessed or modified from outside the object. They are also useful for creating non-colliding property names in cases where multiple objects might share the same key name.

Symbol.iterator
===============

`**Symbol.iterator**` is a built-in symbol in JavaScript that is used to define the default iterator for an object. An iterator is an object that provides a way to iterate over the elements of a collection one at a time.

To use `**Symbol.iterator**`, you define a method on an object that returns an iterator object. This method is called when the object is used in a `**for...of**` loop or when the `**next()**` method is called on the iterator object.

Here is an example of using `**Symbol.iterator**` to define an iterator for an array:

```js
const arr = [1, 2, 3];  
arr[Symbol.iterator] = function() {  
  let i = 0;  
  return {  
    next: () => {  
      if (i < this.length) {  
        return { value: this[i++], done: false };  
      } else {  
        return { done: true };  
      }  
    }  
  };  
};  
for (const num of arr) {  
  console.log(num);  
}
```

Note that the `**Symbol.iterator**` method can be defined on any object, not just arrays. This allows you to define custom iteration behavior for any object that you create.

```js
const obj = { from: 1, to: 3 };  
obj[Symbol.iterator] = function() {  
  let current = this.from;  
  const last = this.to;  
   return {  
    next: () => {  
      if (current <= last) {  
        return { value: current++, done: false };  
      } else {  
        return { done: true };  
      }  
    }  
  };  
};  
const arr = [...obj]; // [1, 2, 3]
```

Conclusion
==========

In JavaScript, objects are a powerful data structure that can be used to represent complex entities. They provide a way to organize and store related data, and can be easily accessed, modified, and extended. Understanding how to create and work with objects is an essential skill for any JavaScript developer.