---
sidebar_position: 1
---

# Router Component

This is sonnet compatible router component. It is used to manage the routing in Sonnet JS. It returns route object that can be passed inside router plugin instance. We can pass page path, content, and layout inside the router component.

## Syntax

```javascript
import { router } from '@sonnetjs/router';

router().path('/').component(Home).get();

// with layout

router().path('/').layout(MainLayout).component(Home).get();
```

## Properties

The `router` component has the following properties:

- `path`: The URL pattern for the route. This can be a string or a regular expression.
- `component`: A function that returns the component to render when the route is matched.
- `layout`: A function that returns the root component to render when the route is matched.
- `children`: An array of child route objects that define nested routes for the route.
- `get`: A method that returns the route object.

## Children Route

The `router` component can have children route objects that define nested routes for the route. The children route objects have the same properties as the parent route object.

```javascript
import { router } from '@sonnetjs/router';

router().path('/auth').component(Home).children([
  router().path('/login').component(About).get(),
  router().path('/register').component(Contact).get(),
]).get();

// with layout

router().path('/auth').layout(AuthLayout).children([
  router().path('/login').component(Login).get(),
  router().path('/register').component(Register).get(),
]).get();
```

## Dynamic Route

The `router` component can have dynamic route objects that define dynamic routes for the route. The dynamic route objects have the same properties as the parent route object.

```javascript
import { router } from '@sonnetjs/router';

router().path('/user/:id').component(Home).get();
```
