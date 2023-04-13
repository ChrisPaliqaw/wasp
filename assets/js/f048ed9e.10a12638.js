"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),s=n(16550),i=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=i??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==s&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},45675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),o=n(85162);n(44996);const s={title:"Getting Started",slug:"/",next:"/tutorials/todo-app"},i=void 0,u={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started",description:"Quick Start",source:"@site/docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/introduction/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",slug:"/",next:"/tutorials/todo-app"},sidebar:"docs",next:{title:"What is Wasp?",permalink:"/docs/introduction/what-is-wasp"}},p={},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"What next?",id:"what-next",level:3},{value:"More details",id:"more-details",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3}],d={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Welcome, new Waspeteer \ud83d\udc1d!"),(0,r.kt)("p",null,"To install Wasp on Linux / OSX / WSL(Win), open your terminal and run: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://get.wasp-lang.dev/installer.sh | sh\n")),(0,r.kt)("p",null," \u2139\ufe0f Wasp requires ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," and will warn you if it is missing: check below for ",(0,r.kt)("a",{parentName:"p",href:"#requirements"},"more details"),"."),(0,r.kt)("p",null,"Then, create a new app by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp new MyNewApp # Creates a new web app named MyNewApp.\ncd MyNewApp\nwasp start # Serves the web app.\n")),(0,r.kt)("p",null,"That's it \ud83c\udf89! You have successfully created and served a new web app at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," and Wasp is serving both frontend and backend for you."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Anything went wrong, or you have additional questions? Check ",(0,r.kt)("a",{parentName:"p",href:"#more-details"},"More Details")," section below!")),(0,r.kt)("h3",{id:"what-next"},"What next?"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"li"},"Check out the ",(0,r.kt)("a",{parentName:"strong",href:"/docs/tutorials/todo-app"},"Todo App tutorial")," , which will take you through all the core features of Wasp!")," \ud83d\udc48"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If you are using VSCode, install our ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp"},"Wasp language extension"),"."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Join us on ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/rzdnErX"},"Discord"),"! Any feedback or questions you have, we are there for you."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Follow Wasp development by subscribing to our newsletter: ",(0,r.kt)("a",{parentName:"li",href:"https://wasp-lang.dev/#signup"},"https://wasp-lang.dev/#signup")," . We usually send 1 per month, and Matija does his best to unleash his creativity to make them engaging and fun to read :D!")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"more-details"},"More details"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You must have ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),") installed on your machine and available in ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),". We rely on the latest Node.js LTS version (currently ",(0,r.kt)("inlineCode",{parentName:"p"},"v18.14.2"),")."),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing your Node.js installation version(s)."),(0,r.kt)("details",null,(0,r.kt)("summary",{style:{cursor:"pointer",textDecoration:"underline"}},"Quick guide on installing/using nvm"),(0,r.kt)("div",null,(0,r.kt)("p",null,"  Install nvm via your OS package manager (aptitude, pacman, homebrew, ...) or alternatively via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},"nvm install script"),"."),(0,r.kt)("p",null,"  Then, install a version of node that you need, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nvm install 18\n")),(0,r.kt)("p",null,"  Finally, whenever you need to ensure a specific version of node is used, run e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nvm use 18\n")),(0,r.kt)("p",null,"  to set the node version for the current shell session."),(0,r.kt)("p",null,"  You can run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node -v\n")),(0,r.kt)("p",null,"  to check the version of node currently being used in this shell session."),(0,r.kt)("p",null,"  Check NVM repo for more details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm")," ."))),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)(l.Z,{defaultValue:"linux/osx",values:[{label:"Linux / OS X",value:"linux/osx"},{label:"Windows",value:"win"},{label:"From source",value:"source"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"linux/osx",mdxType:"TabItem"},(0,r.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,r.kt)("p",null,"Open your terminal and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://get.wasp-lang.dev/installer.sh | sh\n")))),(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,r.kt)("p",null,"With Wasp for Windows, we are almost there: Wasp is successfully compiling and running on Windows but there is a bug or two stopping it from fully working. Check it out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/48"},"here")," if you are interested in helping."),(0,r.kt)("p",null,"In the meantime, the best way to start using Wasp on Windows is by using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),". Once you set up Ubuntu on WSL, just follow Linux instructions for installing Wasp. If you need further help, reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," - we have some community members using WSL that might be able to help you."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"  If you are using WSL2, make sure that your Wasp project is not on Windows file system, but instead on Linux file system. Otherwise, Wasp won't be able to detect file changes, due to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/WSL/issues/4739"},"issue in WSL2"),".")))),(0,r.kt)(o.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,r.kt)("p",null,"If the installer is not working for you or your OS is not supported, you can try building Wasp from source."),(0,r.kt)("p",null,"To install from source, you need to clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"wasp repo"),", install ",(0,r.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/getting-started.html"},"cabal")," on your machine and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"cabal install")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"waspc/")," dir."),(0,r.kt)("p",null,"If you have never built Wasp before, this might take some time due to ",(0,r.kt)("inlineCode",{parentName:"p"},"cabal")," downloading dependencies for the first time."),(0,r.kt)("p",null,"Check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/waspc"},"waspc/")," for more details on building.")))),(0,r.kt)("admonition",{title:"Try Wasp Without Installing \ud83e\udd14?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"  Give Wasp a spin in the browser without any setup by running our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/gitpod-template"},"Wasp Template for Gitpod"))))}h.isMDXComponent=!0}}]);