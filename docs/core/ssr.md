---
sidebar_position: 3
---

# SSR

Server-side rendering (SSR) is a feature that allows you to render your application on the server and send the HTML to the client. This can be useful for SEO, faster initial page loads, and more. Sonnet JS utilizes vite core APIs to provide SSR support.

## Usage

To get started with SSR in Sonnet JS, you need to create a new project using the `create-sonnet-app` command. This command will scaffold a new project with SSR support.

```bash
npx create-sonnet-app
```

You will be prompted to enter the project name, select a template, and choose whether to add TypeScript to the project. Here is an example of the prompts:

```bash
Sonnet JS: A frontend framework

✔ Project name: … sonnet-project
✔ Select a template › SSR
✔ Add TypeScript? … No / Yes

  cd sonnet-project
  npm install
  npm run dev
```

This will create a new Sonnet JS project with SSR support in a directory called `sonnet-project`.

## Boilerplate code

Here is the boilerplate code for a simple Sonnet JS counter application with SSR support. Let's try to understand what each part of the code does:

```typescript title=server.js
import fs from 'node:fs/promises';
import express from 'express';

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5174;
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : '';
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true, watch: { usePolling: true } },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template;
    let render;
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.ts')).render;
    } else {
      template = templateHtml;
      render = (await import('./dist/server/entry-server.js')).render;
    }

    const rendered = await render(url, ssrManifest);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

app.get('/', (req, res) => {
  res.redirect(301, '/home');
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
```

This code sets up an express server that serves the HTML for the application. It uses Vite in development mode and serves the production assets in production mode.

```typescript title=src/entry-server.ts
import App from './App';

export async function render() {
  const html = await App().get();
  return { html };
}
```

This code is the entry point for the server-side rendering. It imports the `App` component and calls the `get` method to get the HTML for the component.

```typescript title=src/entry-client.ts
import './style.css';
import { createApp } from '@sonnetjs/core';
import App from './App';

const app = createApp();
app.root(App);
app.ssr();
app.mount('#app');
```

This code is the entry point for the client-side rendering. It imports the `App` component and mounts it to the DOM.

```typescript title=src/App.ts
import { SonnetComponent, $component } from '@sonnetjs/core';
import Counter from './Counter';

class App extends SonnetComponent {
  get(){
    return /*html*/`
      <div>
        ${Counter().get()}
      </div>
    `;
  }
}

export default $component(App);
```

This code is the main component of the application. It imports the `Counter` component and renders it inside a `div` element.

```typescript title=src/Counter.ts
import { SonnetComponent, $component } from '@sonnetjs/core';

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

This code is the `Counter` component of the application. It has a counter that increments when a button is clicked.

:::danger Note
The get method is used to render the HTML at server. So, avoid using browser-specific APIs like `document` in this method.
::: 