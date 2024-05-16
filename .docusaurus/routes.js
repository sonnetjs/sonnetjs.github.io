import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '73d'),
    exact: true
  },
  {
    path: '/blog/advance-concepts-of-events-in-js-bubbling-capturing',
    component: ComponentCreator('/blog/advance-concepts-of-events-in-js-bubbling-capturing', 'ca9'),
    exact: true
  },
  {
    path: '/blog/advanced-datatypes-in-js',
    component: ComponentCreator('/blog/advanced-datatypes-in-js', '7f4'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/array-in-js',
    component: ComponentCreator('/blog/array-in-js', '40c'),
    exact: true
  },
  {
    path: '/blog/asynchronous-programming-in-js',
    component: ComponentCreator('/blog/asynchronous-programming-in-js', '9bf'),
    exact: true
  },
  {
    path: '/blog/browser-data-storage-in-js',
    component: ComponentCreator('/blog/browser-data-storage-in-js', '138'),
    exact: true
  },
  {
    path: '/blog/browser-environment-in-js',
    component: ComponentCreator('/blog/browser-environment-in-js', 'bdd'),
    exact: true
  },
  {
    path: '/blog/browser-events-in-js',
    component: ComponentCreator('/blog/browser-events-in-js', '794'),
    exact: true
  },
  {
    path: '/blog/call-stack-and-callback-queue-in-js',
    component: ComponentCreator('/blog/call-stack-and-callback-queue-in-js', '37e'),
    exact: true
  },
  {
    path: '/blog/class-in-js',
    component: ComponentCreator('/blog/class-in-js', '9f4'),
    exact: true
  },
  {
    path: '/blog/commenting-and-debugging-in-js',
    component: ComponentCreator('/blog/commenting-and-debugging-in-js', 'caa'),
    exact: true
  },
  {
    path: '/blog/control-flow-statements-in-js',
    component: ComponentCreator('/blog/control-flow-statements-in-js', 'c91'),
    exact: true
  },
  {
    path: '/blog/datatypes-in-js-type-conversion',
    component: ComponentCreator('/blog/datatypes-in-js-type-conversion', 'f01'),
    exact: true
  },
  {
    path: '/blog/error-handling-in-js',
    component: ComponentCreator('/blog/error-handling-in-js', '2ba'),
    exact: true
  },
  {
    path: '/blog/function-binding-in-js',
    component: ComponentCreator('/blog/function-binding-in-js', 'c1a'),
    exact: true
  },
  {
    path: '/blog/functions-in-js-named-anonymous',
    component: ComponentCreator('/blog/functions-in-js-named-anonymous', 'ba4'),
    exact: true
  },
  {
    path: '/blog/handling-forms-in-js',
    component: ComponentCreator('/blog/handling-forms-in-js', 'c67'),
    exact: true
  },
  {
    path: '/blog/introduction-to-js',
    component: ComponentCreator('/blog/introduction-to-js', 'e93'),
    exact: true
  },
  {
    path: '/blog/iterator-generator-and-closure-in-js',
    component: ComponentCreator('/blog/iterator-generator-and-closure-in-js', '367'),
    exact: true
  },
  {
    path: '/blog/module-in-js-import-export',
    component: ComponentCreator('/blog/module-in-js-import-export', '5c0'),
    exact: true
  },
  {
    path: '/blog/object-in-js',
    component: ComponentCreator('/blog/object-in-js', '61a'),
    exact: true
  },
  {
    path: '/blog/object-methods-in-js',
    component: ComponentCreator('/blog/object-methods-in-js', '34e'),
    exact: true
  },
  {
    path: '/blog/operators-and-expressions-in-js',
    component: ComponentCreator('/blog/operators-and-expressions-in-js', '1be'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', '0fb'),
    exact: true
  },
  {
    path: '/blog/page/3',
    component: ComponentCreator('/blog/page/3', '787'),
    exact: true
  },
  {
    path: '/blog/protype-in-js',
    component: ComponentCreator('/blog/protype-in-js', 'e36'),
    exact: true
  },
  {
    path: '/blog/proxy-in-js',
    component: ComponentCreator('/blog/proxy-in-js', 'ee6'),
    exact: true
  },
  {
    path: '/blog/regex-expressions-in-js',
    component: ComponentCreator('/blog/regex-expressions-in-js', '0d4'),
    exact: true
  },
  {
    path: '/blog/scheduling-in-js',
    component: ComponentCreator('/blog/scheduling-in-js', '29c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/javascript',
    component: ComponentCreator('/blog/tags/javascript', 'afb'),
    exact: true
  },
  {
    path: '/blog/tags/javascript/page/2',
    component: ComponentCreator('/blog/tags/javascript/page/2', '3b5'),
    exact: true
  },
  {
    path: '/blog/tags/javascript/page/3',
    component: ComponentCreator('/blog/tags/javascript/page/3', '6a8'),
    exact: true
  },
  {
    path: '/blog/typeconversion-in-js',
    component: ComponentCreator('/blog/typeconversion-in-js', '449'),
    exact: true
  },
  {
    path: '/blog/variables-in-js-var-let-const',
    component: ComponentCreator('/blog/variables-in-js-var-let-const', 'dd5'),
    exact: true
  },
  {
    path: '/blog/websocket-in-js',
    component: ComponentCreator('/blog/websocket-in-js', 'a6c'),
    exact: true
  },
  {
    path: '/blog/working-with-apis-in-js',
    component: ComponentCreator('/blog/working-with-apis-in-js', '14c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '950'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'db3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd1a'),
            routes: [
              {
                path: '/docs/category/component',
                component: ComponentCreator('/docs/category/component', '5d7'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/core',
                component: ComponentCreator('/docs/category/core', 'b5b'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', 'd57'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/routing',
                component: ComponentCreator('/docs/category/routing', 'ef3'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/sonnet-dom',
                component: ComponentCreator('/docs/category/sonnet-dom', 'def'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/sonnet-dom',
                component: ComponentCreator('/docs/category/sonnet-dom', 'b69'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/core/application',
                component: ComponentCreator('/docs/core/application', '7e1'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/core/component/introduction',
                component: ComponentCreator('/docs/core/component/introduction', '5d9'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/core/component/lifecycle',
                component: ComponentCreator('/docs/core/component/lifecycle', '1a5'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/core/component/methods',
                component: ComponentCreator('/docs/core/component/methods', 'e26'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/core/component/props',
                component: ComponentCreator('/docs/core/component/props', '81c'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/core/installation',
                component: ComponentCreator('/docs/core/installation', 'fb5'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/core/plugin',
                component: ComponentCreator('/docs/core/plugin', 'd45'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/core/ssr',
                component: ComponentCreator('/docs/core/ssr', '71f'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/dom/html',
                component: ComponentCreator('/docs/dom/html', 'a93'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/dom/mathml',
                component: ComponentCreator('/docs/dom/mathml', 'dda'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/dom/svg',
                component: ComponentCreator('/docs/dom/svg', '0d9'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/getting-started/overview',
                component: ComponentCreator('/docs/getting-started/overview', '1c5'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/getting-started/quick-start',
                component: ComponentCreator('/docs/getting-started/quick-start', '595'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/routing/Advanced',
                component: ComponentCreator('/docs/routing/Advanced', '69d'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/routing/history',
                component: ComponentCreator('/docs/routing/history', 'ccc'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/routing/router',
                component: ComponentCreator('/docs/routing/router', '452'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/routing/setup',
                component: ComponentCreator('/docs/routing/setup', 'e6d'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
