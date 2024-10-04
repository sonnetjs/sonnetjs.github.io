---
sidebar_position: 2
---

# Props

Props are used to pass data from a parent component to a child component. In Sonnet JS, there are multiple ways to pass props to a component. 

1. **Using the `props` attribute**: You can pass props to a component by setting the `props` attribute on the component instance. The `props` attribute is an object that contains key-value pairs of props.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {
  props: { title: string };

  constructor(props: { title: string }) {
    super();
    this.props = props;
  }

  get() {
    return `
      <div>
        <h1>${this.props.title}</h1>
      </div>
    `;
  }
}

const myComponent = $component(MyComponent);
```

```typescript title="App.ts"
import { SonnetComponent, $component } from 'sonnet';
import MyComponent from './MyComponent';

class App extends SonnetComponent {
  get() {
    return `
      <div>
        ${myComponent({ title: 'Hello, World!' }).get()}
      </div>
    `;
  }
}

export default $component(App);
```

2. **Using the `props` method**: You can pass props to a component by defining a `props` method that returns an object containing the props. The `props` method is called whenever the component is rendered.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {
  _props: { title: string };

  props(props?: { title: string }) {
    if(props) {
      this._props = props;
      return this;
    }
    return this._props;
  }

  get() {
    return `
      <div>
        <h1>${this.props().title}</h1>
      </div>
    `;
  }
}

export default $component(MyComponent);
```

```typescript title="App.ts"
import { SonnetComponent, $component } from 'sonnet';

class App extends SonnetComponent {
  get() {
    return `
      <div>
        ${MyComponent().props({ title: 'Hello, World!' }).get()}
      </div>
    `;
  }
}
```

3. You can also pass props directly to your get method. This is useful in case, when component does not need to store props for later use.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {
  get(props: { title: string }) {
    return `
      <div>
        <h1>${props.title}</h1>
      </div>
    `;
  }
}

export default $component(MyComponent);
```

```typescript title="App.ts"
import { SonnetComponent, $component } from 'sonnet';

class App extends SonnetComponent {
  get() {
    return `
      <div>
        ${MyComponent().get({ title: 'Hello, World!' })}
      </div>
    `;
  }
}

export default $component(App);
```

4. Another approach can be using separate method to set individual props.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {
  title: string;

  setTitle(title: string) {
    this.title = title;
    return this;
  }

  get() {
    return `
      <div>
        <h1>${this.title}</h1>
      </div>
    `;
  }
}

export default $component(MyComponent);
```

```typescript title="App.ts"
import { SonnetComponent, $component } from 'sonnet';

class App extends SonnetComponent {
  get() {
    return `
      <div>
        ${MyComponent().setTitle('Hello, World').get()}
      </div>
    `;
  }
}
```

## Built-in Props

Here are some of the built-in props that are available in SonnetComponent:

- `children`: The children prop is used to pass child components to a parent component. It can be a single child or an array of children.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {

  get() {
    return `
      <div>
        ${this._children}
      </div>
    `;
  }
}

export default $component(MyComponent);
```

```typescript title="App.ts"
import { SonnetComponent, $component } from 'sonnet';

class App extends SonnetComponent {
  get() {
    return `
      <div>
        ${MyComponent().children([
          ChildComponent1().get()
        ]).get()}
      </div>
    `;
  }
}

export default $component(App);
```

- `index`: The index prop is used to pass the index of a child component to a parent component. It is useful when rendering a list of child components.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {

  get() {
    return `
      <div>
        ${this._index}
      </div>
    `;
  }
}

export default $component(MyComponent);
```

```typescript title="App.ts"
import { SonnetComponent, $component } from 'sonnet';

class App extends SonnetComponent {
  get() {
    return `
      <div>
        ${MyComponent().index(1).get()}
      </div>
    `;
  }
}

export default $component(App);
```

- `id`: The id prop is used to pass the id of a child component to a parent component. It is useful when you want to manipulate a specific child component from the parent component.

```typescript title="MyComponent.ts"
import { SonnetComponent, $component } from 'sonnet';

class MyComponent extends SonnetComponent {

  get() {
    return `
      <div>
        ${this._id}
      </div>
    `;
  }
}

export default $component(MyComponent);
```

```typescript title="App.ts"
import { SonnetComponent, $component } from 'sonnet';

class App extends SonnetComponent {
  get() {
    return `
      <div>
        ${MyComponent().id(1).get()}
      </div>
    `;
  }
}

export default $component(App);
```