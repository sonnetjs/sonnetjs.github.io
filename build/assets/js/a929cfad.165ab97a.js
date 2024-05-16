"use strict";(self.webpackChunksonnet_docs=self.webpackChunksonnet_docs||[]).push([[246],{5696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(4848),a=n(8453);const s={slug:"advance-concepts-of-events-in-js-bubbling-capturing",title:"Advance Concepts of Events in JS: Bubbling, Capturing",authors:{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4"},tags:["javascript"]},l="Advance Concepts of Events in JS: Bubbling, Capturing",o={permalink:"/blog/advance-concepts-of-events-in-js-bubbling-capturing",editUrl:"https://github.com/sonnetjs/sonnetjs.github.io/tree/main/blog/javascript/25-advance-concepts-of-events-in-js-bubbling-capturing.md",source:"@site/blog/javascript/25-advance-concepts-of-events-in-js-bubbling-capturing.md",title:"Advance Concepts of Events in JS: Bubbling, Capturing",description:"Events in JavaScript are a fundamental part of building interactive web applications. They allow us to respond to user actions, such as clicking a button or scrolling the page. In addition to handling events, it is important to understand the concepts of event propagation: bubbling and capturing. In this article, we will dive into these concepts and learn how they can be used to handle events in more advanced ways.",date:"2024-05-15T13:15:30.900Z",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:5.275,hasTruncateMarker:!0,authors:[{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4",imageURL:"https://avatars.githubusercontent.com/u/58030954?v=4"}],frontMatter:{slug:"advance-concepts-of-events-in-js-bubbling-capturing",title:"Advance Concepts of Events in JS: Bubbling, Capturing",authors:{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4",imageURL:"https://avatars.githubusercontent.com/u/58030954?v=4"},tags:["javascript"]},unlisted:!1,prevItem:{title:"Handling Forms in JS",permalink:"/blog/handling-forms-in-js"},nextItem:{title:"Browser Events in JS",permalink:"/blog/browser-events-in-js"}},r={authorsImageUrls:[void 0]},c=[];function d(e){const t={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Events in JavaScript are a fundamental part of building interactive web applications. They allow us to respond to user actions, such as clicking a button or scrolling the page. In addition to handling events, it is important to understand the concepts of event propagation: bubbling and capturing. In this article, we will dive into these concepts and learn how they can be used to handle events in more advanced ways."}),"\n",(0,i.jsx)(t.h1,{id:"event-propagation",children:"Event Propagation"}),"\n",(0,i.jsx)(t.p,{children:"Event propagation refers to the order in which events are handled as they \u201cpropagate\u201d through the document object model (DOM) tree. The DOM tree is a hierarchical structure that represents the structure of an HTML document. When an event is triggered on an element, it can either be handled first by that element and then \u201cbubble\u201d up the DOM tree, or it can be handled first at the top of the tree and then \u201ccapture\u201d down the tree to the element that triggered the event."}),"\n",(0,i.jsx)(t.h1,{id:"bubbling",children:"Bubbling"}),"\n",(0,i.jsx)(t.p,{children:"Bubbling is the default method of event propagation in JavaScript. When an event is triggered on an element, it is first handled by that element, and then \u201cbubbles\u201d up the DOM tree, triggering the event handlers of its parent elements until it reaches the top of the tree (the document object). This means that if an element has multiple event listeners for the same event, they will be triggered in the order of their parent-child relationship."}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of how bubbling works:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"<body>  \n  <div>  \n    <button>Click me</button>  \n  </div>  \n</body>\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"document.querySelector('button').addEventListener('click', function(event) {  \n  console.log('Button clicked');  \n});  \ndocument.querySelector('div').addEventListener('click', function(event) {  \n  console.log('Div clicked');  \n});  \ndocument.querySelector('body').addEventListener('click', function(event) {  \n  console.log('Body clicked');  \n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"In this example, we have a button element inside a div element inside the body element. When the user clicks the button, the click event is triggered on the button element and then bubbles up to the div element and finally to the body element. As a result, the event handlers for the body, div, and button elements are all triggered, in that order."}),"\n",(0,i.jsx)(t.h1,{id:"capturing",children:"Capturing"}),"\n",(0,i.jsx)(t.p,{children:"Capturing is the opposite of bubbling. When an event is triggered on an element, it is first handled by the top-level element (the document object) and then \u201ccaptures\u201d down the DOM tree, triggering the event handlers of its child elements until it reaches the element that triggered the event. This means that if an element has multiple event listeners for the same event, they will be triggered in the order of their child-parent relationship."}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of how capturing works:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<body>  \n  <div id="parent">  \n    <button id="child">Click me</button>  \n  </div>  \n</body>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const parent = document.getElementById('parent');  \nconst child = document.getElementById('child');  \nparent.addEventListener('click', function(event) {  \n  console.log('Parent clicked');  \n}, true);  \nchild.addEventListener('click', function(event) {  \n  console.log('Child clicked');  \n}, true);\n"})}),"\n",(0,i.jsx)(t.p,{children:"In this example, if you click on the \u201cClick me\u201d button, the parent event handler will be called first, and then the child event handler will be called. This is because the event captures down the DOM tree from the root element to its child element."}),"\n",(0,i.jsx)(t.h1,{id:"stopping-event-propagation",children:"Stopping Event Propagation"}),"\n",(0,i.jsxs)(t.p,{children:["Sometimes you may want to stop an event from propagating any further up or down the DOM tree. You can do this using the ",(0,i.jsx)(t.code,{children:"**stopPropagation**"})," method of the event object:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<body>  \n  <div id="parent">  \n    <button id="child">Click me</button>  \n  </div>  \n</body>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const parent = document.getElementById('parent');  \nconst child = document.getElementById('child');  \nparent.addEventListener('click', function(event) {  \n  console.log('Parent clicked');  \n});  \nchild.addEventListener('click', function(event) {  \n  console.log('Child clicked');  \n  event.stopPropagation();  \n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"In this example, if you click on the \u201cClick me\u201d button, only the child event handler will be called. This is because the parent event handler stops the event from propagating any further up the DOM tree."}),"\n",(0,i.jsx)(t.h1,{id:"event-delegation",children:"Event Delegation"}),"\n",(0,i.jsx)(t.p,{children:"Event delegation is a technique used in JavaScript to handle events efficiently, especially for situations where there are many elements with similar behavior. Instead of adding event listeners to each individual element, we add a single event listener to a parent element, which then handles the events for all the child elements."}),"\n",(0,i.jsx)(t.p,{children:"This technique takes advantage of the fact that events \u201cbubble up\u201d the DOM hierarchy. When an event occurs on an element, it will first trigger any event listeners attached to that element. Then, the event will \u201cbubble up\u201d to the parent element, triggering any event listeners attached to it. This process continues up the DOM hierarchy until it reaches the root element."}),"\n",(0,i.jsxs)(t.p,{children:["With event delegation, we can add a single event listener to the parent element, and then use the ",(0,i.jsx)(t.code,{children:"**event.target**"})," property to identify the child element that actually triggered the event. We can then apply the appropriate behavior based on the target element."]}),"\n",(0,i.jsx)(t.p,{children:"For example, let\u2019s say we have a list of items that each have a delete button, and we want to remove an item when its delete button is clicked. Instead of adding an event listener to each individual delete button, we can add a single event listener to the parent element (the list), and use event delegation to identify which delete button was clicked:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<ul id="list">  \n  <li>  \n    Item 1 <button class="delete-btn">Delete</button>  \n  </li>  \n  <li>  \n    Item 2 <button class="delete-btn">Delete</button>  \n  </li>  \n  <li>  \n    Item 3 <button class="delete-btn">Delete</button>  \n  </li>  \n</ul>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const list = document.getElementById('list');  \nlist.addEventListener('click', (event) => {  \n  if (event.target.classList.contains('delete-btn')) {  \n    const listItem = event.target.closest('li');  \n    listItem.remove();  \n  }  \n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In this example, we add a single event listener to the ",(0,i.jsx)(t.code,{children:"**list**"})," element. When a click event occurs, we check if the clicked element has the class ",(0,i.jsx)(t.code,{children:"**delete-btn**"}),". If it does, we use the ",(0,i.jsx)(t.code,{children:"**closest**"})," method to find the nearest ",(0,i.jsx)(t.code,{children:"**li**"})," ancestor element and remove it from the DOM."]}),"\n",(0,i.jsx)(t.p,{children:"Event delegation has several advantages over adding event listeners to each individual element:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"It reduces the amount of event listeners needed, which can improve performance and reduce memory usage."}),"\n",(0,i.jsx)(t.li,{children:"It allows you to handle events for dynamically created elements, as you only need to add the event listener to a parent element that exists in the DOM."}),"\n",(0,i.jsx)(t.li,{children:"It simplifies your code, as you don\u2019t need to add and remove event listeners whenever elements are added or removed from the DOM."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Understanding Bubbling and Capturing is important for handling events in JavaScript. While Bubbling is the default behavior, Capturing can be useful in some scenarios. It is also important to know how to stop the propagation of an event if we don\u2019t want it to affect other elements in the DOM"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const a={},s=i.createContext(a);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);