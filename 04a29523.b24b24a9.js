(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1030:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return s}));var r=t(0),a=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function b(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=a.a.createContext({}),l=function(n){var e=a.a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=l(n.components);return a.a.createElement(c.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},k=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,u=n.parentName,c=b(n,["components","mdxType","originalType","parentName"]),p=l(t),k=r,s=p["".concat(u,".").concat(k)]||p[k]||g[k]||i;return t?a.a.createElement(s,o(o({ref:e},c),{},{components:t})):a.a.createElement(s,o({ref:e},c))}));function s(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,u=new Array(i);u[0]=k;var o={};for(var b in e)hasOwnProperty.call(e,b)&&(o[b]=e[b]);o.originalType=n,o.mdxType="string"==typeof n?n:r,u[1]=o;for(var c=2;c<i;c++)u[c]=t[c];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},74:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return u})),t.d(e,"metadata",(function(){return o})),t.d(e,"rightToc",(function(){return b})),t.d(e,"default",(function(){return l}));var r=t(2),a=t(6),i=(t(0),t(1030)),u={},o={unversionedId:"TimPengembang/Infrastruktur/PenerbitanKeyring",id:"TimPengembang/Infrastruktur/PenerbitanKeyring",isDocsHomePage:!1,title:"PenerbitanKeyring",description:"Penerbitan Keyring",source:"@site/Wiki/TimPengembang/Infrastruktur/PenerbitanKeyring.md",slug:"/TimPengembang/Infrastruktur/PenerbitanKeyring",permalink:"/TimPengembang/Infrastruktur/PenerbitanKeyring",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/PenerbitanKeyring.md",version:"current"},b=[{value:"blankon-keyring",id:"blankon-keyring",children:[]},{value:"blankon-role-keyring",id:"blankon-role-keyring",children:[]}],c={rightToc:b};function l(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"penerbitan-keyring"},"Penerbitan Keyring"),Object(i.b)("p",null,"Keyring mengizinkan penyimpanan kunci (biasanya kunci publik) dalam format yang cukup portabel. Keyring dapat disuntikkan ke sistem operasi dengan tujuan sistem operasi nantinya akan mempercayai (trust) benda-benda yang telah ditandatangani oleh kunci privat pasangannya (misalnya paket atau berkas ",Object(i.b)("inlineCode",{parentName:"p"},"Release")," dari lumbung)."),Object(i.b)("p",null,"Mengenai penerbitan kunci untuk keyring, lihat ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Infrastruktur/PenerbitanKunciLumbung"}),"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Infrastruktur/PenerbitanKunciLumbung"),"."),Object(i.b)("p",null,"Paket keyring yang diterbitkan ada 2 jenis, yaitu:"),Object(i.b)("h2",{id:"blankon-keyring"},"blankon-keyring"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/blankon-packages/blankon-keyring"}),"https://github.com/blankon-packages/blankon-keyring")),Object(i.b)("p",null,"Wajib. Keyring yang dipaketkan ke paket ini adalah keyring dari kunci turunan yang digunakan untuk menandatangani lumbung. Paket ini perlu disiapkan setelah lumbung dibuat dan disuntikkan paling awal ke lumbung."),Object(i.b)("h2",{id:"blankon-role-keyring"},"blankon-role-keyring"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/blankon-packages/blankon-role-keyring"}),"https://github.com/blankon-packages/blankon-role-keyring")),Object(i.b)("p",null,"Tidak wajib. Diterbitkan untuk mengadaptasi keyring baru (perlu penjelasan lebih lanjut)"))}l.isMDXComponent=!0}}]);