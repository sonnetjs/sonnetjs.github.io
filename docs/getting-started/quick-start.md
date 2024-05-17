---
sidebar_position: 2
---

# Quick Start

Let's get started with Sonnet JS by creating a simple application. In this tutorial, we will create a new Sonnet JS project, create a new component, and render it in the browser.

## Create a new Sonnet JS project

The first step is to create a new Sonnet JS project. You can do this by running the following command in your terminal:

```bash
npx create-sonnet-app
```

You will be prompted to enter the project name, select a template, and choose whether to add TypeScript to the project. Here is an example of the prompts:

```bash
Sonnet JS: A frontend framework

✔ Project name: … sonnet-project
✔ Select a template › Default
✔ Add TypeScript? … No / Yes

  cd sonnet-project
  npm install
  npm run dev
```

This will create a new Sonnet JS project in a directory called `sonnet-project`. Once the project is created, you can navigate to the project directory by running the following command:

```bash
cd sonnet-project
```

Install the dependencies by running the following command:

```bash
npm install
```

## Boilerplate code

Here is the boilerplate code for a simple Sonnet JS counter application. Let's try to understand what each part of the code does:

```typescript title=src/main.ts
import { createApp } from 'sonnet';
import Counter from './Counter';

const app = createApp();
app.root(Counter);
app.mount('#app');
```

Now let's take a look at the `Counter` component:

```typescript title=src/Counter.ts
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

## Run the application

To run the application, you can run the following command in your terminal:

```bash
npm run dev
```

This will start a development server and open the application in your default browser. You should see a simple counter application with a button that increments the counter when clicked.

That's it! You have successfully created a simple Sonnet JS application. You can now start building more complex applications using Sonnet JS. 
