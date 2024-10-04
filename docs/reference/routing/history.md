---
sidebar_position: 2
---

# History

The `History` class is used to manage the browser history in Sonnet JS. It provides a simple and easy-to-use API for interacting with the browser history, including navigating to different URLs, listening for changes to the history stack, and programmatically manipulating the history stack.

## Types

There are three main types of history according to the executing environment:

- `BrowserHistory`: This is the default history type that is used in web browsers. It uses the HTML5 History API to manage the browser history stack.

```typescript
const options = {
  window: window, // optional
}

const history = createBrowserHistory(options);
```

- `MemoryHistory`: This is a history type that is used for testing and server-side rendering. It does not interact with the browser history stack and is used to simulate browser history in a non-browser environment.

```typescript
const options = {
  initialEntries: ["/"], // optional
  initialIndex: 0, // optional
}

const history = createMemoryHistory(options);
```

- `HashHistory`: This is a history type that is used to support older browsers that do not support the HTML5 History API. It uses the hash portion of the URL to manage the browser history stack.

```typescript
const options = {
  window: window, // optional
}

const history = createHashHistory(options);
```


