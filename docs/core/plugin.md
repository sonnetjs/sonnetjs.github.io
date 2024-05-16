---
sidebar_position: 4
---

# Plugin

Sonnet JS provides a plugin system that allows you to extend the core functionality of the framework. Plugins can be used to add new features, modify existing features, or integrate third-party libraries. This guide will show you how to create and use plugins in Sonnet JS.

## Creating a plugin

Plugin is just a function that takes the Sonnet instance as an argument and modifies it. Here is an example of a simple plugin that adds a new method to the Sonnet instance:

```typescript title=src/plugins/my-plugin.ts
import { SonnetApp } from '@sonnetjs/core';

export function myPlugin(app: SonnetApp) {
  console.log('My plugin is running');

  app.myMethod = function() {
    console.log('My method is running');
  };

  app.mount('#app');
}
```

In this example, the `myPlugin` function takes the Sonnet instance as an argument and adds a new method called `myMethod` to it. The method logs a message to the console when called.

## Using a plugin

To use a plugin, you need to import it and call it with the Sonnet instance as an argument. Here is an example of how to use the `myPlugin` plugin:

```typescript title=src/main.ts
import { createApp } from '@sonnetjs/core';
import { myPlugin } from './plugins/my-plugin';

const app = createApp();
app.use(myPlugin);
app.initialized();
```

In this example, the `myPlugin` function is imported and passed to the `use` method of the Sonnet instance. This will run the plugin and add the new method to the Sonnet instance.

## Conclusion

Plugins are a powerful way to extend the functionality of Sonnet JS. They allow you to add new features, modify existing features, and integrate third-party libraries with ease. By following the steps outlined in this guide, you can create and use plugins in your Sonnet JS applications.
