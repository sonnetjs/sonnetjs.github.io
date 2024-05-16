---
slug: typeconversion-in-js
title: "TypeConversion in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

TypeConversion in JS
====================

When we need to convert a value from one data type to another in JavaScript, we can perform either implicit or explicit type conversion. Implicit type conversion is performed automatically by JavaScript, while explicit type conversion is performed manually using built-in methods. Some examples of explicit type conversion are Boolean Conversion Boolean(), Number Conversion Number(), and String Conversion String().
<!-- truncate -->

1.  **Explicit type conversion** (also known as casting) is performed manually by the developer using built-in methods.

**Boolean Conversion** `**Boolean()**`

The rule for converting a number to a boolean value is simple: any non-zero number is considered truthy, and the number `**0**` (or `**-0**`) and `NaN` is considered falsy.

```js
Boolean(0);  // false  
Boolean(-0); // false  
Boolean(1);  // true  
Boolean(-1); // true  
Boolean(42); // true
```

An empty string (`**""**`) even having whitespaces is considered falsy, while any non-empty string is truthy.

```js
Boolean("");      // false  
Boolean("hello"); // true  
Boolean("0");     // true  
Boolean("false"); // true  
Boolean("true");  // true
```

All objects will always be truthy no matter it is empty or filled

```js
Boolean([]);            // true  
Boolean([1, 2, 3]);     // true  
Boolean(["hello", 42]); // true  
Boolean({});            // true  
Boolean({name: "John"});// true
```

**Number Conversion** `**Number()**`

When a boolean value is converted to a number, true is converted to 1 and false is converted to 0.

```js
Number(true);  // 1  
Number(false); // 0
```

When a string is converted to a number, the following rules apply:

*   If the string contains only numeric characters (0–9) or a decimal point, it is converted to a corresponding number.
*   If the string is empty or contains only whitespace characters, it is converted to `**0**`.
*   If the string contains any non-numeric characters other than a decimal point, it is converted to `**NaN**` (Not a Number).

```js
Number("42");      // 42  
Number("3.14");    // 3.14  
Number("");        // 0  
Number("   ");     // 0  
Number("123abc");  // NaN
```

If an array has only one element and that element is a number, then the array can be directly converted to a number and if array is empty, then the array will convert to zero.

```js
let arr = [42];  
console.log(Number(arr)); // 42  
console.log(+arr);        // 42  
console.log(Number([]));  // 0
```

**String Conversion** `**String()**`

If primitive is converted to string, then value will be only wrapped to `''`

```js
let bool = true;  
console.log(String(bool)); // "true"  
bool = false;  
console.log(String(bool)); // "false"  
let num = 42;  
console.log(String(num));  // "42"
```

If object is converted to string, then object will be wrapped to string in this way

```js
console.log(String([])); // ""  
console.log(String([1,2,3])); // "1,2,3"  
console.log(String({})); // "[object Object]"
```

2\. **Implicit type conversion** (also known as coercion) is performed automatically by JavaScript when a value of one data type is used in a context that expects a different data type.

**Implicit Type Conversion on Addition**

In case of boolean, it implicitly convert it to Number and then perform addition operation

```js
let num = 42;  
let bool1 = true;  
let bool2 = false;  
console.log(num + bool1); // 43  
console.log(num + bool2); // 42
```

In case of array and string, it simply convert both of them to string and then perform concatenation

```js
let str = "foo";  
let num = 42;  
console.log(str + num); // "foo42"
```

```js
let arr = [1, 2, 3];  
let num = 42;  
console.log(arr + num); // "1,2,342"
```

**Implicit Type Conversion on Subtraction**

In case of boolean, it implicitly convert it to Number and then perform subtraction operation

```js
let num = 42;  
let bool1 = true;  
let bool2 = false;  
console.log(num - bool1); // 41  
console.log(num - bool2); // 42
```

In case of string, it implicitly convert it to Number and then perform subtraction operation

```js
let str = "7";  
let num = 4;  
console.log(str - num); // 3
```

In case of non-numeric string, or array or object, it will result in NaN except one situation that array has only and only one Number.

```js
let str = "foo";  
console.log(str - 1); // NaN
```

```js
let arr = [1, 2, 3];  
console.log(arr - 1); // NaNlet arr1 = [1];  
console.log(arr1 - 1); // 0let obj = {name: "John"};  
console.log(obj - 1); // NaN
```

**Implicit Type Conversion on Comparison**

The rules for type coercion in comparison operators is that JavaScript tries to convert the values to a type that makes sense for the comparison being made. In case of strict equality, implicit type conversion not happens, it simply return false.

```js
console.log('10' == 10); // true  
console.log('10' == '10'); // true  
console.log(true == 1); // true  
console.log(false == 0); // true  
console.log(null == undefined); // true  
console.log('' == 0); // true  
console.log([] == ''); // true  
console.log([] == 0); // true  
console.log([1, 2] == '1,2'); // true  
console.log(NaN == NaN); // false
```

In conclusion, this is how conversion happens in JavaScript. By understanding this, you can write predicted and efficient code.