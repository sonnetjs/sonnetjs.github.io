"use strict";(self.webpackChunksonnet_docs=self.webpackChunksonnet_docs||[]).push([[7810],{3003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(4848),s=t(8453);const a={slug:"object-in-js",title:"Object in JS",authors:{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4"},tags:["javascript"]},r="Object in JS",i={permalink:"/blog/object-in-js",editUrl:"https://github.com/sonnetjs/sonnetjs.github.io/tree/main/blog/javascript/9-object-in-js.md",source:"@site/blog/javascript/9-object-in-js.md",title:"Object in JS",description:"In JavaScript, an object is a collection of key-value pairs, where the keys are strings (or symbols) and the values can be of any type. It is an unordered data structure that can hold primitive data types, arrays, and even functions. Objects are used to represent real-world entities, and they provide a way to organize and store related data.",date:"2024-05-15T13:15:30.615Z",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:9.12,hasTruncateMarker:!0,authors:[{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4",imageURL:"https://avatars.githubusercontent.com/u/58030954?v=4"}],frontMatter:{slug:"object-in-js",title:"Object in JS",authors:{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4",imageURL:"https://avatars.githubusercontent.com/u/58030954?v=4"},tags:["javascript"]},unlisted:!1,prevItem:{title:"Object Methods in JS",permalink:"/blog/object-methods-in-js"},nextItem:{title:"Array in JS",permalink:"/blog/array-in-js"}},c={authorsImageUrls:[void 0]},l=[];function d(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In JavaScript, an object is a collection of key-value pairs, where the keys are strings (or symbols) and the values can be of any type. It is an unordered data structure that can hold primitive data types, arrays, and even functions. Objects are used to represent real-world entities, and they provide a way to organize and store related data."}),"\n",(0,o.jsx)(n.h1,{id:"creating-objects-in-javascript",children:"Creating Objects in JavaScript"}),"\n",(0,o.jsx)(n.p,{children:"There are several ways to create objects in JavaScript:"}),"\n",(0,o.jsx)(n.h1,{id:"object-literals",children:"Object Literals"}),"\n",(0,o.jsx)(n.p,{children:"The most common way to create an object is by using an object literal. An object literal is a comma-separated list of key-value pairs enclosed in curly braces. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let person = {  \n  name: "John",  \n  age: 30,  \n  address: {  \n    street: "123 Main St",  \n    city: "New York",  \n    state: "NY"  \n  }  \n};\n'})}),"\n",(0,o.jsx)(n.h1,{id:"using-the-object-constructor",children:"Using the Object Constructor"}),"\n",(0,o.jsx)(n.p,{children:"Another way to create objects is by using the Object constructor. This method is less commonly used but can be useful in certain situations. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let person = new Object();  \nperson.name = "John";  \nperson.age = 30;  \nperson.address = {  \n  street: "123 Main St",  \n  city: "New York",  \n  state: "NY"  \n};\n'})}),"\n",(0,o.jsx)(n.h1,{id:"using-objectcreate",children:"Using Object.create()"}),"\n",(0,o.jsx)(n.p,{children:"A third way to create objects is by using the Object.create() method. This method creates a new object and sets its prototype to an existing object. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let person = Object.create(null);  \nperson.name = "John";  \nperson.age = 30;  \nperson.address = {  \n  street: "123 Main St",  \n  city: "New York",  \n  state: "NY"  \n};\n'})}),"\n",(0,o.jsx)(n.h1,{id:"accessing-object-properties",children:"Accessing Object Properties"}),"\n",(0,o.jsx)(n.p,{children:"You can access object properties using dot notation or bracket notation. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let person = {  \n  name: "John",  \n  age: 30  \n};  \nconsole.log(person.name); // "John"  \nconsole.log(person["age"]); // 30\n'})}),"\n",(0,o.jsx)(n.h1,{id:"modifying-object-properties",children:"Modifying Object Properties"}),"\n",(0,o.jsx)(n.p,{children:"You can modify object properties by simply assigning a new value to them. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let person = {  \n  name: "John",  \n  age: 30  \n};  \nperson.age = 40;  \nconsole.log(person.age); // 40\n'})}),"\n",(0,o.jsx)(n.h1,{id:"adding-object-properties",children:"Adding Object Properties"}),"\n",(0,o.jsx)(n.p,{children:"You can add new properties to an object by simply assigning a value to a new key. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let person = {  \n  name: "John",  \n  age: 30  \n};  \nperson.address = {  \n  street: "123 Main St",  \n  city: "New York",  \n  state: "NY"  \n};  \nconsole.log(person.address); // { street: "123 Main St", city: "New York", state: "NY" }\n'})}),"\n",(0,o.jsx)(n.h1,{id:"characteristics-of-keys-and-values-in-js-objects",children:"Characteristics of Keys and Values in JS Objects"}),"\n",(0,o.jsx)(n.p,{children:"The characteristics of keys and values in JavaScript objects are as follows:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Keys must be unique within an object. If you try to add a new property with an existing key, the value of the existing property will be overwritten with the new value."}),"\n",(0,o.jsxs)(n.li,{children:["Keys are always converted to strings. If you use a non-string value as a key, it will be automatically converted to a string using the ",(0,o.jsx)(n.code,{children:"**toString()**"})," method."]}),"\n",(0,o.jsx)(n.li,{children:"Values can be of any type, including strings, numbers, booleans, objects, arrays, and functions."}),"\n",(0,o.jsxs)(n.li,{children:["Values can be accessed using dot notation (",(0,o.jsx)(n.code,{children:"**object.property**"}),") or bracket notation (",(0,o.jsx)(n.code,{children:'**object["property"]**'}),"). Dot notation can only be used if the property name is a valid identifier (i.e., it does not contain spaces or special characters)."]}),"\n",(0,o.jsxs)(n.li,{children:["Values can be added or modified at any time by assigning a new value to a property: ",(0,o.jsx)(n.code,{children:"**object.property = value**"})," or ",(0,o.jsx)(n.code,{children:'**object["property"] = value**'}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Values can also be removed using the ",(0,o.jsx)(n.code,{children:"**delete**"})," operator: ",(0,o.jsx)(n.code,{children:"**delete object.property**"})," or ",(0,o.jsx)(n.code,{children:'**delete object["property"]**'}),"."]}),"\n",(0,o.jsx)(n.li,{children:"In JavaScript, it is generally not recommended to use spaces in the name of a key in an object. While it is possible to use spaces in key names using bracket notation, it can make it harder to work with the object, as you would always have to use bracket notation to access the property."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For example, let\u2019s say you have an object with a key called \u201cfirst name\u201d and you try to access it using dot notation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'const person = {  \n  "first name": "John",  \n  age: 30  \n};  \nconsole.log(person.first name); // Outputs: undefined\n'})}),"\n",(0,o.jsx)(n.p,{children:"This code would result in an error because dot notation does not allow for spaces in the property name. Instead, you would have to use bracket notation to access the \u201cfirst name\u201d property:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'console.log(person["first name"]); // Outputs: "John"\n'})}),"\n",(0,o.jsx)(n.p,{children:"This can make the code more difficult to read and can introduce errors if you forget to use bracket notation when accessing the property."}),"\n",(0,o.jsx)(n.p,{children:"It is generally recommended to use camelCase or snake_case for key names in JavaScript objects, as they are easier to read and less error-prone."}),"\n",(0,o.jsx)(n.h1,{id:"forin-loop",children:"for\u2026in loop"}),"\n",(0,o.jsx)(n.p,{children:"The for\u2026in loop is a useful tool for iterating over an object\u2019s properties. This loop allows you to loop through all of the object\u2019s properties and perform some action on each one. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let person = {  \n  name: "John",  \n  age: 30,  \n  address: {  \n    street: "123 Main St",  \n    city: "New York",  \n    state: "NY"  \n  }  \n};  \nfor (let prop in person) {  \n  console.log(prop + ": " + person[prop]);  \n}  \n// Output:  \n// name: John  \n// age: 30  \n// address: [object Object]\n'})}),"\n",(0,o.jsx)(n.h1,{id:"object-reference",children:"Object Reference"}),"\n",(0,o.jsx)(n.p,{children:"When you create two empty objects in JavaScript, they are not equal to each other, even though they are both objects."}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const person1 = {};  \nconst person2 = {};  \nconsole.log(person1 == person2); // false\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This is because ",(0,o.jsx)(n.code,{children:"**person1**"})," and ",(0,o.jsx)(n.code,{children:"**person2**"})," are both references to different objects in memory, even though the objects themselves have no properties or values."]}),"\n",(0,o.jsx)(n.p,{children:"So, objects are reference types, which means that when you assign an object to a variable or pass it as an argument to a function, you are actually passing a reference to the object in memory, rather than creating a new copy of the object."}),"\n",(0,o.jsx)(n.p,{children:"Here\u2019s an example of how object references work in JavaScript:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const person1 = { name: "John", age: 30 };  \nconst person2 = person1;  \n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To make a copy of an object in JavaScript, you can use the spread operator or the ",(0,o.jsx)(n.code,{children:"**Object.assign()**"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// Using the spread operator  \nconst person1 = { name: "John", age: 30 };  \nconst person2 = { ...person1 };  \nperson2.age = 31;  \nconsole.log(person1.age); // 30\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Object.assign()"})," works in this way:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const user = {};  \n// Using Object.assign() to add a "name" property to the "user" object  \nObject.assign(user, { name: "john" });  \nconsole.log(user); // { name: "john" }\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Object.assign"})," can also be used to copy an object:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// Using Object.assign()  \nconst person3 = { name: "John", age: 30 };  \nconst person4 = Object.assign({}, person3);  \nperson4.age = 31;  \nconsole.log(person3.age); // 30\n'})}),"\n",(0,o.jsx)(n.h1,{id:"garbage-collection",children:"Garbage Collection"}),"\n",(0,o.jsx)(n.p,{children:"Garbage collection is the process by which JavaScript automatically frees up memory that is no longer being used by an object. When an object is created, it is allocated a block of memory on the heap. When the object is no longer needed, the memory is freed up so that it can be used by other objects."}),"\n",(0,o.jsx)(n.p,{children:"JavaScript uses a form of garbage collection called reference counting. This means that each object keeps track of how many other objects are referencing it. When the reference count drops to zero, the object is no longer needed and its memory can be freed up."}),"\n",(0,o.jsx)(n.p,{children:"While garbage collection is a useful feature of JavaScript, it can also have some downsides. For example, managing memory can be slower than in other languages, as the garbage collector has to constantly monitor the reference counts of objects. Additionally, the garbage collector can sometimes be too aggressive, causing performance issues in some cases."}),"\n",(0,o.jsx)(n.p,{children:"Despite these limitations, garbage collection is still an important feature of JavaScript that helps developers to write more efficient and reliable code."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// user is reference to object  \nlet user = {  \n\tname: "John"  \n}  \n// now reference is overridden  \nuser = null;  \n// there is no variable pointing to {name: "John"}, it will be in garbage collection\n'})}),"\n",(0,o.jsx)(n.h1,{id:"optional-chaining",children:"Optional Chaining"}),"\n",(0,o.jsxs)(n.p,{children:["Optional chaining is a feature in JavaScript that allows you to safely access deeply nested properties of an object without worrying about the intermediate properties being ",(0,o.jsx)(n.code,{children:"**null**"})," or ",(0,o.jsx)(n.code,{children:"**undefined**"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const user = {  \n  name: "John",  \n  address: {  \n    street: "123 Main St",  \n    city: "Anytown",  \n    state: "CA",  \n    zip: "12345"  \n  }  \n};  \n// Using optional chaining to access nested properties  \nconst zipCode = user?.address?.zip; // "12345"  \n// Trying to access a non-existent property with optional chaining  \nconst phone = user?.contact?.phone; // undefined\n'})}),"\n",(0,o.jsx)(n.h1,{id:"symbol-type",children:"Symbol Type"}),"\n",(0,o.jsxs)(n.p,{children:["In JavaScript, ",(0,o.jsx)(n.code,{children:"**Symbol**"})," is a primitive data type that is used to create unique identifiers for objects. Symbols are created using the ",(0,o.jsx)(n.code,{children:"**Symbol()**"})," constructor function, which returns a new, unique symbol each time it is called."]}),"\n",(0,o.jsx)(n.p,{children:"Here is an example of creating and using symbols with an object:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const name = Symbol('name');  \nconst age = Symbol('age');  \nconst person = {  \n  [name]: 'John',  \n  [age]: 30,  \n  gender: 'male'  \n};  \nconsole.log(person[name]); // \"John\"  \nconsole.log(person[age]); // 30  \nconsole.log(person.gender); // \"male\"\n"})}),"\n",(0,o.jsx)(n.p,{children:"We can access the values of the symbol properties using the square bracket notation with the symbol as the key. Note that we cannot access the symbol properties using dot notation, as symbols are not valid property names in that syntax."}),"\n",(0,o.jsx)(n.p,{children:"Symbols are often used to create private or hidden properties in objects, as they cannot be accessed or modified from outside the object. They are also useful for creating non-colliding property names in cases where multiple objects might share the same key name."}),"\n",(0,o.jsx)(n.h1,{id:"symboliterator",children:"Symbol.iterator"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"**Symbol.iterator**"})," is a built-in symbol in JavaScript that is used to define the default iterator for an object. An iterator is an object that provides a way to iterate over the elements of a collection one at a time."]}),"\n",(0,o.jsxs)(n.p,{children:["To use ",(0,o.jsx)(n.code,{children:"**Symbol.iterator**"}),", you define a method on an object that returns an iterator object. This method is called when the object is used in a ",(0,o.jsx)(n.code,{children:"**for...of**"})," loop or when the ",(0,o.jsx)(n.code,{children:"**next()**"})," method is called on the iterator object."]}),"\n",(0,o.jsxs)(n.p,{children:["Here is an example of using ",(0,o.jsx)(n.code,{children:"**Symbol.iterator**"})," to define an iterator for an array:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const arr = [1, 2, 3];  \narr[Symbol.iterator] = function() {  \n  let i = 0;  \n  return {  \n    next: () => {  \n      if (i < this.length) {  \n        return { value: this[i++], done: false };  \n      } else {  \n        return { done: true };  \n      }  \n    }  \n  };  \n};  \nfor (const num of arr) {  \n  console.log(num);  \n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that the ",(0,o.jsx)(n.code,{children:"**Symbol.iterator**"})," method can be defined on any object, not just arrays. This allows you to define custom iteration behavior for any object that you create."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const obj = { from: 1, to: 3 };  \nobj[Symbol.iterator] = function() {  \n  let current = this.from;  \n  const last = this.to;  \n   return {  \n    next: () => {  \n      if (current <= last) {  \n        return { value: current++, done: false };  \n      } else {  \n        return { done: true };  \n      }  \n    }  \n  };  \n};  \nconst arr = [...obj]; // [1, 2, 3]\n"})}),"\n",(0,o.jsx)(n.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"In JavaScript, objects are a powerful data structure that can be used to represent complex entities. They provide a way to organize and store related data, and can be easily accessed, modified, and extended. Understanding how to create and work with objects is an essential skill for any JavaScript developer."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(6540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);