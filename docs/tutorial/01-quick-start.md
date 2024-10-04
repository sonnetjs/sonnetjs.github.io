---
sidebar_position: 1
---

# Quick Start

Welcome to Sonnet JS! This quick start guide will help you set up a new Sonnet JS project and create a simple counter application.

## Prerequisites

Before we begin, make sure you have Node.js version 18.0 or above installed on your machine. You can check your Node.js version by running:

```bash
node -v
```

## Creating a New Project

Let's start by creating a new Sonnet JS project:

1. Open your terminal and run the following command:

```bash
npx create-sonnet-project
```

2. You'll be prompted to enter some information about your project. Here's an example of what you might see:

```
Sonnet JS: A frontend framework

✔ Project name: … sonnet-project
✔ Select a template › Default
✔ Install Sonnet Router? › No
✔ Add TypeScript? … Yes
```

3. Once the project is created, navigate to the project directory:

```bash
cd sonnet-project
```

4. Install the dependencies:

```bash
npm install
```

## Project Structure

Your new Sonnet JS project will have the following structure:

```
sonnet-project
├── dist
├── node_modules
├── public
├── src
│   ├── App.ts
│   ├── Counter.ts
│   └── main.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

- `dist`: Contains the production build of the project.
- `node_modules`: Contains all the dependencies of the project.
- `public`: Contains the public assets of the project.
- `src`: Contains the source code of the project.
  * `main.ts`: The entry point of the project.
  * `Counter.ts`: A sample component.
  * `App.ts`: The main component of the project.
- `.gitignore`: Contains the files and directories that should be ignored by Git.
- `package.json`: Contains the metadata of the project.
- `README.md`: Contains the documentation of the project.
- `tsconfig.json`: Contains the TypeScript configuration of the project.

## Creating a Counter Component

Let's create a simple counter component. Open `src/Counter.ts` and replace its contents with the following code:

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

## Setting Up the Main Application

Now, let's set up the main application. Open `src/main.ts` and update it with the following code:

```typescript title="src/main.ts"
import { createApp } from '@sonnetjs/core';
import App from './App';

const app = createApp();
app.root(App);
app.mount('#app');
```

## Running the Application

To run your Sonnet JS application:

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173` (or the URL provided in your terminal).

You should now see a simple counter application with a button that increments the counter when clicked.

Congratulations! You've just created your first Sonnet JS application. In the next part of this tutorial, we'll explore how to add routing to your application.