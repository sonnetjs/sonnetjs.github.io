---
sidebar_position: 4
---

# Reactivity

When you are working with vanilla JavaScript, you don't need to have any special mechanism to update the UI when the data changes. You can manually maniuplate the dom to update data. But in some cases, it becomes too complex to manage the data and the UI manually. This is where reactivity comes into play.

Reactivity is a programming paradigm that allows you to create reactive data models that automatically update the UI when the data changes. In Sonnet JS, reactivity is in developer control. You can re-render the component whenever you want by calling the `rerender` method.

## `rerender` method

The `rerender` method is used to rerender a component. It accepts a single argument: the `id` of the element you want to re-render. Invoking the `rerender` method triggers the component's `get` method, causing all elements within the specified `id` to be re-rendered.

```typescript title="Counter.ts"
import { $component, SonnetComponent } from '@sonnetjs/core';

class Counter extends SonnetComponent {
  counter = 0;

  public script() {
    const counterButton = document.getElementById(
      'counter',
    ) as HTMLButtonElement;

    counterButton.addEventListener('click', () => {
      this.counter += 1;
      this.rerender('#counter');
    });
  }

  public get() {
    return /*html*/ `
    <div id="counter-app">
      <a href="https://vitejs.dev" target="_blank">
        <img src="https://vitejs.dev/logo.svg" class="logo" alt="Vite Logo" />
      </a>
      <h1>Vite</h1>
      <div class="card">
        <button id="counter" type="button" class="btn">count is ${this.counter}</button>
      </div>
      <p class="read-the-docs">Edit src/main.ts and save to test HMR.</p>
    </div>
    `;
  }
}

export default $component(Counter);
```

In the above example, we have a simple counter component that increments the counter value whenever the button is clicked. We are using the `rerender` method to re-render the button element which have id `counter`.
