"use strict";(self.webpackChunksonnet_docs=self.webpackChunksonnet_docs||[]).push([[5197],{8613:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(4848),o=t(8453);const s={sidebar_position:4},a="Plugin",r={id:"core/plugin",title:"Plugin",description:"Sonnet JS provides a plugin system that allows you to extend the core functionality of the framework. Plugins can be used to add new features, modify existing features, or integrate third-party libraries. This guide will show you how to create and use plugins in Sonnet JS.",source:"@site/docs/core/plugin.md",sourceDirName:"core",slug:"/core/plugin",permalink:"/docs/core/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/sonnetjs/sonnetjs.github.io/tree/main/docs/core/plugin.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSidebar",previous:{title:"SSR",permalink:"/docs/core/ssr"},next:{title:"Sonnet DOM",permalink:"/docs/category/sonnet-dom"}},l={},c=[{value:"Creating a plugin",id:"creating-a-plugin",level:2},{value:"Using a plugin",id:"using-a-plugin",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"plugin",children:"Plugin"}),"\n",(0,i.jsx)(e.p,{children:"Sonnet JS provides a plugin system that allows you to extend the core functionality of the framework. Plugins can be used to add new features, modify existing features, or integrate third-party libraries. This guide will show you how to create and use plugins in Sonnet JS."}),"\n",(0,i.jsx)(e.h2,{id:"creating-a-plugin",children:"Creating a plugin"}),"\n",(0,i.jsx)(e.p,{children:"Plugin is just a function that takes the Sonnet instance as an argument and modifies it. Here is an example of a simple plugin that adds a new method to the Sonnet instance:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",metastring:"title=src/plugins/my-plugin.ts",children:"import { SonnetApp } from '@sonnetjs/core';\n\nexport function myPlugin(app: SonnetApp) {\n  console.log('My plugin is running');\n\n  app.myMethod = function() {\n    console.log('My method is running');\n  };\n\n  app.mount('#app');\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["In this example, the ",(0,i.jsx)(e.code,{children:"myPlugin"})," function takes the Sonnet instance as an argument and adds a new method called ",(0,i.jsx)(e.code,{children:"myMethod"})," to it. The method logs a message to the console when called."]}),"\n",(0,i.jsx)(e.h2,{id:"using-a-plugin",children:"Using a plugin"}),"\n",(0,i.jsxs)(e.p,{children:["To use a plugin, you need to import it and call it with the Sonnet instance as an argument. Here is an example of how to use the ",(0,i.jsx)(e.code,{children:"myPlugin"})," plugin:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",metastring:"title=src/main.ts",children:"import { createApp } from '@sonnetjs/core';\nimport { myPlugin } from './plugins/my-plugin';\n\nconst app = createApp();\napp.use(myPlugin);\napp.initialized();\n"})}),"\n",(0,i.jsxs)(e.p,{children:["In this example, the ",(0,i.jsx)(e.code,{children:"myPlugin"})," function is imported and passed to the ",(0,i.jsx)(e.code,{children:"use"})," method of the Sonnet instance. This will run the plugin and add the new method to the Sonnet instance."]}),"\n",(0,i.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(e.p,{children:"Plugins are a powerful way to extend the functionality of Sonnet JS. They allow you to add new features, modify existing features, and integrate third-party libraries with ease. By following the steps outlined in this guide, you can create and use plugins in your Sonnet JS applications."})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);