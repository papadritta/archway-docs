"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[3204],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2215:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},c="Starting out",p={unversionedId:"create/guides/my-first-dapp/start",id:"create/guides/my-first-dapp/start",isDocsHomePage:!1,title:"Starting out",description:"This guide follows the below workflow:",source:"@site/docs/create/guides/my-first-dapp/start.md",sourceDirName:"create/guides/my-first-dapp",slug:"/create/guides/my-first-dapp/start",permalink:"/docs/create/guides/my-first-dapp/start",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/guides/my-first-dapp/start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/create/getting-started/basics"},next:{title:"Requesting Testnet funds",permalink:"/docs/create/guides/my-first-dapp/faucet"}},l=[{value:"Creating a project",id:"creating-a-project",children:[]},{value:"Building and running tests",id:"building-and-running-tests",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"starting-out"},"Starting out"),(0,i.kt)("p",null,"This guide follows the below workflow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-project"},"Create a new project")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#building-and-running-tests"},"Build and test our code")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/create/guides/my-first-dapp/faucet"},"Request testnet $ARC")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/create/guides/my-first-dapp/wasm"},"Produce ",(0,i.kt)("em",{parentName:"a"},"default")," and ",(0,i.kt)("em",{parentName:"a"},"CosmWasm")," ",(0,i.kt)("inlineCode",{parentName:"a"},"wasm")," binaries")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/create/guides/my-first-dapp/deploy"},"Deploy to a testnet")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/create/guides/my-first-dapp/interact"},"Query and transact with a deployed contract"))),(0,i.kt)("h2",{id:"creating-a-project"},"Creating a project"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/docs/create/getting-started/setup"},"Setup")," section we learned how to create and configure a new Archway project. "),(0,i.kt)("p",null,"If you haven't created a project yet, or didn't choose the 'Increment' starter template, go back to ",(0,i.kt)("a",{parentName:"p",href:"/docs/create/getting-started/setup"},"Setup")," to complete this step. "),(0,i.kt)("p",null,"Projects created with ",(0,i.kt)("inlineCode",{parentName:"p"},"archway new")," are ready-made project templates. Later we'll add code and modify existing behavior, but to get acquainted let's build and test the boilerplate code we have now."),(0,i.kt)("h2",{id:"building-and-running-tests"},"Building and running tests"),(0,i.kt)("p",null,"Build your project using the command: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archway build\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Building project...\n\n  Updating crates.io index\n  Compiling libc v0.2.99\n  Compiling typenum v1.13.0\n  # And so on until ...\n  Compiling my-project v0.1.0 (/home/my-system-path/my-project)\n    Finished dev [unoptimized + debuginfo] target(s) in 31.42s\n")),(0,i.kt)("p",null,"Test your build like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"archway test\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Loading tests...\n\n   Compiling cosmwasm-schema v0.16.0\n   Compiling my-project v0.1.0 (/home/my-system-path/my-project)\n    Finished test [unoptimized + debuginfo] target(s) in 1.79s\n     Running target/debug/deps/my-project-713283db92dd8501\n\nrunning 3 tests\ntest contract::tests::proper_initialization ... ok\ntest contract::tests::increment ... ok\ntest contract::tests::reset ... ok\n\ntest result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n")))}d.isMDXComponent=!0}}]);