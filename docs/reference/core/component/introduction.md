---
sidebar_position: 0
---

# Introduction 

A component is a reusable piece of UI that can be composed with other components to create complex user interfaces. Components in Sonnet JS are created extending the `SonnetComponent` class, which provides a simple and intuitive API for building UI components.

## Creating a component

To create a new Sonnet JS component, you can extend the `SonnetComponent` class and implement the `get` method. The `get` method is responsible for returning the HTML representation of the component.

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

```typescript title="App.ts"
import MyComponent from './MyComponent';

class App extends SonnetComponent {
  get() {
    return `
      <div>
        ${MyComponent().get()}
      </div>
    `;
  }
}

export default $component(App);
```

In the example above, we have created a new component called `MyComponent` that renders a simple heading element. The `get` method returns the HTML representation of the component, which will be rendered in the DOM.

## Functional components

If your components only need to render static content, you can use functional components instead of extending the `SonnetComponent` class. Functional components are simple functions that return the HTML representation of the component.

```typescript title="MyComponent.ts"
export function MyComponent() {
  return `
    <div>
      <h1>Hello, World!</h1>
    </div>
  `;
}
```

```typescript title="App.ts"
import { MyComponent } from './MyComponent';

export function App() {
  return `
    <div>
      ${MyComponent()}
    </div>
  `;
}
```

In the example above, we have created a functional component called `MyComponent` that renders a simple heading element. Functional components are useful for creating simple components that do not require any state or lifecycle methods.

## $component

The `$component` function is a higher-order function that takes a component class as an argument and returns an instance of the component. This allows you to create new instances of the component without using the `new` keyword.

:::info Note
In case of functional components, you can directly call the function to render the component without using the `$component` function.
:::
