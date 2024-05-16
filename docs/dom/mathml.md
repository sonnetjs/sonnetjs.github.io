# MathML

MathML is a markup language for describing mathematical notation and capturing both its structure and content. It aims to be a universal format for representing mathematics on the web, and is supported by most modern web browsers. Sonnet MathML is a library that provides a set of utilities for working with MathML elements. 

## Installation

You can install Sonnet MathML using npm:

```bash
npm install @sonnetjs/mathml
```

## Usage

You can import the functions from Sonnet MathML like this:

```typescript
import { math, mrow, mi, mo } from '@sonnetjs/mathml';

export function Component() {
  return math().children(
    mrow().children(
      mi().innerText('x').get(),
      mo().innerText('+').get(),
      mi().innerText('y').get()
    ).get()
  ).get();
}
```
