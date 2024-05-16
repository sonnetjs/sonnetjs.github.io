---
slug: control-flow-statements-in-js
title: "Control Flow Statements in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Control Flow Statements in JS
=============================

JavaScript is a programming language that allows developers to build complex web applications. Control flow statements are one of the most important features in JavaScript.
<!-- truncate -->

Control flow statements are used to control the flow of execution in a program. They are used to make decisions, execute loops, and handle errors. There are three types of control flow statements in JavaScript: conditional statements, loops, and try/catch statements.

Conditional Statements
======================

Conditional statements are used to execute different actions based on different conditions.

1.  `if` statement:

```js
let x = 5;  
if (x < 10) {  
  console.log("x is less than 10");  
}
```

2. `**if...else**` statement:

```js
let temperature = 25;  
if (temperature < 20) {  
  console.log("It's cold outside");  
} else {  
  console.log("It's warm outside");  
}
```

3\. `**if...else if...else**` statement:

```js
let grade = 85;  
if (grade >= 90) {  
  console.log("A");  
} else if (grade >= 80) {  
  console.log("B");  
} else if (grade >= 70) {  
  console.log("C");  
} else {  
  console.log("F");  
}
```

4\. Nested `**if**` statements:

```js
let age = 20;  
let hasLicense = true;  
if (age >= 18) {  
  if (hasLicense) {  
    console.log("You can drive");  
  } else {  
    console.log("You can't drive without a license");  
  }  
} else {  
  console.log("You're too young to drive");  
}
```

In JavaScript, any value that is not explicitly `**false**`, `**0**`, `**null**`, `**undefined**`, `**NaN**`, or an empty string (`**""**`) is considered "truthy". This means that when such a value is used in an `**if**` statement, it will be evaluated as `**true**`.

```js
if ("hello") {  
  console.log("This will be printed");  
}  
  
if ([]) {  
  console.log("This will also be printed");  
}
```

Loops
=====

Loops are used to execute a block of code multiple times. JavaScript supports different types of loops, including the for loop, while loop, and do-while loop.

for loop
========

The for loop is the most commonly used loop in JavaScript. It is used to iterate over an array or execute a block of code a specific number of times.

```js
for (let i = 0; i < 5; i++) {  
  console.log(i);  
}  
// nested for loop  
for (let i = 0; i < 5; i++) {  
  for (let j= 0; j< 5; j++) {  
    console.log(i, j);  
  }  
}
```

The for loop parameters are optional

```js
for(;;){  
  // infinite loop  
  console.log("printing")  
}
```

while loop
==========

The while loop is used to execute a block of code as long as a condition is true.

```js
let i = 0;  
while (i < 5) {  
  console.log(i);  
  i++;  
}
```

do-while loop
=============

The do-while loop is similar to the while loop, but it executes the code block at least once before checking the condition.

```js
let i = 1;  
do {  
  console.log(i);  
  i++;  
} while (i <= 5);
```

Break
=====

The `**break**` statement is used to immediately terminate a loop and continue executing code outside of the loop. Here's an example of using `**break**` to terminate a loop when a condition is met:

```js
for (let i = 0; i < 10; i++) {  
  if (i === 5) {  
    break;  
  }  
  console.log(i);  
}
```

Continue
========

The `**continue**` statement is used to skip over an iteration of a loop and continue with the next iteration. Here's an example of using `**continue**` to skip over even numbers in a loop:

```js
for (let i = 0; i < 10; i++) {  
  if (i % 2 === 0) {  
    continue;  
  }  
  console.log(i);  
}
```

In conclusion, control flow statements are essential in JavaScript programming. They allow developers to make decisions, execute loops, and handle errors. By understanding how to use these statements, developers can write more efficient and effective code.