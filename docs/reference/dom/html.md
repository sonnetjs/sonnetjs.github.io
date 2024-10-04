# HTML

Sonnet HTML is a library that provides a set of utilities for working with HTML elements. 

## Installation

You can install Sonnet HTML using npm:

```bash
npm install @sonnetjs/html
```

## Usage

You can import the functions from Sonnet HTML like this:

```typescript 
import { div, img, button }  from '@sonnetjs/html';

export function Component() {
  return div().children(
    img().src('https://example.com/image.jpg').get(),
    button().innerText('Click me').className('btn').get()
  ).get();
}
```

All of the html attributes can be set using chainable methods. You can also set the children of the element using the `children` method.

```typescript
import { div, span } from '@sonnetjs/html';

export function Component() {
  return div().children(
    span().innerText('Hello World').get()
    div().innerHTML('<p>Some text</p>').get()
  ).get();
}
```


