---
slug: handling-forms-in-js
title: "Handling Forms in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Handling Forms in JS
====================

Handling forms is an essential task in web development, and JavaScript provides a powerful and flexible way to handle forms. In this article, we’ll discuss how to handle forms in JavaScript.
<!-- truncate -->

Getting Form Elements
=====================

The first step in handling forms is to get the form elements. You can get the form elements using the `getElementById` method, which returns the element with the specified ID.

```js
const form = document.getElementById('myForm');
```

Once you have the form element, you can get the input elements using the `querySelectorAll` method, which returns a NodeList of all the matching elements.

```js
const inputs = form.querySelectorAll('input');
```

Handling Form Submission
========================

Handling form submission is the most important part of handling forms. You can handle form submission using the `submit` event, which is fired when the user submits the form.

```js
form.addEventListener('submit', (event) => {  
  event.preventDefault(); // Prevents the form from submitting  
// Your code to handle form submission  
});
```

Validating Form Input
=====================

Validating form input is crucial to ensure that the data submitted by the user is valid. You can validate form input using the `checkValidity` method, which returns `true` if the input is valid and `false` if it is not.

```js
// Check if all inputs are valid  
const isValid = inputs.every((input) => input.checkValidity());
```

Accessing Form Data
===================

To access the data submitted by the user, you can use the `FormData` API, which provides a way to create a new `FormData` object from a form element.

```js
const formData = new FormData(form);
```

Once you have the `FormData` object, you can access the form data using the `get` method.

```js
const username = formData.get('username');  
const password = formData.get('password');
```

Reading Text Files
==================

To read a text file in JavaScript, we can use the `FileReader` object. This object provides methods for reading files and handling the contents of the file. Here is an example code snippet that demonstrates how to read a text file using `FileReader`:

```js
const fileInput = document.querySelector('input[type="file"]');  
fileInput.addEventListener('change', (event) => {  
  const file = event.target.files[0];  
  const reader = new FileReader();  
  reader.onload = () => {  
    console.log(reader.result);  
  };  
  reader.readAsText(file);  
});
```

In this example, we first select the file input element using `querySelector`. We then add an event listener to the input element that listens for the `change` event. When the event is triggered, we retrieve the selected file using `event.target.files[0]`. We then create a new instance of `FileReader` and assign it to the `reader` variable.

We then define an `onload` event handler for the `reader` object. This event handler is called when the file has been successfully read. In this example, we simply log the contents of the file to the console using `console.log(reader.result)`.

Finally, we call the `readAsText` method of the `reader` object to read the contents of the file as text.

Reading Binary Files
====================

Reading binary files is a bit more complex than reading text files. Binary files need to be read as an `ArrayBuffer` object, which is a low-level representation of binary data in JavaScript. Here is an example code snippet that demonstrates how to read a binary file using `FileReader`:

```js
const fileInput = document.querySelector('input[type="file"]');  
fileInput.addEventListener('change', (event) => {  
  const file = event.target.files[0];  
  const reader = new FileReader();  
  reader.onload = () => {  
    const buffer = reader.result;  
    console.log(new Uint8Array(buffer));  
  };  
  reader.readAsArrayBuffer(file);  
});
```

In this example, we use the same basic structure as before, but instead of calling `readAsText`, we call `readAsArrayBuffer`. When the file has been successfully read, the `onload` event handler is called, and we retrieve the contents of the file as an `ArrayBuffer` object using `reader.result`.

We then create a new `Uint8Array` object from the `ArrayBuffer` object, which allows us to access the binary data in a more meaningful way. We log the contents of this array to the console using `console.log(new Uint8Array(buffer))`.

Blob
====

In JavaScript, a Blob (Binary Large Object) is an object that represents a file-like object of immutable, raw data. Blobs represent data that isn’t necessarily in a JavaScript-native format, such as images or other binary data.

A Blob can be created by instantiating the `**Blob**` constructor or by using the `**Blob()**` constructor on a typed array. Here is an example of how to create a new Blob using the `**Blob()**` constructor:

```js
const myBlob = new Blob(["Hello, world!"], { type: "text/plain" });
```

In this example, we create a new Blob that contains the string “Hello, world!” and set the type of the Blob to “text/plain”. The resulting Blob can be used in various ways, such as downloading or uploading a file.

Once a Blob is created, it can be used to create a URL that can be used as the `**src**` attribute of an image or the `**href**` attribute of a link. Here is an example of how to create a URL from a Blob:

```js
const url = URL.createObjectURL(myBlob);
```

It’s important to note that Blobs are immutable, meaning their content cannot be modified once they are created. However, you can create a new Blob that contains the modified data and use that instead.

Revoking a URL created from a Blob is necessary to free up memory used by the URL and make the underlying Blob eligible for garbage collection. When you create a URL from a Blob using `**createObjectURL()**`, a reference is created to the Blob's data. If you don't revoke the URL, the reference will persist even after the Blob is no longer needed, preventing the Blob's data from being garbage collected and potentially leading to memory leaks.

```js
const url = URL.createObjectURL(myBlob);  
// Use the URL...  
URL.revokeObjectURL(url);
```

Here’s an example of how to get a file from a form input and pass it into a Blob:

```js
// Get the file input element from the form  
const inputElement = document.getElementById("fileInput");  
// Get the selected file from the input element  
const file = inputElement.files[0];  
// Create a new FileReader  
const reader = new FileReader();  
// Set the onload event handler for the FileReader  
reader.onload = function() {  
  // When the FileReader has loaded the file, create a Blob from the result  
  const blob = new Blob([reader.result], { type: file.type });  
    
  // Use the Blob for whatever purpose you need  
  console.log(blob);  
};  
// Read the file as an ArrayBuffer  
reader.readAsArrayBuffer(file);
```

In conclusion, handling forms in JavaScript is an essential skill for web developers. By following the tips and techniques outlined in this article, you can handle forms effectively and efficiently. Reading files in JavaScript is a powerful feature that allows us to create more dynamic and interactive web applications. By using the `FileReader` object, we can easily read and manipulate files in both text and binary formats.