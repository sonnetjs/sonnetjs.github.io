---
slug: regex-expressions-in-js
title: "Regex Expressions in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Regex Expressions in JS
=======================

JavaScript is a programming language that supports regular expressions (regex). A regular expression is a sequence of characters that specifies a search pattern. With regex, we can search and manipulate text data in a more efficient and flexible way. In this document, we will explore how to use regular expressions in JavaScript.
<!-- truncate -->

**Flags:**

*   `**g**`: Global match. This flag indicates that the regular expression should match all occurrences in the input string, rather than just the first one.
*   `**i**`: Case-insensitive match. This flag indicates that the regular expression should match regardless of the casing of the input string.
*   `**m**`: Multiline match. This flag indicates that the regular expression should match across multiple lines of the input string.

**Patterns:**

1.  Matching any character: `**.**`
2.  Matching any digit: `**\\d**`
3.  Matching any non-digit: `**\\D**`
4.  Matching any whitespace character: `**\\s**`
5.  Matching any non-whitespace character: `**\\S**`
6.  Matching any word character: `**\\w**`
7.  Matching any non-word character: `**\\W**`
8.  Matching a specific number of characters: `**{n}**`
9.  Matching zero or more occurrences: **``**
10.  Matching one or more occurrences: `**+**`
11.  Matching zero or one occurrence: `**?**`
12.  Matching the start of a string: `**^**`
13.  Matching the end of a string: `**$**`
14.  Matching a range of characters: `**[abc]**`
15.  Matching any character not in a range: `**[^abc]**`
16.  Matching any character in a range of characters: `**[a-z]**`
17.  Matching any character not in a range of characters: `**[^a-z]**`
18.  Matching any character except newline: `**[\\s\\S]**`
19.  Matching a specific character: `**\**`
20.  Matching a specific word boundary: `**\\b**`
21.  Matching a negative word boundary: `**\\B**`
22.  Capturing a group of characters: `**( )**`
23.  Non-capturing a group of characters: `**(?: )**`
24.  Matching one of several patterns: `**(pattern1|pattern2|pattern3)**`
25.  Using a backreference to match a previous captured group: `**\\n**`
26.  Matching any number of characters lazily: `**?**`
27.  Matching one or more characters lazily: `**+?**`
28.  Matching a specific number of characters lazily: `**{n}?**`
29.  Using lookahead to match a pattern only if it’s followed by another pattern: `**(?= )**`
30.  Using lookbehind to match a pattern only if it’s preceded by another pattern: `**(?<= )**`

```js
// Matches all occurrences of the word "dog"  
const regex = /dog/g;  
// Matches the word "hello" regardless of case  
const regex = /hello/i;  
// Matches the pattern "cat" at the beginning of a string  
const regex = /^cat/;  
// Matches the pattern "bat" at the end of a string  
const regex = /bat$/;  
// Matches any vowel character  
const regex = /[aeiou]/;  
// Matches any non-vowel character  
const regex = /[^aeiou]/;  
// Matches either "cat" or "dog"  
const regex = /cat|dog/;  
// Groups together "hello" and "world" and captures the result  
const regex = /(hello) (world)/;
```

**Most Used Regex Patterns**

1.  Email addresses:

*   `**\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b**` - this matches most standard email addresses and ensures that the domain name ends with at least two letters.

2\. Phone numbers:

*   `**\\b\\d{3}[-.]?\\d{3}[-.]?\\d{4}\\b**` - this matches most US phone numbers, with or without dashes or periods between groups of digits.

3\. URLs:

*   `**(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ;,./?%&=]*)?**` - this matches most standard URLs, including those with or without the `**http://**` or `**https://**` prefixes, and with or without query parameters.

4\. Postal codes:

*   `**[A-Z]\\d[A-Z] ?\\d[A-Z]\\d**` - this matches most Canadian postal codes, which have the format A1A 1A1, with the first three characters being a letter, followed by a digit, followed by another letter, and then a space, and then a digit, followed by another letter, and then a digit.

5\. IP addresses:

*   `**\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b**` - this matches most standard IP addresses, with each group of digits separated by periods.

6\. Dates:

*   `**\\b\\d{1,2}[\\/\\-]\\d{1,2}[\\/\\-]\\d{4}\\b**` - this matches most standard date formats, with the month and day separated by either a slash or a dash, and the year consisting of four digits.

7\. Credit card numbers:

*   `**\\b\\d{4}([ \\-]?\\d{4}){3}\\b**` - this matches most standard credit card numbers, with groups of four digits separated by either spaces or dashes.

8\. Social Security numbers:

*   `**\\b\\d{3}[ \\-]?\\d{2}[ \\-]?\\d{4}\\b**` - this matches most standard SSN formats, with groups of three, two, and four digits separated by either spaces or dashes.

9\. File paths:

*   `**^[A-Za-z]:[\\\\/].***` - this matches most standard file paths on Windows systems, with the drive letter followed by a colon, and then the rest of the path separated by either backslashes or forward slashes.

Creating a Regex Object
=======================

In JavaScript, we can create a regex object using the `RegExp` constructor or by using a regex literal. Here is an example:

```js
// Using RegExp constructor  
let regex1 = new RegExp('hello');  
console.log(regex1.test('hello world')); // true  
// Using regex literal  
let regex2 = /hello/;  
console.log(regex2.test('world hello')); // true
```

Matching a Pattern
==================

To match a pattern in a string, we can use the `match` method. This method returns an array of matches or `null` if no matches are found. Here is an example:

```js
let str = 'The quick brown fox jumps over the lazy dog';  
let regex = /the/gi;  
let matches = str.match(regex);  
console.log(matches); // ["The", "the"]
```

In this example, we used the `g` and `i` flags to match all occurrences of the word "the" in a case-insensitive way.

Replacing a Pattern
===================

To replace a pattern in a string, we can use the `replace` method. This method returns a new string with the replaced value. Here is an example:

```js
let str = 'JavaScript is a popular programming language';  
let regex = /JavaScript/;  
let newStr = str.replace(regex, 'JS');  
console.log(newStr); // "JS is a popular programming language"
```

In this example, we used the `replace` method to replace the word "JavaScript" with "JS" in the string.

Conclusion
==========

Regular expressions are a powerful tool in JavaScript for searching and manipulating text data. We can create regex objects using the `RegExp` constructor or regex literals. We can match a pattern using the `match` method and replace a pattern using the `replace` method. With regular expressions, we can write more efficient and flexible code.