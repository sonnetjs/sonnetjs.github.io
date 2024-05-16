---
sidebar_position: 3
---

# Lifecycle

Sonnet JS components lifecycle is bit different from other frameworks. There are not typical lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc. Instead, Sonnet JS handles all this stuff in a different way. In Sonnet JS, lifecycle is maintained at app level instead of component level. What it means is that component is rendered (mounted) only once (single page environment). As long as the page is not changed, the component will not be re-rendered. This is the reason why there is no need for lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc.

However, there is an order in which different methods are called when a component is rendered. This order is as follows:

1. `constructor`
2. `get` (avoid using browser apis in get method)
3. `head` (static)
4. `head` (dynamic)
5. `script` (static)
6. `script` (dynamic)