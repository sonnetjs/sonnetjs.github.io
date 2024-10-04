---
sidebar_position: 2
---

# Routing

In this section, we'll add routing to our Sonnet JS application. Routing allows us to create a multi-page application with different views.

## Creating a New Routing Project

To get started with routing in Sonnet JS, it's best to create a new project using the Router template:

1. Open your terminal and run the following command:

```bash
npx create-sonnet-project
```

2. When prompted, choose the following options:

```
Sonnet JS: A frontend framework

✔ Project name: … sonnet-routing-project
✔ Select a template › Basic
✔ Install Sonnet Router? › Yes
✔ Add TypeScript? … Yes
```

3. Navigate to the new project directory and install dependencies:

```bash
cd sonnet-routing-project
npm install
```

## Creating Pages

Let's create three simple pages for our application. Create a new folder called `pages` in your `src` directory, and add the following files:

```typescript
// src/pages/Home.ts
import { $component, SonnetComponent } from '@sonnetjs/core';

class Home extends SonnetComponent {
  get() {
    return /*html*/ `
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      </div>
    `;
  }
}

export default $component(Home);
```

```typescript
// src/pages/About.ts
import { $component, SonnetComponent } from '@sonnetjs/core';

class About extends SonnetComponent {
  get() {
    return /*html*/ `
      <div>
        <h1>About Page</h1>
        <p>This is the about page.</p>
      </div>
    `;
  }
}

export default $component(About);
```

```typescript
// src/pages/Contact.ts
import { $component, SonnetComponent } from '@sonnetjs/core';

class Contact extends SonnetComponent {
  get() {
    return /*html*/ `
      <div>
        <h1>Contact Page</h1>
        <p>Get in touch with us!</p>
      </div>
    `;
  }
}

export default $component(Contact);
```

## Setting Up the Router

Now, let's set up the router. Create a new file called `router.ts` in your `src` directory:

```typescript
// src/router.ts
import {
  router,
  createRouter,
  createBrowserHistory,
  lazy,
} from '@sonnetjs/router';

const routes = router().children([
  router().path('/').component(lazy(() => import('./pages/Home'))).get(),
  router().path('/about').component(lazy(() => import('./pages/About'))).get(),
  router().path('/contact').component(lazy(() => import('./pages/Contact'))).get(),
]).get();

const history = createBrowserHistory();

export const appRouter = createRouter().routes(routes).history(history).get();
```

## Updating the Main Application

Now, let's update our main application to use the router. Update `src/App.ts`:

```typescript
// src/App.ts
import { SonnetComponent, $component } from '@sonnetjs/core';

class App extends SonnetComponent {
  get() {
    return /*html*/`
      <div>
        <nav>
          <a href="/">Home</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a>
        </nav>
        <main>
          ${this._children}
        </main>
      </div>
    `;
  }
}

export default $component(App);
```

Finally, update `src/main.ts` to use the router:

```typescript
// src/main.ts
import { createApp } from '@sonnetjs/core';
import App from './App';
import { appRouter } from './router';

const app = createApp();
app.root(App);
app.use(appRouter);
app.lazy();
app.mount('#app');
app.initialized();
```

## Running the Application

Now, when you run your application with `npm run dev`, you should be able to navigate between different pages using the links in the navigation bar.

Congratulations! You've successfully added routing to your Sonnet JS application. In the next part of this tutorial, we'll explore how to implement server-side rendering (SSR) in your Sonnet JS application.