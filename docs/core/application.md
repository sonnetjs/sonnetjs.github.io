---
sidebar_position: 2
---

# Application

The `application` instance is the main entry point for a Sonnet JS application. It is created using the `createApp` function and is responsible for managing the lifecycle of the application. The `application` instance is used to mount components, handle events, and manage the state of the application.

## Creating an application

To create a new Sonnet JS application, you can use the `createApp` function. This function returns an `application` instance that can be used to manage the application.

```typescript
import { createApp } from 'sonnet';

const app = createApp();
```

## Available methods

The `application` instance provides the following methods:

### `app.root(component: SonnetComponent)`
- This method is used to set the root component of the application. The root component is the top-level component that will be rendered in the DOM.

```typescript
import { createApp } from 'sonnet';
import Counter from './Counter';

const app = createApp();
app.root(Counter);
```

### `app.mount(selector: string)`

- This method is used to mount the application to a specific DOM element. The `selector` parameter is a CSS selector that specifies the element where the application will be mounted.

```typescript
import { createApp } from 'sonnet';
import Counter from './Counter';

const app = createApp();
app.root(Counter);
app.mount("#app");
```

### `app.unmount()`

- This method is used to unmount the application from the DOM. It removes the root component from the DOM and cleans up any event listeners or subscriptions. In most cases, you will not need to call this method directly, as Sonnet JS will handle this automatically when the application is destroyed. 

```typescript
import { createApp } from 'sonnet';
import Counter from './Counter';

const app = createApp();
app.root(Counter);
app.mount("#app");

// Unmount the application
app.unmount();
```

### `app.ssr(value?: boolean = true)

- This method is used to enable or disable server-side rendering (SSR) for the application. By default, SSR is enabled. When SSR is enabled, the application will render on the server and send the HTML to the client. When SSR is disabled, the application will render on the client only.

```typescript
import { createApp } from 'sonnet';
import Counter from './Counter';

const app = createApp();

// Disable SSR
app.ssr(false);
```

### `app.lazy()`

- This method is used to enable lazy loading for the application. When lazy loading is enabled, components will be loaded on demand, reducing the initial load time of the application.

```typescript
import { createApp } from 'sonnet';
import Counter from './Counter';

const app = createApp();
app.lazy();
```

### `app.use(plugin: SonnetPlugin)`

- This method is used to install a plugin in the application. Plugins can be used to extend the functionality of the application, add new features, or modify the behavior of existing features. 
- You can get more information about plugins in the [Plugins](./plugin.md) section.

```typescript
import { createApp, SonnetApp } from 'sonnet';
import Counter from './Counter';

const app = createApp();

// Install a plugin
app.use(MyPlugin);

function MyPlugin(app: SonnetApp) {
  // Add custom functionality to the application
}
```

### `app.initialized()`

- This method is used to initialize all the installed plugins in the application. This method should be called after all the plugins have been installed. 
- When mounting is handled by the plugin, and lazy loading is enabled, this method should be called after the `app.mount` method to ensure that all the plugins are initialized before the application is mounted.

```typescript
import { createApp, SonnetApp } from 'sonnet';
import Counter from './Counter';

const app = createApp();
app.mount("#app");

app.lazy();
// Install a plugin
app.use(MyPlugin);
// Initialize the plugins
app.initialized();
```

### `app.on(event: string, handler: Function)`

- This method is used to add an event listener to the application. The `event` parameter is the name of the event, and the `handler` parameter is the function that will be called when the event is triggered.

  * `app.on('mount', () => {})` - This event is triggered when the application is mounted to the DOM.
  * `app.on('unmount', () => {})` - This event is triggered when the application is unmounted from the DOM.

```typescript
import { createApp } from 'sonnet';
import Counter from './Counter';

const app = createApp();
app.root(Counter);
app.mount("#app");

app.on('mount', () => {
  console.log('Application mounted');
});
```

