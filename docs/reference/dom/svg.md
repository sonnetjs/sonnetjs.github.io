# SVG

Sonnet SVG is a library that provides a set of utilities for working with SVG elements. It makes it easy and intuitive to create SVG elements in a type-safe way.

## Installation

You can install Sonnet SVG using npm:

```bash
npm install @sonnetjs/svg
```

## Usage

You can import the functions from Sonnet SVG like this:

```typescript
import { svg, circle, rect } from '@sonnetjs/svg';

export function Component() {
  return svg().children(
    circle().cx(50).cy(50).r(40).fill('red').get(),
    rect().x(100).y(100).width(100).height(100).fill('blue').get()
  ).get();
}
```

