"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[287],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6406:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={sidebar_position:1},s="Create a Wallet",c={unversionedId:"participate/wallet",id:"participate/wallet",isDocsHomePage:!1,title:"Create a Wallet",description:"Installation",source:"@site/docs/participate/wallet.md",sourceDirName:"participate",slug:"/participate/wallet",permalink:"/docs/participate/wallet",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/participate/wallet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Troubleshooting Common Issues With Validator Nodes",permalink:"/docs/validator/troubleshooting"},next:{title:"Staking",permalink:"/docs/participate/staking"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Create Account",id:"create-account",children:[{value:"Using a ledger device",id:"using-a-ledger-device",children:[]},{value:"Computer",id:"computer",children:[]},{value:"Warning",id:"warning-1",children:[]}]},{value:"Install",id:"install",children:[]},{value:"Open Keplr",id:"open-keplr",children:[]},{value:"Create an Account",id:"create-an-account",children:[]},{value:"Confirm Mnemonic Phrase",id:"confirm-mnemonic-phrase",children:[]},{value:"Register",id:"register",children:[]},{value:"Working with Keplr",id:"working-with-keplr",children:[{value:"Your Wallet Address",id:"your-wallet-address",children:[]},{value:"Make a Deposit",id:"make-a-deposit",children:[]},{value:"Other Cosmos Tokens",id:"other-cosmos-tokens",children:[]},{value:"Account Management",id:"account-management",children:[]}]},{value:"CLI Wallet",id:"cli-wallet",children:[{value:"Querying the balance of the wallet",id:"querying-the-balance-of-the-wallet",children:[]},{value:"Transferring ARCH tokens to our wallet",id:"transferring-arch-tokens-to-our-wallet",children:[]}]}],p={toc:u};function d(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-wallet"},"Create a Wallet"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The first thing we need to in order to delegate our stake is to install the archwya CLI, you can find how to do this in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/create/getting-started/install"},"installation guide")),(0,r.kt)("h2",{id:"create-account"},"Create Account"),(0,r.kt)("h3",{id:"using-a-ledger-device"},"Using a ledger device"),(0,r.kt)("p",null,"When you initialize your ledger, a 24-word mnemonic is generated and stored in the device. This mnemonic is compatible with Cosmos and Cosmos accounts can be derived from it. Therefore, all you have to do is make your ledger compatible with gaiad. To do so, you need to go through the following steps:"),(0,r.kt)("p",null,'1- Download the Ledger Live app here (opens new window).\n2- Connect your ledger via USB and update to the latest firmware\n3- Go to the ledger live app store, and download the "Cosmos" application (this can take a while). Note: You may have to enable Dev Mode in the Settings of Ledger Live to be able to download the "Cosmos" application.\n4- Navigate to the Cosmos app on your ledger device\n5- To create an account, use the following command:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"archwayd keys add <yourAccountName> --ledger\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<yourKeyName>")," is the name of the account. it is a reference to the account number used to derive the key pair from the mnemonic. You will use this name to identify your account when you want to send a transaction."),(0,r.kt)("li",{parentName:"ul"},"You can add the optional ",(0,r.kt)("inlineCode",{parentName:"li"},"--account")," flag to specify the path (0, 1, 2, ...) you want to use to generate your account. By default, account 0 is generated.")),(0,r.kt)("h4",{id:"warning"},"Warning"),(0,r.kt)("p",null,"This process will only work while the Ledger is plugged in and unlocked."),(0,r.kt)("h3",{id:"computer"},"Computer"),(0,r.kt)("p",null,"To generate an account, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"archwayd keys add <yourKeyName>\n")),(0,r.kt)("p",null,"The command will generate a 24-words mnemonic and save the private and public keys for account 0 at the same time. Each time you want to send a transaction, you will need to unlock your system's credentials store. If you lose access to your credentials storage, you can always recover the private key with the mnemonic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<yourKeyName>")," is the name of the account. it is a reference to the account number used to derive the key pair from the mnemonic. You will use this name to identify your account when you want to send a transaction."),(0,r.kt)("li",{parentName:"ul"},"You can add the optional ",(0,r.kt)("inlineCode",{parentName:"li"},"--account")," flag to specify the path (0, 1, 2, ...) you want to use to generate your account. By default, account 0 is generated.")),(0,r.kt)("h3",{id:"warning-1"},"Warning"),(0,r.kt)("p",null,"After securing your mnemonic, you can delete your bash history to ensure no one can retrieve it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"history -c\nrm -rf ~/.bash_history`\n")),(0,r.kt)("h1",{id:"keplr"},"Keplr"),(0,r.kt)("p",null,"This quick start guide helps you set up a wallet and manage your tokens with it. A popular wallets for Cosmos-based coins is ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.keplr.app/"},"Keplr"),", a wallet that is similar to MetaMask."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Open you ",(0,r.kt)("em",{parentName:"p"},"Google Chrome")," browser and head over to this website: ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.keplr.app/"},"https://wallet.keplr.app/")),(0,r.kt)("p",null,"Open a ",(0,r.kt)("em",{parentName:"p"},"Google Chrome"),"  webbrowser and navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.keplr.app/"},"https://wallet.keplr.app/"),"."),(0,r.kt)("p",null,"If you have not already installed Keplr, select the message box to install it."),(0,r.kt)("p",null,"You are redirected to the page where you can to install the Keplr extension.\nSelect ",(0,r.kt)("inlineCode",{parentName:"p"},"Add to Chrome")," and install the extension."),(0,r.kt)("p",null,"When the Keplr extension is installed, the Keplr icon shows on your web browser."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8745).Z})),(0,r.kt)("h2",{id:"open-keplr"},"Open Keplr"),(0,r.kt)("p",null,"Select the Keplr icon on your web browser. You see a screen like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1710).Z})),(0,r.kt)("h2",{id:"create-an-account"},"Create an Account"),(0,r.kt)("p",null,"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Create new account")," to see the following form:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1375).Z})),(0,r.kt)("p",null,"You see a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mnemonic Seed")," phrase that is generated specifically for your account. You may use this phrase to recover your account in case you install your Keplr extension or forget your password."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attention"),": Make sure to write the mnemonic phrase down, print it, or make several copies of it and keep them in a safe place."),(0,r.kt)("p",null,"You can select a 12- or 24-words mnemonic phrase. Either option is fine, the 24-word mnemonic is more secure."),(0,r.kt)("p",null,"Enter an account name, write down your password, and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Next"),"."),(0,r.kt)("h2",{id:"confirm-mnemonic-phrase"},"Confirm Mnemonic Phrase"),(0,r.kt)("p",null,"After the following screen appears, select the mnemonic phrase exactly in the same order that you saw in the previous screen."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2311).Z})),(0,r.kt)("h2",{id:"register"},"Register"),(0,r.kt)("p",null,"When all the words are put in the right order, select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Register")," button and you are all set."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5509).Z})),(0,r.kt)("h2",{id:"working-with-keplr"},"Working with Keplr"),(0,r.kt)("p",null,"The next time you select the Keplr extension icon, you see this window since you have an account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2771).Z})),(0,r.kt)("p",null,"In this window, you can view your total balance and perform multiple actions with our account."),(0,r.kt)("h3",{id:"your-wallet-address"},"Your Wallet Address"),(0,r.kt)("p",null,"To view and copy your wallet address, hover over the text starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmos"),". You can share this address with the people who want to transfer tokens to your account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7483).Z})),(0,r.kt)("h3",{id:"make-a-deposit"},"Make a Deposit"),(0,r.kt)("p",null,"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deposit")," button. The wallet address is shown in a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/QR_code"},"QR Code")," format. You can let a person scan the QR code when they want to transfer some crypto to your wallet."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8713).Z})),(0,r.kt)("h3",{id:"other-cosmos-tokens"},"Other Cosmos Tokens"),(0,r.kt)("p",null,"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cosmos")," dropdown on top of the window to switch the view to other Cosmos-based crypto tokens."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5441).Z})),(0,r.kt)("h3",{id:"account-management"},"Account Management"),(0,r.kt)("p",null,"To manage your account, select the account icon. You can also view the mnemonic phrase in your account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3735).Z})),(0,r.kt)("h2",{id:"cli-wallet"},"CLI Wallet"),(0,r.kt)("p",null,"First we need to have our node running one validator, so please set it up here: ",(0,r.kt)("a",{parentName:"p",href:"/docs/validator/running-a-validator-node"},"Running a Validator Node"),"."),(0,r.kt)("h3",{id:"querying-the-balance-of-the-wallet"},"Querying the balance of the wallet"),(0,r.kt)("p",null,"Now let's see the balance of our wallet.\nWe can query any account with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd query bank balances <Wallet_Address>\n")),(0,r.kt)("p",null,"If we forget our wallet address we can retrieve its details via this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd keys show my-wallet\n")),(0,r.kt)("p",null,"So in our example we can see the balance of our wallet by running this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd query bank balances $(archwayd keys show my-wallet -a)\n")),(0,r.kt)("h3",{id:"transferring-arch-tokens-to-our-wallet"},"Transferring ARCH tokens to our wallet"),(0,r.kt)("p",null,"Now let's transfer some ",(0,r.kt)("inlineCode",{parentName:"p"},"ARCH")," tokens from our validator account to our newly created wallet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd tx send $(archwayd keys show my-validator-account -a) $(archwayd keys show my-wallet -a) 12ARCH --fees 0.1ARCH --chain-id my-chain\n")),(0,r.kt)("p",null,"Then, you should be prompted with the following confirmation question:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "messages": [\n      {\n        "@type": "/cosmos.bank.v1beta1.MsgSend",\n        "from_address": "archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz",\n        "to_address": "archway12zjz75hq3gmhc75pmcs9klc26mrhyvkueghy2l",\n        "amount": [\n          {\n            "denom": "ARCH",\n            "amount": "12"\n          }\n        ]\n      }\n    ],\n    "memo": "",\n    "timeout_height": "0",\n    "extension_options": [\n\n    ],\n    "non_critical_extension_options": [\n\n    ]\n  },\n  "auth_info": {\n    "signer_infos": [\n\n    ],\n    "fee": {\n      "amount": [\n        {\n          "denom": "ARCH",\n          "amount": "0"\n        }\n      ],\n      "gas_limit": "200000",\n      "payer": "",\n      "granter": ""\n    }\n  },\n  "signatures": [\n\n  ]\n}\n\nconfirm transaction before signing and broadcasting [y/N]: y\n')),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," and hit the enter key."),(0,r.kt)("p",null,"Then we need to wait few moments for our transaction to go through. If things go well, we will see an output like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "height": "609",\n  "txhash": "4F7AA2832D5190B68C5E4F2ABDC41B732BCCA582DCD27B0FD11898A3CBF48310",\n  "data": "0A060A0473656E64",\n  "raw_log": "[{\\"events\\":[{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"action\\",\\"value\\":\\"send\\"},{\\"key\\":\\"sender\\",\\"value\\":\\"archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz\\"},{\\"key\\":\\"module\\",\\"value\\":\\"bank\\"}]},{\\"type\\":\\"transfer\\",\\"attributes\\":[{\\"key\\":\\"recipient\\",\\"value\\":\\"archway12zjz75hq3gmhc75pmcs9klc26mrhyvkueghy2l\\"},{\\"key\\":\\"sender\\",\\"value\\":\\"archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz\\"},{\\"key\\":\\"amount\\",\\"value\\":\\"12ARCH\\"}]}]}]",\n  "logs": [\n    {\n      "events": [\n        {\n          "type": "message",\n          "attributes": [\n            {\n              "key": "action",\n              "value": "send"\n            },\n            {\n              "key": "sender",\n              "value": "archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz"\n            },\n            {\n              "key": "module",\n              "value": "bank"\n            }\n          ]\n        },\n        {\n          "type": "transfer",\n          "attributes": [\n            {\n              "key": "recipient",\n              "value": "archway12zjz75hq3gmhc75pmcs9klc26mrhyvkueghy2l"\n            },\n            {\n              "key": "sender",\n              "value": "archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz"\n            },\n            {\n              "key": "amount",\n              "value": "12ARCH"\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "gas_wanted": "200000",\n  "gas_used": "61028"\n}\n')),(0,r.kt)("p",null,"Now let's check again the balance of our wallet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd query bank balances $(archwayd keys show my-wallet -a)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'balances:\n- amount: "12"\n  denom: ARCH\npagination: {}\n')))}d.isMDXComponent=!0},8745:function(e,t,n){t.Z=n.p+"assets/images/keplr01-ef999e2dc2f31a26b1315756b5283690.png"},1710:function(e,t,n){t.Z=n.p+"assets/images/keplr02-2762d766c571a3b8e30c9ca99e5733d6.png"},1375:function(e,t,n){t.Z=n.p+"assets/images/keplr03-ebedd98f461108e507f73f004698a1b5.png"},2311:function(e,t,n){t.Z=n.p+"assets/images/keplr04-fe0a08c2999403679f8934fdd1af63ea.png"},5509:function(e,t,n){t.Z=n.p+"assets/images/keplr05-8c3d74dc9a29f2d99ee0c308c2d88d04.png"},2771:function(e,t,n){t.Z=n.p+"assets/images/keplr06-e0d534efd7b02ec6e1814f54d50f71fd.png"},7483:function(e,t,n){t.Z=n.p+"assets/images/keplr07-6b6fc40eb81ed3469d9a4cc171d2ba6e.png"},8713:function(e,t,n){t.Z=n.p+"assets/images/keplr08-8956d637b5aa4041e08deda9c42a6698.png"},5441:function(e,t,n){t.Z=n.p+"assets/images/keplr09-1a188fd9d29b786cf23d36ef1eab693a.png"},3735:function(e,t,n){t.Z=n.p+"assets/images/keplr10-21f29b5db85ac92dc393e7cb8f7e4371.png"}}]);