---
sidebar_position: 3
---

# Router Instance

The `createRouter` function is used to create an instance of the `Router` class in Sonnet JS. The `Router` class is used to manage the routing in Sonnet JS. It is sonnet specific plugin for managing all the routing in the application. 

## Syntax

```typescript
import { createApp } from '@sonnetjs/core';
import { createRouter, router, createBrowserHistory } from '@sonnetjs/router';

const routers = router().children([
  router().path('/').component(Home).get(),
  router().path('/about').component(About).get(),
  router().path('/contact').component(Contact).get(),
]).get();

const router = createRouter().history(createBrowserHistory()).routes(routers).get();

const app = createApp(App).use(router).mount('#app');
```

It takes two mandatory properties:

- `routes`: router component `router()` that returns route object that can be passed inside router plugin instance.
- `history`: An instance of the `History` class that is used to manage the browser history according to the executing environment. This is of type BrowserHistory | MemoryHistory | HashHistory

## Properties

The `createRouter` function returns an instance of the `Router` class, which has the following properties:

- `options`: An object that contains the options passed to the router.
- `state`: An object that contains the current state of the router.
  * `historyAction`: Action;
  * `location`: Location;
  * `initialized`: boolean;
  * `matches`: RouteObject[] | undefined;
- `routes`: An array of route objects that define the routes for the application.
- `window`: The window object passed to the router.

## Methods

The `Router` class has the following methods:

- `subscribe(fn: RouterSubscriber)`: A method that subscribes to changes in the router state. It takes a function as an argument that is called whenever the router state changes. It returns a function that can be used to unsubscribe from the changes.
- `uninstall()`: A method that uninstalls the router and cleans up any resources used by the router.
- `navigate(to: number | To, action?: Action)`: A method that navigates to a new route. It takes two arguments:
  * `to`: The index of the route to navigate to, or an object that contains the route path and parameters.
  * `action`: The action to perform when navigating to the new route. This can be one of the following values:
    - `PUSH`: Pushes a new entry onto the history stack.
    - `REPLACE`: Replaces the current entry on the history stack.
    - `POP`: Pops the current entry from the history stack.
