---
slug: datatypes-in-js-type-conversion
title: "Datatypes in JS: Type Conversion"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Datatypes in JS
===============

JavaScript is a dynamically typed language, which means that the data type of a variable is determined at runtime.
<!-- truncate -->

The `typeof` keyword is used to determine the data type of a value or variable in JavaScript. For example, `typeof 42` will return `"number"`. There are seven primitive data types in JavaScript:

1.  **Number**: represents numeric values, including integers and floating-point numbers.

```js
let age = 30;  
// toFixed()  
let num = 3.14159;  
let formattedNum = num.toFixed(2);  
console.log(formattedNum); // "3.14"  
// toPrecision()  
let num = 123.456;  
let formattedNum = num.toPrecision(4);  
console.log(formattedNum); // "123.5"
```

**2\. String**: represents a sequence of characters, enclosed in single or double quotes.

```js
let name = "John Doe";  
// length  
let str = "Hello, world!";  
console.log(str.length); // 13  
// toUpperCase(), toLowerCase()  
let str = "Hello, world!";  
console.log(str.toUpperCase()); // "HELLO, WORLD!"  
console.log(str.toLowerCase()); // "hello, world!"  
// trim()  
let str = "  Hello, world!   ";  
console.log(str.trim()); // Output: "Hello, world!"
```

**3\. Boolean**: represents a logical value, either true or false.

```js
let isStudent = true;  
// ! (logical not)  
console.log(!true); // false  
console.log(!false); // true  
console.log(!0); // true  
console.log(!"hello"); // false  
console.log(!null); // true
```

**4\. Undefined**: represents a variable that has not been assigned a value yet.

```js
let x;  
console.log(x); // undefined
```

**5\. Null**: represents a variable that has been explicitly assigned the value of null.

```js
let x = null;  
console.log(x); // null
```

**6\. Symbol**: represents a unique identifier.

```js
let firstName = Symbol("first name");  
let person = {  
  [firstName]: "John",  
  lastName: "Doe",  
  age: 30  
};  
console.log(person[firstName]); // John
```

**7\. BigInt**: A numeric data type that represents integers larger than the maximum safe integer in JavaScript

```js
let bigNumber = BigInt(Number.MAX_SAFE_INTEGER) + 1n;  
console.log(bigNumber); // 9007199254740992n
```

8\. In addition to these primitive data types, JavaScript has one non-primitive data type, which is the **Object**.

```js
let person = {  
  firstName: "John",  
  lastName: "Doe",  
  age: 30,  
  address: {  
    street: "123 Main St",  
    city: "Anytown",  
    state: "CA",  
    zip: "12345"  
  }  
};  
console.log(person.firstName); // John  
console.log(person.address.city); // Anytown  
person.phone = "555-1234";  
console.log(person); // { firstName: "John", lastName: "Doe", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" }, phone: "555-1234" }
```

In JavaScript, arrays are a type of object. Arrays are a specialized kind of object that have a numeric index and a `**length**` property, and provide additional methods for working with ordered collections of data. Arrays can store any type of data as its elements, including objects themselves.

Arrays in JavaScript are created using the array literal syntax, which is enclosed in square brackets `**[]**`. Here's an example of an array:

```js
let fruits = ["apple", "banana", "orange"];  
console.log(fruits[0]); // apple  
console.log(fruits.length); // 3  
fruits.push("grape");  
console.log(fruits); // ["apple", "banana", "orange", "grape"]
```

Since JavaScript is a dynamically typed language, variables can hold values of any data type, and their data type can change during runtime.

However, it’s worth noting that assigning a string to a variable that was previously holding a number is an example of implicit type conversion, as the variable’s data type has been changed without an explicit conversion using a function or operator. This can sometimes lead to unexpected behavior and bugs, so it’s important to use type conversions carefully and deliberately.

```js
let x = 12;  
x = "hello";  
console.log(x) // hello
```

It is important to understand the different data types in JavaScript and how type conversion works, as it can affect the behavior of your code.