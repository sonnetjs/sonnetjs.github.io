---
slug: advance-concepts-of-events-in-js-bubbling-capturing
title: "Advance Concepts of Events in JS: Bubbling, Capturing"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Advance Concepts of Events in JS: Bubbling, Capturing
=====================================================

Events in JavaScript are a fundamental part of building interactive web applications. They allow us to respond to user actions, such as clicking a button or scrolling the page. In addition to handling events, it is important to understand the concepts of event propagation: bubbling and capturing. In this article, we will dive into these concepts and learn how they can be used to handle events in more advanced ways.
<!-- truncate -->

Event Propagation
=================

Event propagation refers to the order in which events are handled as they “propagate” through the document object model (DOM) tree. The DOM tree is a hierarchical structure that represents the structure of an HTML document. When an event is triggered on an element, it can either be handled first by that element and then “bubble” up the DOM tree, or it can be handled first at the top of the tree and then “capture” down the tree to the element that triggered the event.

Bubbling
========

Bubbling is the default method of event propagation in JavaScript. When an event is triggered on an element, it is first handled by that element, and then “bubbles” up the DOM tree, triggering the event handlers of its parent elements until it reaches the top of the tree (the document object). This means that if an element has multiple event listeners for the same event, they will be triggered in the order of their parent-child relationship.

Here is an example of how bubbling works:

```js
<body>  
  <div>  
    <button>Click me</button>  
  </div>  
</body>
```

```js
document.querySelector('button').addEventListener('click', function(event) {  
  console.log('Button clicked');  
});  
document.querySelector('div').addEventListener('click', function(event) {  
  console.log('Div clicked');  
});  
document.querySelector('body').addEventListener('click', function(event) {  
  console.log('Body clicked');  
});
```

In this example, we have a button element inside a div element inside the body element. When the user clicks the button, the click event is triggered on the button element and then bubbles up to the div element and finally to the body element. As a result, the event handlers for the body, div, and button elements are all triggered, in that order.

Capturing
=========

Capturing is the opposite of bubbling. When an event is triggered on an element, it is first handled by the top-level element (the document object) and then “captures” down the DOM tree, triggering the event handlers of its child elements until it reaches the element that triggered the event. This means that if an element has multiple event listeners for the same event, they will be triggered in the order of their child-parent relationship.

Here is an example of how capturing works:

```js
<body>  
  <div id="parent">  
    <button id="child">Click me</button>  
  </div>  
</body>
```

```js
const parent = document.getElementById('parent');  
const child = document.getElementById('child');  
parent.addEventListener('click', function(event) {  
  console.log('Parent clicked');  
}, true);  
child.addEventListener('click', function(event) {  
  console.log('Child clicked');  
}, true);
```

In this example, if you click on the “Click me” button, the parent event handler will be called first, and then the child event handler will be called. This is because the event captures down the DOM tree from the root element to its child element.

Stopping Event Propagation
==========================

Sometimes you may want to stop an event from propagating any further up or down the DOM tree. You can do this using the `**stopPropagation**` method of the event object:

```js
<body>  
  <div id="parent">  
    <button id="child">Click me</button>  
  </div>  
</body>
```

```js
const parent = document.getElementById('parent');  
const child = document.getElementById('child');  
parent.addEventListener('click', function(event) {  
  console.log('Parent clicked');  
});  
child.addEventListener('click', function(event) {  
  console.log('Child clicked');  
  event.stopPropagation();  
});
```

In this example, if you click on the “Click me” button, only the child event handler will be called. This is because the parent event handler stops the event from propagating any further up the DOM tree.

Event Delegation
================

Event delegation is a technique used in JavaScript to handle events efficiently, especially for situations where there are many elements with similar behavior. Instead of adding event listeners to each individual element, we add a single event listener to a parent element, which then handles the events for all the child elements.

This technique takes advantage of the fact that events “bubble up” the DOM hierarchy. When an event occurs on an element, it will first trigger any event listeners attached to that element. Then, the event will “bubble up” to the parent element, triggering any event listeners attached to it. This process continues up the DOM hierarchy until it reaches the root element.

With event delegation, we can add a single event listener to the parent element, and then use the `**event.target**` property to identify the child element that actually triggered the event. We can then apply the appropriate behavior based on the target element.

For example, let’s say we have a list of items that each have a delete button, and we want to remove an item when its delete button is clicked. Instead of adding an event listener to each individual delete button, we can add a single event listener to the parent element (the list), and use event delegation to identify which delete button was clicked:

```js
<ul id="list">  
  <li>  
    Item 1 <button class="delete-btn">Delete</button>  
  </li>  
  <li>  
    Item 2 <button class="delete-btn">Delete</button>  
  </li>  
  <li>  
    Item 3 <button class="delete-btn">Delete</button>  
  </li>  
</ul>
```

```js
const list = document.getElementById('list');  
list.addEventListener('click', (event) => {  
  if (event.target.classList.contains('delete-btn')) {  
    const listItem = event.target.closest('li');  
    listItem.remove();  
  }  
});
```

In this example, we add a single event listener to the `**list**` element. When a click event occurs, we check if the clicked element has the class `**delete-btn**`. If it does, we use the `**closest**` method to find the nearest `**li**` ancestor element and remove it from the DOM.

Event delegation has several advantages over adding event listeners to each individual element:

1.  It reduces the amount of event listeners needed, which can improve performance and reduce memory usage.
2.  It allows you to handle events for dynamically created elements, as you only need to add the event listener to a parent element that exists in the DOM.
3.  It simplifies your code, as you don’t need to add and remove event listeners whenever elements are added or removed from the DOM.

Understanding Bubbling and Capturing is important for handling events in JavaScript. While Bubbling is the default behavior, Capturing can be useful in some scenarios. It is also important to know how to stop the propagation of an event if we don’t want it to affect other elements in the DOM