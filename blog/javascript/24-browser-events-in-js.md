---
slug: browser-events-in-js
title: "Browser Events in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Browser Events in JS
====================

In JavaScript, events are actions or occurrences that happen in the browser, such as a user clicking on a button or a page finishing loading. JavaScript can listen to these events and execute code in response.
<!-- truncate -->

There are many types of events in JavaScript, including:

*   Mouse events: click, hover, mouseover, etc.
*   Keyboard events: keypress, keydown, keyup
*   Form events: submit, change, reset
*   Window events: load, resize, scroll

`addEventListener` and `removeEventListener` in JS
==================================================

`**addEventListener**` and `**removeEventListener**` are two methods in JavaScript that allow us to add and remove event listeners to HTML elements.

An event listener is a function that gets executed when an event occurs on an HTML element, like a click or a key press. When you add an event listener to an element using `**addEventListener**`, you specify which event to listen for and which function should be executed when that event occurs.

`**addEventListener**` takes two arguments:

1.  The type of the event to listen for (e.g. `**click**`, `**mouseover**`, `**keydown**`)
2.  The function that should be executed when the event occurs

`**removeEventListener**` is used to remove an event listener from an element. It takes the same two arguments as `**addEventListener**`: the type of the event to remove and the function that should no longer be executed when that event occurs.

Mouse Events in JS
==================

In JavaScript, you can handle mouse events using event listeners. Mouse events occur when the user interacts with the mouse, such as clicking a button, moving the cursor over an element, or scrolling the page. There are several mouse events that you can handle in JavaScript, such as click, double click, mouse over, mouse out, mouse down, and mouse up.

Adding Mouse Event Listeners
============================

To add a mouse event listener to an element, you can use the `**addEventListener**` method. This method takes two parameters: the type of event to listen for (such as "click" or "mouseover"), and a callback function to be executed when the event occurs. Here's an example:

```js
// Get a reference to an element in the document  
const button = document.querySelector('#my-button');  
// Add a click event listener to the element  
button.addEventListener('click', function() {  
  console.log('The button was clicked.');  
});
```

In this example, we add a click event listener to a button element. When the button is clicked, the callback function logs a message to the console.

Mouse Event Types
=================

Here are some of the most commonly used mouse events in JavaScript:

*   `**click**`: Occurs when the mouse button is clicked on an element.
*   `**dblclick**`: Occurs when the mouse button is double-clicked on an element.
*   `**mouseover**`: Occurs when the mouse pointer is moved over an element.
*   `**mouseout**`: Occurs when the mouse pointer leaves an element.
*   `**mousedown**`: Occurs when the mouse button is pressed down on an element.
*   `**mouseup**`: Occurs when the mouse button is released on an element.
*   `**mousemove**`: Occurs when the mouse pointer is moved over an element.

You can add event listeners for these events using the `**addEventListener**` method, just as we did in the previous example.

Event Object
============

When a mouse event occurs, an event object is created that contains information about the event, such as the position of the mouse pointer and the element that triggered the event. This event object is passed as an argument to the event listener function.

Here’s an example of how you can access the event object in a mouse event listener:

```js
// Get a reference to an element in the document  
const element = document.querySelector('#my-element');  
// Add a mouseover event listener to the element  
element.addEventListener('mouseover', function(event) {  
  // Log the event object to the console  
  console.log(event);  
});
```

In JavaScript, when you attach an event listener to an element, the event object that is passed to the event handler function has two important properties: `**currentTarget**` and `**target**`.

The `**currentTarget**` property refers to the element on which the event listener was attached. This property will always refer to the same element, regardless of which child element actually triggered the event.

The `**target**` property, on the other hand, refers to the element that actually triggered the event. This property will be different depending on which child element was clicked or interacted with.

```js
<div class="parent">  
  <button class="child">Click me!</button>  
</div>  
<script>  
  const parent = document.querySelector('.parent');  
  parent.addEventListener('click', function(event) {  
    console.log('currentTarget:', event.currentTarget); // <div class="parent">...</div>  
    console.log('target:', event.target); // <button class="child">Click me!</button>  
  });  
</script>
```

Keyboard Events in JS
=====================

Keyboard events in JavaScript are events that are triggered when a user interacts with their keyboard. These events allow us to respond to the user’s input and provide interactivity to our web applications.

There are three types of keyboard events in JavaScript: `**keydown**`, `**keyup**`, and `**keypress**`. Each event is triggered at a different point during the user's interaction with the keyboard.

`keydown` Event
===============

The `**keydown**` event is triggered when a key is pressed down. This event occurs before the character is inputted into the document. It is useful for detecting when the user first starts typing a character. The `**keydown**` event is also useful for detecting non-character keys such as the arrow keys, backspace, and delete keys.

Here is an example of adding a `**keydown**` event listener to an input element:

```js
const input = document.querySelector('input');  
input.addEventListener('keydown', function(event) {  
  console.log('Key pressed:', event.key);  
});
```

`keyup` Event
=============

The `**keyup**` event is triggered when a key is released. This event occurs after the character is inputted into the document. It is useful for detecting when the user has finished typing a character. The `**keyup**` event is also useful for detecting non-character keys such as the arrow keys, backspace, and delete keys.

Here is an example of adding a `**keyup**` event listener to an input element:

```js
const input = document.querySelector('input');  
input.addEventListener('keyup', function(event) {  
  console.log('Key released:', event.key);  
});
```

`keypress` Event
================

The `**keypress**` event is triggered when a key is pressed down and then released. This event occurs after the character is inputted into the document. It is useful for detecting when the user types a printable character such as a letter, number, or symbol.

Here is an example of adding a `**keypress**` event listener to an input element:

```js
const input = document.querySelector('input');  
input.addEventListener('keypress', function(event) {  
  console.log('Key pressed and released:', event.key);  
});
```

Preventing Default Behavior
===========================

In some cases, we may want to prevent the default behavior of a keyboard event. For example, we may want to prevent the Enter key from submitting a form or the Tab key from changing the focus to the next element. To do this, we can call the `**preventDefault**` method on the `**event**` object passed to the

In conclusion, how to handle browser events in JavaScript, including mouse and keyboard events are important concept when working with browsers. `addEventListener` and `removeEventListener` are methods to perform specific action on any browser event.