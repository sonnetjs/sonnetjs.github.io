---
sidebar_position: 0
---

# Setup

Routing in one of the most important parts of any web application. It is the mechanism that allows you to map URLs to controllers and actions. This is a very important concept to understand because it is the foundation of how web applications work. Sonnet JS provides a very simple and easy to use routing system that allows you to define routes using a simple and easy to understand syntax.

## Installation

To get started with routing in Sonnet JS, you need to install the `@sonnetjs/router` package. You can do this by running the following command:

```bash
npm install @sonnetjs/router
```

## Basic Usage

To get started with routing in Sonnet JS, you need to create a new instance of the `Router` class using the `createRouter` function. This function takes an object with the following properties: 

- `routes`: An array of route objects that define the routes for your application.
- `history`: An instance of the `History` class that is used to manage the browser history.

```typescript title="router.ts"
import {
  RouteObject,
  createRouter,
  createBrowserHistory,
} from '@sonnetjs/router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const routes: RouteObject[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

const history = createBrowserHistory();

export const router = createRouter({
  routes,
  history,
});
```

In the example above, we define an array of route objects that map URLs to components. Each route object has a `path` property that defines the URL pattern for the route, and a `component` property that is a function that returns the component to render when the route is matched. We then create a new instance of the `Router` class using the `createRouter` function and pass in the routes and history object.

This router instance is then passed to the app component as a plugin:

```typescript title="main.ts"
import { createApp } from '@sonnetjs/core';
import App from './App';
import { router } from './router';

const app = createApp();
app.root(App);
app.use(router);
app.lazy();
app.mount('#app');
app.initialized();
```

Now, when you navigate to the root URL of your application, the `Home` component will be rendered. If you navigate to `/about`, the `About` component will be rendered, and so on.
