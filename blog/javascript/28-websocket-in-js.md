---
slug: websocket-in-js
title: "WebSocket in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

WebSocket in JS
===============

WebSocket is a protocol that allows for real-time communication between client and server over a single, long-lived connection. Unlike HTTP, which uses a request-response model, WebSocket enables bi-directional communication between the client and server in real-time.
<!-- truncate -->

JavaScript is a popular language for building web applications that require real-time communication, making WebSocket an important technology to learn for web developers.

To use WebSocket in JS, you first need to create a WebSocket object using the WebSocket constructor, passing in the URL of the WebSocket server as a parameter. For example:

```js
const socket = new WebSocket('ws://localhost:8080');
```

Once you have created a WebSocket object, you need to add event listeners to handle the WebSocket events. Here are the events that we can handle:

*   `**open**`: This event is fired when the WebSocket connection is established.
*   `**message**`: This event is fired when a message is received from the WebSocket server.
*   `**error**`: This event is fired when an error occurs in the WebSocket connection.
*   `**close**`: This event is fired when the WebSocket connection is closed.

```js
socket.addEventListener('open', (event) => {  
  console.log('WebSocket connection established');  
});  
socket.addEventListener('message', (event) => {  
  console.log('Received message:', event.data);  
});  
socket.addEventListener('close', (event) => {  
  console.log('WebSocket connection closed');  
});  
socket.addEventListener('error', (event) => {  
  console.error('WebSocket error:', event);  
});
```

To send a message from the client to the server, you can use the `send()` method on the WebSocket object:

```js
const message = 'Hello, WebSocket!';  
socket.send(message);
```

To receive data from the server, we need to handle the `**message**` event of the WebSocket object. Here's an example of how to receive data from the server:

```js
socket.addEventListener('message', function(event) {  
  const message = event.data;  
  console.log('Message received: ' + message);  
});
```

On the server-side, you can use libraries like `ws` or `socket.io` to handle WebSocket connections in Node.js.

WebSocket is a powerful technology that enables real-time communication between client and server. With JavaScript, you can easily create WebSocket connections and handle incoming messages and errors.