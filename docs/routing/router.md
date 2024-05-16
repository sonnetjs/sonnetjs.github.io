---
sidebar_position: 2
---

# Router

The `Router` class is used to manage the routing in Sonnet JS. It provides a simple and easy-to-use API for defining and managing routes in your application, including matching URLs to routes, rendering components based on the matched route, and navigating between routes. it provides createRouter() funcion to create instance of router class.

```typescript
import { createRouter } from '@sonnetjs/router';

const router = createRouter({
  routes: [
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
  ],
  history: createBrowserHistory(),
});
```

It takes two mandatory properties:

- `routes`: An array of route objects that define the routes for your application. This is of type RouteObject[]
- `history`: An instance of the `History` class that is used to manage the browser history according to the executing environment. This is of type BrowserHistory | MemoryHistory | HashHistory
- `window`: An optional property that is used to pass the window object to the history object. This is of type Window
- `mountedId` : An optional property that is used to pass the id of the element where the router is mounted. This is useful if you don't want to mount the whole page. 

## RouteObject

The `RouteObject` interface is used to define the structure of a route object in Sonnet JS. It has the following properties:

- `id`: An optional unique identifier for the route.
- `path`: The URL pattern for the route. This can be a string or a regular expression.
- `sensitive`: A boolean value that indicates whether the route path should be case-sensitive. Default is `false`.
- `params`: An object that contains the parameters extracted from the route path.
- `component`: A function that returns the component to render when the route is matched.
- `rootComponent`: A function that returns the root component to render when the route is matched.
- `children`: An array of child route objects that define nested routes for the route.

## Properties

The `createRouter` function returns an instance of the `Router` class, which has the following properties:

- `options`: An object that contains the options passed to the router.
- `state`: An object that contains the current state of the router.
  * `historyAction`: Action;
  * `location`: Location;
  * `initialized`: boolean;
  * `matches`: RouteObject[] | undefined;
- `routes`: An array of route objects that define the routes for the application.
- `indexedRoutes`: An object that contains the indexed routes for the application.
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
