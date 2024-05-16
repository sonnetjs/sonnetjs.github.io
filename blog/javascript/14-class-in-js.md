---
slug: class-in-js
title: "Class in JS"
authors:
  name: Talha Mujahid
  title: Software Engineer
  url: https://github.com/htmujahid
  image_url: https://avatars.githubusercontent.com/u/58030954?v=4
tags: [javascript]
---

Class in JS
===========

Object-Oriented Programming (OOP) is a popular paradigm used in modern programming languages to organize code and data into reusable and modular components. JavaScript, although originally designed as a scripting language, has gained significant support for OOP. In this blog, we’ll discuss the principles of OOP in JavaScript and how to use them effectively.
<!-- truncate -->

Defining a Class
================

The syntax for defining a class in JavaScript is as follows:

```js
class MyClass {  
  constructor(arg1, arg2) {  
    this.property1 = arg1;  
    this.property2 = arg2;  
  }  
method1() {  
    // Method code here  
  }  
  method2() {  
    // Method code here  
  }  
}
```

Once you have defined a class, you can create an instance of the class using the `**new**` keyword:

```js
const myInstance = new MyClass('value1', 'value2');
```

Properties
==========

In JavaScript classes, properties are defined in the constructor method and are assigned to the `**this**` keyword, which refers to the instance of the class. Here's an example of defining properties inside a class:

```js
class Person {  
  constructor(name, age) {  
    this.name = name;  
    this.age = age;  
  }  
get occupation() {  
    return 'Software Developer';  
  }  
}  
const john = new Person('John', 30);  
console.log(john.occupation); // 'Software Developer'
```

Methods
=======

In JavaScript classes, methods are functions that are defined inside the class body and are available on instances of the class. Here’s an example of defining methods inside a class:

```js
class Person {  
  constructor(name, age) {  
    this.name = name;  
    this.age = age;  
  }  
sayHello() {  
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);  
  }  
}  
const john = new Person('John', 30);  
john.sayHello(); // "Hello, my name is John and I am 30 years old."
```

Static Methods and Properties
=============================

In JavaScript classes, static methods and properties are defined using the `**static**` keyword. Static methods and properties are associated with the class itself, rather than with instances of the class. Here's an example of defining static methods and properties in a class:

```
class Person {  
  constructor(name, age) {  
    this.name = name;  
    this.age = age;  
  }  
sayHello() {  
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);  
  }  
  static create(name, age) {  
    return new Person(name, age);  
  }  
  static defaultOccupation = 'Software Developer';  
}  
console.log(Person.defaultOccupation); // "Software Developer"  
const john = Person.create('John', 30);  
john.sayHello(); // "Hello, my name is John and I am 30 years old."
```

Constructor Parameters
======================

In JavaScript classes, the `**constructor**` method is a special method that is called when an instance of the class is created. The `**constructor**` method is used to initialize the instance properties of the class.

```
class Person {  
  constructor(name, age) {  
    this.name = name;  
    this.age = age;  
  }  
}
```

You can also use the `**constructor**` method to perform additional setup tasks or to check the validity of the arguments. For example:

```
class Person {  
  constructor(name, age) {  
    if (typeof name !== 'string') {  
      throw new TypeError('Name must be a string');  
    }  
if (typeof age !== 'number') {  
      throw new TypeError('Age must be a number');  
    }  
    this.name = name;  
    this.age = age;  
  }  
  sayHello() {  
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);  
  }  
}
```

Inheritance
===========

Inheritance is an important concept in object-oriented programming that allows you to create new classes based on existing classes. In JavaScript, you can use the `**extends**` keyword to create a subclass that inherits from a superclass.

```
class Animal {  
  constructor(name) {  
    this.name = name;  
  }  
speak() {  
    console.log(`${this.name} makes a noise.`);  
  }  
}  
class Dog extends Animal {  
  speak() {  
    console.log(`${this.name} barks.`);  
  }  
}  
class Cat extends Animal {  
  speak() {  
    console.log(`${this.name} meows.`);  
  }  
}  
const dog = new Dog('Fido');  
const cat = new Cat('Whiskers');  
dog.speak(); // "Fido barks."  
cat.speak(); // "Whiskers meows."
```

Inheritance in JavaScript allows you to reuse code and create a hierarchy of classes with different levels of specificity. You can also extend from built-in class.

```
class MyArray extends Array {  
  constructor(...args) {  
    super(...args);  
  }  
getFirst() {  
    return this[0];  
  }  
  getLast() {  
    return this[this.length - 1];  
  }  
}  
const myArray = new MyArray(1, 2, 3, 4, 5);  
console.log(myArray.getFirst()); // 1  
console.log(myArray.getLast()); // 5  
console.log(myArray instanceof Array); // true  
console.log(myArray instanceof MyArray); // true
```

Overriding Methods
==================

In object-oriented programming, method overriding is the process of defining a method in a subclass that has the same name and signature as a method in its superclass. The purpose of overriding a method is to change its implementation in the subclass to provide specialized behavior.

In JavaScript, you can override a method in a subclass by simply defining a new method with the same name as the method you want to override. Here’s an example:

```
class Animal {  
  speak() {  
    console.log('The animal makes a noise.');  
  }  
}  
class Dog extends Animal {  
  speak() {  
    console.log('The dog barks.');  
  }  
}  
const dog = new Dog();  
dog.speak(); // "The dog barks."
```

Calling Superclass Methods
==========================

The `**super**` keyword is used in JavaScript to access and call functions or methods in a parent or superclass.

When you define a class that extends another class, you can use the `**super**` keyword to call the constructor and methods of the parent class. Here's an example:

```
class Animal {  
  constructor(name) {  
    this.name = name;  
  }  
speak() {  
    console.log(`${this.name} makes a noise.`);  
  }  
}  
class Dog extends Animal {  
  constructor(name) {  
    super(name);  
  }  
  speak() {  
    super.speak();  
    console.log(`${this.name} barks.`);  
  }  
}  
const dog = new Dog('Fido');  
dog.speak(); // "Fido makes a noise." "Fido barks."
```

Private and Protected Fields
============================

JavaScript does not have built-in support for private and protected properties in classes, but the `**#**` symbol can be used to denote private fields in more recent versions of JavaScript (ES2022 or later).

In JavaScript, protected properties are typically denoted by prefixing their names with an underscore, like `**_name**` or `**_age**`. This convention indicates that the property should not be accessed or modified from outside the class, but can still be accessed and modified by subclasses.

```
class Person {  
  #name;  
  _age;  
constructor(name, age) {  
    this.#name = name;  
    this._age = age;  
  }  
  sayHello() {  
    console.log(`Hello, my name is ${this.#name} and I am ${this._age} years old.`);  
  }  
}  
class Employee extends Person {  
  #salary;  
  constructor(name, age, salary) {  
    super(name, age);  
    this.#salary = salary;  
  }  
  sayHello() {  
    console.log(`Hello, my name is ${this.#name} and I am ${this._age} years old. My salary is ${this.#salary}.`);  
  }  
}  
const john = new Person('John', 30);  
console.log(john.#name); // This will cause a syntax error since #name is private  
console.log(john._age); // "30" - this is technically allowed but goes against the convention of protected properties  
const bob = new Employee('Bob', 35, 50000);  
console.log(bob.#salary); // This will cause a syntax error since #salary is private  
bob.sayHello(); // "Hello, my name is Bob and I am 35 years old. My salary is 50000."
```

Getter and Setter
=================

Getters and setters are methods in JavaScript classes that allow you to control access to an object’s properties.

A getter is a method that gets the value of a property. It is defined using the `**get**` keyword and can be used to access a property without directly accessing it. A setter is a method that sets the value of a property. It is defined using the `**set**` keyword and can be used to set the value of a property using a function call. Here's an example:

```
class Person {  
  constructor(name) {  
    this.#name = name;  
  }  
get name() {  
    return this.#name.toUpperCase();  
  }  
  set name(newName) {  
    this.#name = newName.toLowerCase();  
  }  
}  
const person = new Person('John');  
console.log(person.name); // "JOHN"  
person.name = 'Jane';  
console.log(person.name); // "jane"
```

`instanceof` method
===================

`**instanceof**` is a built-in operator in JavaScript that allows you to check whether an object is an instance of a particular class or constructor function. It returns a boolean value indicating whether the object is an instance of the specified class.

```
class Person {  
  constructor(name) {  
    this.name = name;  
  }  
}  
class Student extends Person {  
  constructor(name, grade) {  
    super(name);  
    this.grade = grade;  
  }  
}  
const person = new Person('John');  
const student = new Student('Jane', 10);  
console.log(person instanceof Person); // true  
console.log(person instanceof Student); // false  
console.log(student instanceof Person); // true  
console.log(student instanceof Student); // true
```

Conclusion
==========

Classes in JavaScript provide a way to define objects with properties and methods. They are a powerful tool for organizing code and creating reusable components. With the ability to inherit from other classes, JavaScript classes provide a flexible and extensible programming model.