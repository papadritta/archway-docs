"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[1701],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||l[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9424:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],c={sidebar_position:2},i="Requesting Testnet funds",u={unversionedId:"create/guides/my-first-dapp/faucet",id:"create/guides/my-first-dapp/faucet",isDocsHomePage:!1,title:"Requesting Testnet funds",description:"If you're working on a testnet you'll want testnet ARC for paying gas costs to deploy your dApp code on chain.",source:"@site/docs/create/guides/my-first-dapp/faucet.md",sourceDirName:"create/guides/my-first-dapp",slug:"/create/guides/my-first-dapp/faucet",permalink:"/docs/create/guides/my-first-dapp/faucet",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/guides/my-first-dapp/faucet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Starting out",permalink:"/docs/create/guides/my-first-dapp/start"},next:{title:"Producing Wasm executables",permalink:"/docs/create/guides/my-first-dapp/wasm"}},p=[],l={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"requesting-testnet-funds"},"Requesting Testnet funds"),(0,o.kt)("p",null,"If you're working on a testnet you'll want testnet ",(0,o.kt)("inlineCode",{parentName:"p"},"ARC")," for paying gas costs to deploy your dApp code on chain."),(0,o.kt)("p",null,"Setting up a new project with ",(0,o.kt)("inlineCode",{parentName:"p"},"archway new")," and choosing a testnet bootstraps all configuration parameters you'll need to request  funds for both ",(0,o.kt)("inlineCode",{parentName:"p"},"stable [constantine]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nightly [titus]")," testnets."),(0,o.kt)("p",null,"Request funds using the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archway faucet\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Enter an address to receive Testnet funds (e.g. "wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv"; Or, hit <enter> to list accounts): wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv\nRequesting faucet funds to account wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv...\n\nWelcome to the faucet!\n\nCheck the full status via the /status endpoint.\nYou can get tokens from here by POSTing to /credit.\nSee https://github.com/cosmos/cosmjs/tree/main/packages/faucet for all further information.\n\nSuccessfully requested funds to wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv on network pebblenet-1 using faucet https://faucet.pebblenet.cosmwasm.com\n')))}f.isMDXComponent=!0}}]);