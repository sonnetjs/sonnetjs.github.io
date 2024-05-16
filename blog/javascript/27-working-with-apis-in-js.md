---
slug: working-with-apis-in-js
title: "Working with APIs in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Working with APIs in JS
=======================

Working with APIs in JavaScript involves making requests to an external server to retrieve or send data. In this blog post, we will discuss the basics of working with APIs in JavaScript, including how to make API requests using different methods and handling responses.
<!-- truncate -->

Fetch Request
=============

Fetch API is a modern interface that allows us to make HTTP requests in JavaScript using the fetch() method. It provides a more flexible and powerful alternative to the older XMLHttpRequest (XHR) object.

Fetch Syntax
============

The basic syntax of fetch() method is as follows:

```js
fetch(url, options);
```

Here, url is the URL of the resource which you want to fetch and options is an optional object that can include properties like method, headers, body, mode, cache, credentials, redirect, referrer, integrity, and keepalive.

Fetch Example
=============

Here is an example of fetching data from a URL and parsing the response as JSON:

```js
fetch('<https://jsonplaceholder.typicode.com/users>')  
  .then(response => response.json())  
  .then(data => console.log(data))  
  .catch(error => console.error(error));
```

This code sends a GET request to the given URL and returns a Promise that resolves to the response object. The response.json() method parses the response as JSON and returns another Promise that resolves to the parsed data.

Fetch Options
=============

The fetch() method can accept a second argument, an options object, which can be used to customize the request. Some of the most common options are:

*   method: HTTP method to use for the request (GET, POST, PUT, DELETE, etc.)
*   headers: an object containing any headers to include in the request
*   body: the data to send with the request
*   mode: the mode of the request (cors, no-cors, same-origin, navigate)
*   cache: the cache mode of the request (default, reload, no-cache)
*   credentials: the authentication credentials to include (omit, same-origin, include)
*   redirect: the mode of the redirect (follow, error, manual)
*   referrer: the referrer of the request
*   integrity: the integrity hash of the resource
*   keepalive: a boolean indicating whether or not to send keepalive packets for the request

Basic Usage
===========

To make a simple GET request using the Fetch API, you can use the `**fetch()**` method:

```js
fetch('<https://api.example.com/data>')  
  .then(response => {  
    if (!response.ok) {  
      throw new Error('Network response was not ok');  
    }  
    return response.json();  
  })  
  .then(data => {  
    console.log(data);  
  })  
  .catch(error => {  
    console.error('There was a problem with the fetch operation:', error);  
  });
```

Request Options
===============

The `**fetch()**` method also accepts an optional second parameter, which is an options object that allows you to configure the request. Here's an example:

```js
fetch('<https://api.example.com/data>', {  
  method: 'POST',  
  headers: {  
    'Content-Type': 'application/json'  
  },  
  body: JSON.stringify({  
    name: 'John Doe',  
    email: 'johndoe@example.com'  
  })  
})  
  .then(response => {  
    if (!response.ok) {  
      throw new Error('Network response was not ok');  
    }  
    return response.json();  
  })  
  .then(data => {  
    console.log(data);  
  })  
  .catch(error => {  
    console.error('There was a problem with the fetch operation:', error);  
  });
```

Response Options
================

The `**Response**` object returned by `**fetch()**` provides several methods for reading the response body as different types of data. For example, you can use the `**text()**` method to read the response body as text, the `**blob()**` method to read it as a Blob object, and the `**arrayBuffer()**` method to read it as an ArrayBuffer.

```js
fetch('<https://api.example.com/data>')  
  .then(response => {  
    if (!response.ok) {  
      throw new Error('Network response was not ok');  
    }  
    return response.text();  
  })  
  .then(text => {  
    console.log(text);  
  })  
  .catch(error => {  
    console.error('There was a problem with the fetch operation:', error);  
  });
```

`XMLHTTPRequest`
================

The `**XMLHttpRequest**` object is a built-in browser API that allows us to send HTTP requests and receive responses. Here's an example of making a GET request using `**XMLHttpRequest**`:

```js
const xhr = new XMLHttpRequest();  
xhr.open('GET', '<https://jsonplaceholder.typicode.com/todos/1>');  
xhr.onload = function() {  
  if (xhr.status === 200) {  
    console.log(JSON.parse(xhr.response));  
  } else {  
    console.log('Request failed. Status code: ' + xhr.status);  
  }  
};  
xhr.send();
```

Here’s an example of making a POST request using XMLHttpRequest:

```js
const xhr = new XMLHttpRequest();  
const url = '<https://jsonplaceholder.typicode.com/posts>';  
const data = JSON.stringify({  
  title: 'foo',  
  body: 'bar',  
  userId: 1  
});  
xhr.open('POST', url);  
xhr.setRequestHeader('Content-Type', 'application/json');  
xhr.onload = function() {  
  if (xhr.status === 201) {  
    console.log(JSON.parse(xhr.response));  
  } else {  
    console.log('Request failed. Status code: ' + xhr.status);  
  }  
};  
xhr.send(data);
```

The XMLHttpRequest object has a number of methods and properties that allow you to configure and send requests, and handle responses. Here’s an overview of some of the most commonly used methods and properties:

**Methods:**

*   `**open(method, url[, async[, user[, password]]])**`: Initializes a new request, setting the HTTP method, URL, and other optional parameters.
*   `**send([body])**`: Sends the request to the server. The optional `**body**` parameter allows you to send data along with the request.
*   `**abort()**`: Aborts the current request.
*   `**setRequestHeader(header, value)**`: Sets a request header.

**Properties:**

*   `**onload**`: A callback function that is called when the response has been received.
*   `**readyState**`: The current state of the request.
*   `**response**`: The response body, as an ArrayBuffer, Blob, Document, JSON object, or string, depending on the `**responseType**` property.
*   `**responseType**`: The expected type of the response.
*   `**status**`: The HTTP status code of the response.
*   `**statusText**`: The HTTP status text of the response.

By using these methods and properties, you can send requests to a server, receive responses, and manipulate the data as needed in your application.

Both Fetch API and XMLHttpRequest (XHR) are used to make HTTP requests in JavaScript. Fetch API is a newer and more modern API, while XHR has been around for a longer time and is considered a legacy API. Fetch API has a simpler syntax and provides a more flexible and powerful interface for making requests, handling responses, and working with data in JSON format. It also supports streaming and has built-in support for CORS. On the other hand, XHR provides more granular control over the request and response, allowing for low-level manipulation of the data. It also supports older browsers and has wider browser support. Overall, both Fetch API and XHR have their strengths and weaknesses, and the choice between them depends on the specific use case and the developer’s preferences.