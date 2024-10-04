---
sidebar_position: 3
---

# Server-Side Rendering (SSR)

In this section, we'll add server-side rendering (SSR) to our Sonnet JS application. SSR can improve initial page load times and is beneficial for SEO.

## Creating a New SSR Project

To get started with SSR in Sonnet JS, it's best to create a new project using the SSR template:

1. Open your terminal and run the following command:

```bash
npx create-sonnet-project
```

2. When prompted, choose the following options:

```
Sonnet JS: A frontend framework

✔ Project name: … sonnet-ssr-project
✔ Select a template › SSR
✔ Install Sonnet Router? › No
✔ Add TypeScript? … Yes
```

3. Navigate to the new project directory and install dependencies:

```bash
cd sonnet-ssr-project
npm install
```

## Understanding the SSR Setup

The SSR template provides several important files:

1. `server.js`: This is the main server file that handles both development and production environments.
2. `src/entry-server.ts`: This file is responsible for rendering the application on the server.
3. `src/entry-client.ts`: This file handles client-side hydration.

Let's take a closer look at each of these files:

### server.js

This file sets up an Express server that serves your application. It handles both development (using Vite) and production environments.

### src/entry-server.ts

```typescript title="src/entry-server.ts"
import App from './App';

export async function render() {
  const html = await App().get();
  return { html };
}
```

This file exports a `render` function that returns the HTML for your application.

### src/entry-client.ts

```typescript title="src/entry-client.ts"
import './style.css';
import { createApp } from '@sonnetjs/core';
import App from './App';

const app = createApp();
app.root(App);
app.ssr();
app.mount('#app');
```

This file sets up the client-side application and enables SSR mode.

## Creating Components

Let's create a simple component to demonstrate SSR. Update `src/Counter.ts`:

```typescript title="src/Counter.ts"
import { $component, SonnetComponent } from '@sonnetjs/core';

class Counter extends SonnetComponent {
  counter = 0;

  public script() {
    const counterButton = document.getElementById(
      'counter',
    ) as HTMLButtonElement;
    counterButton.addEventListener('click', () => {
      this.counter += 1;
      counterButton.innerText = `count is ${this.counter}`;
    });
  }

  public get() {
    return /*html*/ `
    <div>
      <h1>Sonnet JS Counter</h1>
      <div class="card">
        <button id="counter" type="button" class="btn">count is ${this.counter}</button>
      </div>
    </div>
    `;
  }
}

export default $component(Counter);
```

```typescript title="src/App.ts"
import { SonnetComponent, $component } from '@sonnetjs/core';
import Counter from './Counter';

class App extends SonnetComponent {
  get() {
    return /*html*/ `
      <div>
        <h1>Sonnet JS Counter</h1>
        ${Counter().get()}
      </div>
    `;
  }
}

export default $component(App);
```

## Running the SSR Application

To run your SSR application:

1. For development:

```bash
npm run dev
```

2. For production, first build the application:

```bash
npm run build
```

Then start the production server:

```bash
npm run serve
```

Visit the URL provided in your terminal (usually `http://localhost:5174`) to see your server-side rendered Sonnet JS application in action.

## Important Notes

1. The `get` method is used to render HTML on both the server and client. Avoid using browser-specific APIs in this method.
2. The `script` method is only executed on the client after hydration. Use this for client-side interactivity.
3. SSR can improve initial page load times and SEO, but it also adds complexity to your application. Use it when these benefits outweigh the added complexity.

Congratulations! You've successfully implemented server-side rendering in your Sonnet JS application. This completes our "Getting Started" tutorial series, covering Quick Start, Routing, and SSR in Sonnet JS.