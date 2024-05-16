"use strict";(self.webpackChunksonnet_docs=self.webpackChunksonnet_docs||[]).push([[4587],{6121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(4848),o=t(8453);const a={sidebar_position:2},p="Application",l={id:"core/application",title:"Application",description:"The application instance is the main entry point for a Sonnet JS application. It is created using the createApp function and is responsible for managing the lifecycle of the application. The application instance is used to mount components, handle events, and manage the state of the application.",source:"@site/docs/core/application.md",sourceDirName:"core",slug:"/core/application",permalink:"/docs/core/application",draft:!1,unlisted:!1,editUrl:"https://github.com/sonnetjs/sonnetjs.github.io/tree/main/docs/core/application.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"Lifecycle",permalink:"/docs/core/component/lifecycle"},next:{title:"SSR",permalink:"/docs/core/ssr"}},s={},c=[{value:"Creating an application",id:"creating-an-application",level:2},{value:"Available methods",id:"available-methods",level:2},{value:"<code>app.root(component: SonnetComponent)</code>",id:"approotcomponent-sonnetcomponent",level:3},{value:"<code>app.mount(selector: string)</code>",id:"appmountselector-string",level:3},{value:"<code>app.unmount()</code>",id:"appunmount",level:3},{value:"`app.ssr(value?: boolean = true)",id:"appssrvalue-boolean--true",level:3},{value:"<code>app.lazy()</code>",id:"applazy",level:3},{value:"<code>app.use(plugin: SonnetPlugin)</code>",id:"appuseplugin-sonnetplugin",level:3},{value:"<code>app.initialized()</code>",id:"appinitialized",level:3},{value:"<code>app.on(event: string, handler: Function)</code>",id:"apponevent-string-handler-function",level:3}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"application",children:"Application"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"application"})," instance is the main entry point for a Sonnet JS application. It is created using the ",(0,i.jsx)(n.code,{children:"createApp"})," function and is responsible for managing the lifecycle of the application. The ",(0,i.jsx)(n.code,{children:"application"})," instance is used to mount components, handle events, and manage the state of the application."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-application",children:"Creating an application"}),"\n",(0,i.jsxs)(n.p,{children:["To create a new Sonnet JS application, you can use the ",(0,i.jsx)(n.code,{children:"createApp"})," function. This function returns an ",(0,i.jsx)(n.code,{children:"application"})," instance that can be used to manage the application."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { createApp } from 'sonnet';\n\nconst app = createApp();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"available-methods",children:"Available methods"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"application"})," instance provides the following methods:"]}),"\n",(0,i.jsx)(n.h3,{id:"approotcomponent-sonnetcomponent",children:(0,i.jsx)(n.code,{children:"app.root(component: SonnetComponent)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This method is used to set the root component of the application. The root component is the top-level component that will be rendered in the DOM."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { createApp } from 'sonnet';\nimport Counter from './Counter';\n\nconst app = createApp();\napp.root(Counter);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"appmountselector-string",children:(0,i.jsx)(n.code,{children:"app.mount(selector: string)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This method is used to mount the application to a specific DOM element. The ",(0,i.jsx)(n.code,{children:"selector"})," parameter is a CSS selector that specifies the element where the application will be mounted."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { createApp } from 'sonnet';\nimport Counter from './Counter';\n\nconst app = createApp();\napp.root(Counter);\napp.mount(\"#app\");\n"})}),"\n",(0,i.jsx)(n.h3,{id:"appunmount",children:(0,i.jsx)(n.code,{children:"app.unmount()"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This method is used to unmount the application from the DOM. It removes the root component from the DOM and cleans up any event listeners or subscriptions. In most cases, you will not need to call this method directly, as Sonnet JS will handle this automatically when the application is destroyed."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { createApp } from 'sonnet';\nimport Counter from './Counter';\n\nconst app = createApp();\napp.root(Counter);\napp.mount(\"#app\");\n\n// Unmount the application\napp.unmount();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"appssrvalue-boolean--true",children:"`app.ssr(value?: boolean = true)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This method is used to enable or disable server-side rendering (SSR) for the application. By default, SSR is enabled. When SSR is enabled, the application will render on the server and send the HTML to the client. When SSR is disabled, the application will render on the client only."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { createApp } from 'sonnet';\nimport Counter from './Counter';\n\nconst app = createApp();\n\n// Disable SSR\napp.ssr(false);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"applazy",children:(0,i.jsx)(n.code,{children:"app.lazy()"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This method is used to enable lazy loading for the application. When lazy loading is enabled, components will be loaded on demand, reducing the initial load time of the application."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { createApp } from 'sonnet';\nimport Counter from './Counter';\n\nconst app = createApp();\napp.lazy();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"appuseplugin-sonnetplugin",children:(0,i.jsx)(n.code,{children:"app.use(plugin: SonnetPlugin)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This method is used to install a plugin in the application. Plugins can be used to extend the functionality of the application, add new features, or modify the behavior of existing features."}),"\n",(0,i.jsxs)(n.li,{children:["You can get more information about plugins in the ",(0,i.jsx)(n.a,{href:"/docs/core/plugin",children:"Plugins"})," section."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { createApp, SonnetApp } from 'sonnet';\nimport Counter from './Counter';\n\nconst app = createApp();\n\n// Install a plugin\napp.use(MyPlugin);\n\nfunction MyPlugin(app: SonnetApp) {\n  // Add custom functionality to the application\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"appinitialized",children:(0,i.jsx)(n.code,{children:"app.initialized()"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This method is used to initialize all the installed plugins in the application. This method should be called after all the plugins have been installed."}),"\n",(0,i.jsxs)(n.li,{children:["When mounting is handled by the plugin, and lazy loading is enabled, this method should be called after the ",(0,i.jsx)(n.code,{children:"app.mount"})," method to ensure that all the plugins are initialized before the application is mounted."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { createApp, SonnetApp } from 'sonnet';\nimport Counter from './Counter';\n\nconst app = createApp();\napp.mount(\"#app\");\n\napp.lazy();\n// Install a plugin\napp.use(MyPlugin);\n// Initialize the plugins\napp.initialized();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"apponevent-string-handler-function",children:(0,i.jsx)(n.code,{children:"app.on(event: string, handler: Function)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This method is used to add an event listener to the application. The ",(0,i.jsx)(n.code,{children:"event"})," parameter is the name of the event, and the ",(0,i.jsx)(n.code,{children:"handler"})," parameter is the function that will be called when the event is triggered."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"app.on('mount', () => {})"})," - This event is triggered when the application is mounted to the DOM."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"app.on('unmount', () => {})"})," - This event is triggered when the application is unmounted from the DOM."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { createApp } from 'sonnet';\nimport Counter from './Counter';\n\nconst app = createApp();\napp.root(Counter);\napp.mount(\"#app\");\n\napp.on('mount', () => {\n  console.log('Application mounted');\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>p,x:()=>l});var i=t(6540);const o={},a=i.createContext(o);function p(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:p(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);