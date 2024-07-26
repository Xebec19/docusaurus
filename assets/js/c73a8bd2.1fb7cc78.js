"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16495],{61132:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(24246),a=(r(27378),r(40624));const i={tabItem:"tabItem_pnkT"};function s({children:e,hidden:n,className:r}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:n,children:e})}},97555:(e,n,r)=>{r.d(n,{Z:()=>M});var t=r(24246),a=r(27378),i=r(40624),s=r(75527),o=r(3620),l=r(44479),c=r(62821),u=r(52196),d=r(53589);function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function p(e){var n,r;return null!==(r=null===(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function f(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return p(e).map((({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t})))}(r);return function(e){const n=(0,u.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function b({queryString:e=!1,groupId:n}){const r=(0,o.k6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,c._X)(t),s=(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace(h(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){m(e,n,r[n])}))}return e}({},r.location),{search:n.toString()}))}),[t,r]);return[i,s]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=f(e),[s,o]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const t=null!==(r=n.find((e=>e.default)))&&void 0!==r?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=b({queryString:r,groupId:t}),[m,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,t]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:t}),p=(()=>{const e=null!=c?c:m;return g({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{p&&o(p)}),[p]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var x=r(29088);const v={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function w(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){y(e,n,r[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function k({className:e,block:n,selectedValue:r,selectValue:a,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==r&&(c(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;var r;n=null!==(r=l[t])&&void 0!==r?r:l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;var t;n=null!==(t=l[r])&&void 0!==t?t:l[l.length-1];break}}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:o.map((({value:e,label:n,attributes:a})=>(0,t.jsx)("li",O(w({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},a),{className:(0,i.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e)))})}function D({lazy:e,children:n,selectedValue:r}){const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function P(e){const n=j(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,t.jsx)(k,w({},n,e)),(0,t.jsx)(D,w({},n,e))]})}function M(e){const n=(0,x.Z)();return(0,t.jsx)(P,O(w({},e),{children:p(e.children)}),String(n))}},42029:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(24246),a=r(71670),i=r(97555),s=r(61132);const o={id:"diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",slug:"/markdown-features/diagrams"},l="Diagrams",c={id:"guides/markdown-features/diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",source:"@site/docs/guides/markdown-features/markdown-features-diagrams.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/diagrams",permalink:"/docs/markdown-features/diagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-diagrams.mdx",tags:[],version:"current",lastUpdatedBy:"ozakione",lastUpdatedAt:1722005048e3,frontMatter:{id:"diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",slug:"/markdown-features/diagrams"},sidebar:"docs",previous:{title:"Math Equations",permalink:"/docs/markdown-features/math-equations"},next:{title:"Head metadata",permalink:"/docs/markdown-features/head-metadata"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Theming",id:"theming",level:2},{value:"Mermaid Config",id:"configuration",level:2},{value:"Dynamic Mermaid Component",id:"component",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"diagrams",children:"Diagrams"}),"\n",(0,t.jsxs)(n.p,{children:["Diagrams can be rendered using ",(0,t.jsx)(n.a,{href:"https://mermaid-js.github.io/mermaid/",children:"Mermaid"})," in a code block."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(s.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-mermaid\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Enable Mermaid functionality by adding plugin ",(0,t.jsx)(n.code,{children:"@docusaurus/theme-mermaid"})," and setting ",(0,t.jsx)(n.code,{children:"markdown.mermaid"})," to ",(0,t.jsx)(n.code,{children:"true"})," in your ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  markdown: {\n    mermaid: true,\n  },\n  themes: ['@docusaurus/theme-mermaid'],\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Add a code block with language ",(0,t.jsx)(n.code,{children:"mermaid"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",metastring:'title="Example Mermaid diagram"',children:"```mermaid\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n```\n"})}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://mermaid-js.github.io/mermaid/#/./n00b-syntaxReference",children:"Mermaid syntax documentation"})," for more information on the Mermaid syntax."]}),"\n",(0,t.jsx)(n.h2,{id:"theming",children:"Theming"}),"\n",(0,t.jsxs)(n.p,{children:["The diagram dark and light themes can be changed by setting ",(0,t.jsx)(n.code,{children:"mermaid.theme"})," values in the ",(0,t.jsx)(n.code,{children:"themeConfig"})," in your ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"}),". You can set themes for both light and dark mode."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      theme: {light: 'neutral', dark: 'forest'},\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://mermaid-js.github.io/mermaid/#/theming",children:"Mermaid theme documentation"})," for more information on theming Mermaid diagrams."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Mermaid Config"}),"\n",(0,t.jsxs)(n.p,{children:["Options in ",(0,t.jsx)(n.code,{children:"mermaid.options"})," will be passed directly to ",(0,t.jsx)(n.code,{children:"mermaid.initialize"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      options: {\n        maxTextSize: 50,\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://mermaid-js.github.io/mermaid/#/./Setup?id=configuration",children:"Mermaid config documentation"})," and the ",(0,t.jsx)(n.a,{href:"https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.type.ts",children:"Mermaid config types"})," for the available config options."]}),"\n",(0,t.jsx)(n.h2,{id:"component",children:"Dynamic Mermaid Component"}),"\n",(0,t.jsxs)(n.p,{children:["To generate dynamic diagrams, you can use the ",(0,t.jsx)(n.code,{children:"Mermaid"})," component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mdx",metastring:'title="Example of dynamic Mermaid component"',children:"import Mermaid from '@theme/Mermaid';\n\n<Mermaid\n  value={`graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;`}\n/>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},71670:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(27378);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);