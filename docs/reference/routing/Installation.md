---
sidebar_position: 0
---

# Installation

Routing in one of the most important parts of any web application. It is the mechanism that allows you to map URLs to controllers and actions. This is a very important concept to understand because it is the foundation of how web applications work. Sonnet JS provides a very simple and easy to use routing system that allows you to define routes using a simple and easy to understand syntax.

To get started with routing in Sonnet JS, you need to install the `@sonnetjs/router` package. You can do this by running the following command:

```bash
npm install @sonnetjs/router
```

## Elements

There are three main elements that make up a route in Sonnet JS:

### Component

A sonnet component is a simple object that contains the page path, content, and layout.

```javascript
router().path('/').component(Home).get();
```

### History

The history object is used to keep track of the current route. It is a simple object that contains the current route and the previous route.

```javascript
const history = createBrowserHistory();
```

### Create Router instance

This is the plugin of routing in Sonnet JS. You can create a new instance of the Router class by calling the `createRouter()` function.

```javascript
const routers = createRouter().history(history).routes(
  router().children([
    router().path('/').component(Home).get(),
    router().path('/about').component(About).get(),
    router().path('/contact').component(Contact).get(),
  ]).get()
)

const app = createApp(App).use(routers).mount('#app');
```

Let's explore each of these elements in more detail in next sections.
