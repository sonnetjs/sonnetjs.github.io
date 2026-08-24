# sonnet.js.org

The website for [SonnetJS](https://github.com/sonnetjs/sonnet), a
zero-dependency, zero-build component boilerplate in vanilla JavaScript.

Like the framework, the site has no build step: it is plain HTML and CSS,
deployed to GitHub Pages straight from the repo root.

```
index.html    landing page
docs.html     the complete docs, on one page
styles.css    shared styles (design tokens match the framework's demo page)
CNAME         custom domain (sonnet.js.org)
```

## Develop

Open `index.html` in a browser.

## Deploy

Push to `main`. The GitHub Actions workflow uploads the repo root to
GitHub Pages with no build step.
