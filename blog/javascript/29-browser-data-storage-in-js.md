---
slug: browser-data-storage-in-js
title: "Browser Data Storage in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

# Browser Data Storage in JS

JavaScript provides various options for storing data in the browser. These storage options are used to store data temporarily or permanently. In this article, we will explore different ways of storing data in the browser using JavaScript.
<!-- truncate -->

## Cookies

Cookies are small pieces of data that are stored in the browser. Cookies can be used to store user preferences, login information, and other data that needs to be persisted. Cookies can be set with an expiration date, after which they are automatically deleted.

Cookies can be created and accessed using the `document.cookie` property in JavaScript.

```js
// Setting a Cookie  
document.cookie = 'key=value';  
// Retrieving a Cookie  
let username = document.cookie.split('=')[1]; // get the value after the '=' sign
```

## Local Storage

Local Storage is a type of storage that allows storing data in the browser permanently. The data stored in Local Storage remains even after the browser is closed. It can be used to store user preferences, login information, and other data that needs to be persisted.

Local Storage is implemented using the `localStorage` object in JavaScript. Data can be stored in Local Storage using the `setItem()` method and retrieved using the `getItem()` method.

```js
// Storing Data in Local Storage  
localStorage.setItem('key', 'value');  
// Retrieving Data from Local Storage  
const value = localStorage.getItem('key');
```

## Session Storage

Session Storage is similar to Local Storage but it stores data only for the duration of the session. Session Storage is cleared when the browser is closed or the session ends. It is useful for storing data that needs to be accessed during a session, such as shopping cart items or form data.

Session Storage is implemented using the `sessionStorage` object in JavaScript. Data can be stored in Session Storage using the `setItem()` method and retrieved using the `getItem()` method.

```js
// Storing Data in Session Storage  
sessionStorage.setItem('key', 'value');  
// Retrieving Data from Session Storage  
const value = sessionStorage.getItem('key');
```

## IndexedDB

To use IndexedDB, you need to first open a connection to a database. Here’s an example of opening a database connection:

```js
let request = indexedDB.open("myDatabase", 1);  
request.onerror = function(event) {  
  // handle errors  
};  
request.onupgradeneeded = function(event) {  
  let db = event.target.result;  
  let objectStore = db.createObjectStore("users", { keyPath: "id" });  
  // create indexes if needed  
};  
request.onsuccess = function(event) {  
  let db = event.target.result;  
  // use the database  
};
```

Once you have opened a connection to the database, you can create object stores to store your data. Here’s an example of adding a record to an object store:

```js
let transaction = db.transaction(["users"], "readwrite");  
let objectStore = transaction.objectStore("users");  
let user = { id: 1, username: "John" };  
let request = objectStore.add(user);  
request.onerror = function(event) {  
  // handle errors  
};  
request.onsuccess = function(event) {  
  // record added successfully  
};
```

To retrieve data from an object store, you can use the `**objectStore.get()**` method:

```js
let transaction = db.transaction(["users"], "readonly");  
let objectStore = transaction.objectStore("users");  
let request = objectStore.get(1);  
request.onerror = function(event) {  
  // handle errors  
};  
request.onsuccess = function(event) {  
  let user = request.result;  
  // use the user object  
};
```

In conclusion, JavaScript provides various options for storing data in the browser. Local Storage and Session Storage can be used to store data permanently or temporarily, respectively. Cookies are another option for storing data in the browser. The choice of storage option depends on the type of data that needs to be persisted and the duration for which it needs to be persisted.