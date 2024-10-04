---
sidebar_position: 1
---

# Methods

Methods are functions that are defined inside a class and are used to perform some action or computation. In Sonnet JS, methods are used to define the behavior of a component, such as handling interactivity, fetching data, or updating the UI.

Here are some common methods that you can define in a Sonnet JS component:

## `get()`

The `get` method is responsible for returning the HTML representation of the component. This method is called whenever the component needs to be rendered in the DOM.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {
  get() {
    return `
      <div>
        <h1>Hello, World!</h1>
      </div>
    `;
  }
}

export default $component(MyComponent);
```

:::danger NOTE  
The `get` method is only responsible for returning the HTML representation of the component. It should not contain any logic for handling user interactions, fetching data, or browser APIs.
:::

## `head()`

The `head` method is used to define the `<head>` section of the component. You can use this method to set the title, meta tags, stylesheets, and other metadata for the component. The `head` method should return a string containing the HTML representation of the `<head>` section would be appended to the `<head>` tag of the document.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {
  head() {
    return `
      <title>Hello, World!</title>
      <meta name="description" content="A simple Sonnet JS component">
    `;
  }

  get() {
    return `
      <div>
        <h1>Hello, World!</h1>
      </div>
    `;
  }
}

export default $component(MyComponent);
```

## `static head()`

The `static head` method is used to define static metadata for the component. This method is called only once when the component is first loaded and is not called again when the component is re-rendered. You can use this method to define global metadata that applies to all instances of the component.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {
  static head() {
    return `
      <title>Hello, World!</title>
      <meta name="description" content="A simple Sonnet JS component">
    `;
  }

  get() {
    return `
      <div>
        <h1>Hello, World!</h1>
      </div>
    `;
  }
}

export default $component(MyComponent);
```

## `script()`

The `script` method is used to define the `<script>` section of the component. You can use this method to include JavaScript code that will be executed when the component is rendered in the DOM. This method does not return anything, but you can use it to define event listeners, fetch data, or interact with the browser APIs.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {
  script() {
    document.querySelector('h1').addEventListener('click', () => {
      alert('Hello, World!');
    });
  }

  get() {
    return `
      <div>
        <h1>Hello, World!</h1>
      </div>
    `;
  }
}

export default $component(MyComponent);
```

## `static script()`

The `static script` method is used to define static JavaScript code that will be executed when the component is loaded. This method is called only once when the component is first loaded and is not called again when the component is re-rendered. You can use this method to define global variables, utility functions, or other static code that does not depend on the component's state. This method is also useful when you want to register event listeners or set up the component's initial state.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {
  static script() {
    console.log('Component loaded');
  }

  get() {
    return `
      <div>
        <h1>Hello, World!</h1>
      </div>
    `;
  }
}

export default $component(MyComponent);
```

## Other methods

These above mentioned methods are handled by Sonnet JS automatically. However, you can define other methods in your component to handle custom logic, data fetching, or other actions. You can call these methods from the `get` method or other lifecycle methods to perform specific actions.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {
  fetchData() {
    // Fetch data from an API
  }

  script() {
    this.fetchData();
  }

  get() {
    return `
      <div>
        <h1>Hello, World!</h1>
      </div>
    `;
  }
}

export default $component(MyComponent);
```

In the example above, we have defined a custom method called `fetchData` that fetches data from an API. We then call this method from the `script` method to fetch the data when the component is rendered in the DOM.
