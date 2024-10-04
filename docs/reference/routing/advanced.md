---
sidebar_position: 4
---

# Advanced

This section covers some advanced topics related to routing in Sonnet JS.

## Lazy Loading

Lazy loading is a technique used to improve the performance of web applications by loading only the required resources when they are needed. In Sonnet JS, you can use lazy loading to load components asynchronously when a route is matched.  To enable lazy loading, you can define the `component` property of the route object as a function that loads the component asynchronously using the `import()` function. For example:

```typescript
import { router, createBrowserHistory, createRouter, lazy } from '@sonnetjs/router';

export const routes = router()
  .children([
    router()
      .path('/')
      .component(lazy(() => import('./pages/Home')))
      .get(),
    router()
      .path('/about')
      .component(lazy(() => import('./pages/About')))
      .get(),
    router()
      .path('/contact')
      .component(lazy(() => import('./pages/Contact')))
      .get(),
  ])
  .get();

const history = createBrowserHistory();

export const routers = createRouter()
  .routes(routes)
  .history(history)
  .get();
```

In this example, the `component` property of each route object is defined as a function that uses the `import()` function to load the component asynchronously. When the route is matched, the component is loaded and rendered on the page.

## Nested Routes

Nested routes are routes that are defined within other routes. In Sonnet JS, you can define nested routes by using the `children` property of the `RouteObject` interface. The `children` property is an array of child route objects that define the nested routes for the parent route. For example:

```typescript
import { router, createBrowserHistory, createRouter } from '@sonnetjs/router';

export const routes = router()
  .path('/tenant')
  .component(lazy(() => import('./pages/Tenant')))
  .children([
    router()
      .path('/')
      .component(lazy(() => import('./pages/Home')))
      .get(),
    router()
      .path('/about')
      .component(lazy(() => import('./pages/About')))
      .get(),
    router()
      .path('/contact')
      .component(lazy(() => import('./pages/Contact')))
      .get(),
  ])
  .get();

const history = createBrowserHistory();

export const routers = createRouter()
  .routes(routes)
  .history(history)
  .get();
```

In this example, the `children` property of the parent route object defines two nested routes: `/tenants/about` and `/tenants/contact`. When the parent route is matched, the child routes are also matched and rendered on the page.

## Layouts

Layouts are components that define the structure of a page, such as the header, footer, and sidebar. In Sonnet JS, you can use layouts to define the common structure of your application and render the content of each route within the layout. To use layouts, you can define a `layout` property in the route object that returns the layout component. For example:

```typescript
import { router, createBrowserHistory, createRouter } from '@sonnetjs/router';

export const routes = router()
  .layout(lazy(() => import('./partials/Layout')))
  .children([
    router()
      .path('/')
      .component(lazy(() => import('./pages/Home')))
      .get(),
    router()
      .path('/about')
      .component(lazy(() => import('./pages/About')))
      .get(),
    router()
      .path('/contact')
      .component(lazy(() => import('./pages/Contact')))
      .get(),
  ])
  .get();

const history = createBrowserHistory();

export const routers = createRouter()
  .routes(routes)
  .history(history)
  .get();
```

```typescript title="Layout.ts"
import { $component, SonnetComponent } from '@sonnetjs/core';

class Layout extends SonnetComponent {
  public get() {
    return /*html */ `
    <header>
      <h1>My App</h1>
    </header>
    <main>
      ${this._children}
    </main>
    <footer>
      &copy; 2021 My App
    </footer>
    `;
  }
}

export default $component(Layout);
```

In this example, the `layout` property of the route object is defined as a function that returns the layout component. When the route is matched, the layout component is rendered on the page, and the content of the route is rendered within the layout.

## Partial Loading

Partial loading is a technique used to load only a part of a component when it is needed. In Sonnet JS, you can use partial loading to load only the required part of a component when a route is matched. To enable partial loading, you can pass the `mountedId` property to the `createRouter` function. This property is used to pass the id of the element where the router is mounted. For example:

```typescript title="router.ts"
import { router, createBrowserHistory, createRouter } from '@sonnetjs/router';

export const routes = router()
  .layout(lazy(() => import('./partials/Layout')))
  .children([
    router()
      .path('/')
      .component(lazy(() => import('./pages/Home')))
      .get(),
    router()
      .path('/about')
      .component(lazy(() => import('./pages/About')))
      .get(),
    router()
      .path('/contact')
      .component(lazy(() => import('./pages/Contact')))
      .get(),
  ])
  .get();

const history = createBrowserHistory();

export const routers = createRouter()
  .routes(routes)
  .history(history)
  .mountedId('#app-1')
  .get();
```

```typescript title="App.ts"
import { $component, SonnetComponent } from '@sonnetjs/core';
import { header } from './partials/header';

class App extends SonnetComponent {
  static script(): void {
    console.log('App script only runs once');
  }

  public get() {
    return /*html */ `
    <header>
      <h1>My App</h1>
    </header>
    <div id="app-1">
      ${this._children}
    </div>
    <footer>
      &copy; 2021 My App
    </footer>
    `;
  }
}

export default $component(App);
```

In this example, the `mountedId` property is passed to the `createRouter` function with the value `#app-1`. This tells the router to mount the router at the element with the id `app-1`. When the route is matched, only the content of the element with the id `app-1` is replaced with the component that matches the route.
