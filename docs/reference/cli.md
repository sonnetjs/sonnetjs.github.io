---
sidebar_position: 1
---

# CLI

## Requirements

- Node.js version 18.0 or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed. When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Scaffold a new project

To create a new project, you can use the following command:

```bash
npx create-sonnet-project
```

You will be prompted to enter the project name, select a template, and choose whether to add TypeScript to the project. Here is an example of the prompts:

```
Sonnet JS: A frontend framework

✔ Project name: sonnet-project
? Select a template › - Use arrow-keys. Return to submit.
❯   Default
    SSR
? Install Sonnet Router? › No / Yes
? Add TypeScript? › No / Yes

Done. Now run:

  cd sonnet-project
  npm install
  npm run dev
```
This will create a new Sonnet JS project in the `sonnet-project` directory and install all the necessary dependencies.

## Running the project

To run the project, you can use the following command:

```bash
npm run dev
```

This will start the development server and open the project in your default browser.

## Building the project

To build the project, you can use the following command:

```bash
npm run build
```

This will create a production build of the project in the `dist` directory.

## Running the production build

To run the production build, you can use the following command:

```bash
npm run serve
```
