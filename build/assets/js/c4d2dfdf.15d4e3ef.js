"use strict";(self.webpackChunksonnet_docs=self.webpackChunksonnet_docs||[]).push([[6328],{9295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(4848),a=t(8453);const o={slug:"iterator-generator-and-closure-in-js",title:"Iterator, Generator and Closure in JS",authors:{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4"},tags:["javascript"]},s="Iterator, Generator and Closure in JS",i={permalink:"/blog/iterator-generator-and-closure-in-js",editUrl:"https://github.com/sonnetjs/sonnetjs.github.io/tree/main/blog/javascript/20-iterator-generator-and-closure-in-js.md",source:"@site/blog/javascript/20-iterator-generator-and-closure-in-js.md",title:"Iterator, Generator and Closure in JS",description:"JavaScript is a versatile language that supports several powerful features that make it easier to write efficient, reusable, and modular code. In this blog post, we\u2019ll take a closer look at three such features \u2014 iterators, generators, and closures.",date:"2024-05-15T13:15:30.801Z",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:3.75,hasTruncateMarker:!0,authors:[{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4",imageURL:"https://avatars.githubusercontent.com/u/58030954?v=4"}],frontMatter:{slug:"iterator-generator-and-closure-in-js",title:"Iterator, Generator and Closure in JS",authors:{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4",imageURL:"https://avatars.githubusercontent.com/u/58030954?v=4"},tags:["javascript"]},unlisted:!1,prevItem:{title:"Proxy in JS",permalink:"/blog/proxy-in-js"},nextItem:{title:"Call Stack and Callback Queue in JS",permalink:"/blog/call-stack-and-callback-queue-in-js"}},l={authorsImageUrls:[void 0]},c=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"JavaScript is a versatile language that supports several powerful features that make it easier to write efficient, reusable, and modular code. In this blog post, we\u2019ll take a closer look at three such features \u2014 iterators, generators, and closures."}),"\n",(0,r.jsx)(n.h1,{id:"iterator",children:"Iterator"}),"\n",(0,r.jsxs)(n.p,{children:["Iterators are objects that allow you to traverse through a collection of data. In JavaScript, iterators are implemented using the ",(0,r.jsx)(n.strong,{children:"Symbol.iterator"})," method. This method returns an object with a ",(0,r.jsx)(n.strong,{children:"next()"})," method. The ",(0,r.jsx)(n.strong,{children:"next()"})," method returns an object with two properties \u2014 ",(0,r.jsx)(n.strong,{children:"value"})," and ",(0,r.jsx)(n.strong,{children:"done"}),". The ",(0,r.jsx)(n.strong,{children:"value"})," property is the next value in the collection and the ",(0,r.jsx)(n.strong,{children:"done"})," property is a boolean that indicates whether the end of the collection has been reached."]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of how to use an iterator in JavaScript:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const arr = [1, 2, 3];  \nconst iterator = arr[Symbol.iterator]();  \nconsole.log(iterator.next()); // { value: 1, done: false }  \nconsole.log(iterator.next()); // { value: 2, done: false }  \nconsole.log(iterator.next()); // { value: 3, done: false }  \nconsole.log(iterator.next()); // { value: undefined, done: true }\n"})}),"\n",(0,r.jsx)(n.p,{children:"ere\u2019s an example of how to implement an iterator for an array of values:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let arr = [1, 2, 3, 4];  \nlet myIterator = {  \n  [Symbol.iterator]() {  \n    let i = 0;  \n    return {  \n      next() {  \n        if (i < arr.length) {  \n          return { value: arr[i++], done: false };  \n        } else {  \n          return { value: undefined, done: true };  \n        }  \n      }  \n    };  \n  }  \n};  \nfor (let value of myIterator) {  \n  console.log(value);  \n}\n"})}),"\n",(0,r.jsx)(n.h1,{id:"generator",children:"Generator"}),"\n",(0,r.jsxs)(n.p,{children:["Generators are functions that allow you to define an iterative algorithm by writing a single function that can maintain its own state. In JavaScript, generators are defined using the ",(0,r.jsx)(n.strong,{children:"function\\*()"})," syntax. The ",(0,r.jsx)(n.strong,{children:"yield"})," keyword is used to indicate a pause in the generator, and the ",(0,r.jsx)(n.strong,{children:"next()"})," method is used to continue the generator from where it left off."]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of how to use a generator in JavaScript:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function* countFrom(n) {  \n  while (true) {  \n    yield n++;  \n  }  \n}  \nconst counter = countFrom(1);  \nconsole.log(counter.next()); // { value: 1, done: false }  \nconsole.log(counter.next()); // { value: 2, done: false }  \nconsole.log(counter.next()); // { value: 3, done: false }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Generators are useful when you need to iterate through a large collection of data or when you need to maintain a specific state throughout the iteration process. They are also useful for creating custom iterable objects."}),"\n",(0,r.jsx)(n.h1,{id:"closure",children:"Closure"}),"\n",(0,r.jsx)(n.p,{children:"One of the most common uses of closures is to create private variables and methods. By defining variables and functions inside another function, they are not accessible from the outside, but they can still be used by functions defined within the outer function."}),"\n",(0,r.jsx)(n.p,{children:"Closures are formed when a function is defined inside another function. The inner function has access to the outer function\u2019s variables and parameters even after the outer function has returned. This allows for some interesting and powerful programming techniques."}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of a closure in JavaScript:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function outerFunction() {  \n  let outerVariable = "I am outside!";  \nfunction innerFunction() {  \n    console.log(outerVariable);  \n  }  \n  return innerFunction;  \n}  \nlet inner = outerFunction();  \ninner(); // "I am outside!"\n'})}),"\n",(0,r.jsx)(n.p,{children:"This is just one example of how closures can be used in JavaScript. They are a powerful tool for creating modular and encapsulated code."}),"\n",(0,r.jsx)(n.p,{children:"Another common use of closures is to create factory functions. A factory function is a function that returns another function, and the returned function can be customized with parameters."}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of a factory function that creates functions to add a given value to a number:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function createAdder(value) {  \n  return function(number) {  \n    return number + value;  \n  }  \n}  \nlet add5 = createAdder(5);  \nlet add10 = createAdder(10);  \nconsole.log(add5(2)); // 7  \nconsole.log(add10(2)); // 12\n"})}),"\n",(0,r.jsx)(n.p,{children:"Closures can also be used to create iterators. An iterator is an object that returns a sequence of values, typically used in a loop."}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of an iterator created using a closure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function createCounter() {  \n  let count = 0;  \nreturn function() {  \n    count++;  \n    return count;  \n  }  \n}  \nlet counter = createCounter();  \nconsole.log(counter()); // Output: 1  \nconsole.log(counter()); // Output: 2  \nconsole.log(counter()); // Output: 3\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"counter"})," is called, it returns a new value each time, starting with 1. This allows for easy iteration over a sequence of numbers without the need for a traditional loop."]}),"\n",(0,r.jsx)(n.p,{children:"In conclusion, closures are a powerful tool in JavaScript for creating modular and encapsulated code. They allow for private variables and methods, factory functions, and iterators. Understanding closures is an important part of learning advanced JavaScript programming techniques."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);