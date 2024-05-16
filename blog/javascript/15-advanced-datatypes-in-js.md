---
slug: advanced-datatypes-in-js
title: "Advanced Datatypes in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Advanced Datatypes in JS
========================

JavaScript is an object-oriented programming language that has been around for quite some time now. It allows developers to create complex applications with ease. While working with JavaScript, developers often come across data types that are not commonly found in other programming languages. In this blog post, we will explore some of the advanced data types in JavaScript, including Map, Set, and Date.
<!-- truncate -->

Map
===

In JavaScript, the `**Map**` data type is an object that allows you to store key-value pairs, where the key and value can be of any data type. Unlike regular objects, `**Map**` maintains the order of key-value pairs and provides various methods to access and manipulate the data.

Here is an example of how to create a new `**Map**` object:

```js
const myMap = new Map();
```

You can add new key-value pairs to a `**Map**` using the `**set()**` method:

```js
myMap.set('key1', 'value1');  
myMap.set(2, 'value2');  
myMap.set(true, 'value3');
```

You can also chain the `**set()**` method to add multiple key-value pairs in a single line:

```js
myMap.set('key4', 'value4').set('key5', 'value5');
```

To access the value of a key in a `**Map**`, you can use the `**get()**` method:

```js
console.log(myMap.get('key1')); // displays 'value1'  
console.log(myMap.get(2)); // displays 'value2'  
console.log(myMap.get(true)); // displays 'value3'
```

You can check if a key exists in a `**Map**` using the `**has()**` method:

```js
console.log(myMap.has('key1')); // displays true  
console.log(myMap.has('key3')); // displays false
```

You can also remove a key-value pair from a `**Map**` using the `**delete()**` method:

```js
myMap.delete('key1');  
console.log(myMap.has('key1')); // displays false
```

`**Map**` objects have a `**size**` property that returns the number of key-value pairs in the map:

```js
console.log(myMap.size); // displays 5
```

One of the most powerful features of `**Map**` is the ability to use any data type as keys. For example, you can use objects, arrays, or even functions as keys:

```js
const myObj = {name: 'John', age: 30};  
const myFunc = () => console.log('Hello!');  
myMap.set(myObj, 'value6');  
myMap.set(myFunc, 'value7');  
console.log(myMap.get(myObj)); // displays 'value6'  
console.log(myMap.get(myFunc)); // displays 'value7'
```

Overall, the `**Map**` data type is a versatile and powerful tool for storing and manipulating key-value pairs in JavaScript.

Set
===

In JavaScript, the `**Set**` data type is an object that allows you to store unique values of any data type, whether primitive values or object references. Unlike arrays, `**Set**` maintains the order of elements and ensures that each element is unique.

Here is an example of how to create a new `**Set**` object:

```js
const mySet = new Set();
```

You can add elements to a `**Set**` using the `**add()**` method:

```js
mySet.add('value1');  
mySet.add(2);  
mySet.add(true);
```

You can also chain the `**add()**` method to add multiple elements in a single line:

```js
mySet.add('value4').add('value5');
```

To access elements in a `**Set**`, you can use the `**has()**` method:

```js
console.log(mySet.has('value1')); // displays true  
console.log(mySet.has(2)); // displays true  
console.log(mySet.has(false)); // displays false
```

You can remove elements from a `**Set**` using the `**delete()**` method:

```js
mySet.delete('value1');  
console.log(mySet.has('value1')); // displays false
```

`**Set**` objects have a `**size**` property that returns the number of elements in the set:

```js
console.log(mySet.size); // displays 4
```

One of the most powerful features of `**Set**` is the ability to use any data type as elements. For example, you can use objects, arrays, or even functions as elements:

```js
const myObj = {name: 'John', age: 30};  
const myFunc = () => console.log('Hello!');  
mySet.add(myObj);  
mySet.add(myFunc);  
console.log(mySet.has(myObj)); // displays true  
console.log(mySet.has(myFunc)); // displays true
```

You can also iterate through the elements of a `**Set**` using the `**forEach()**` method or a `**for...of**` loop:

```js
mySet.forEach((value) => console.log(value));  
// displays 'value4', 'value5', {name: 'John', age: 30}, and the function myFunc  
for (const value of mySet) {  
  console.log(value);  
}  
// same as above
```

Overall, the `**Set**` data type is a useful tool for storing and manipulating unique elements of any data type in JavaScript.

Date
====

In JavaScript, the `**Date**` data type is used to represent dates and times. The `**Date**` object is based on a time value that is the number of milliseconds since January 1, 1970, 00:00:00 UTC (Coordinated Universal Time).

Here is an example of how to create a new `**Date**` object:

```js
const currentDate = new Date();
```

This will create a `**Date**` object representing the current date and time.

You can also create a `**Date**` object by passing a specific date and time as a string to the `**Date**` constructor. The string must be in a format recognized by the `**Date.parse()**` method. For example:

```js
const specificDate = new Date('March 10, 2023 10:30:00');
```

This will create a `**Date**` object representing the date and time March 10, 2023 at 10:30:00 AM.

Once you have a `**Date**` object, you can use various methods to get or set specific parts of the date and time. Here are some examples:

```js
const currentDate = new Date();  
// get the year  
const year = currentDate.getFullYear(); // returns 2023  
// get the month (0-indexed)  
const month = currentDate.getMonth(); // returns 2 (March)  
// get the day of the month  
const day = currentDate.getDate(); // returns 10  
// get the day of the week (0-indexed, with Sunday being 0)  
const dayOfWeek = currentDate.getDay(); // returns 5 (Friday)  
// get the hour  
const hour = currentDate.getHours(); // returns 10  
// get the minutes  
const minutes = currentDate.getMinutes(); // returns 45  
// get the seconds  
const seconds = currentDate.getSeconds(); // returns 30  
// get the milliseconds  
const milliseconds = currentDate.getMilliseconds(); // returns 0
```

You can also set specific parts of the date and time using methods like `**setFullYear()**`, `**setMonth()**`, `**setDate()**`, `**setHours()**`, `**setMinutes()**`, `**setSeconds()**`, and `**setMilliseconds()**`.

```js
currentDate.setFullYear(2024); // set the year to 2024
```

You can also use the `**getTime()**` method to get the number of milliseconds since January 1, 1970, 00:00:00 UTC, and the `**setTime()**` method to set the date and time based on a specified number of milliseconds.

```js
const timestamp = currentDate.getTime(); // get the number of milliseconds since 1970  
const newDate = new Date();  
newDate.setTime(timestamp); // set the date and time based on the timestamp
```

In addition, the `**Date**` object provides various methods for formatting and parsing dates and times. For example, the `**toLocaleString()**` method returns a string representation of the date and time in a specific locale format.

```js
const currentDate = new Date();  
const formattedDate = currentDate.toLocaleString('en-US'); // returns "3/10/2023, 10:45:30 AM"
```

Overall, the `**Date**` data type in JavaScript provides a powerful and flexible way to work with dates and times in your code.