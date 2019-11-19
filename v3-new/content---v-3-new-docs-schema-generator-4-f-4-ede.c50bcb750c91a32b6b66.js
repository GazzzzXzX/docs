(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{203:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));t(59),t(32),t(23),t(24),t(60),t(0);var r=t(233);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={title:"Schema Generator"},c=[],i={rightToc:c},p="wrapper";function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(p,a({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To generate schema from your entity metadata, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"SchemaGenerator")," helper. "),Object(r.b)("p",null,"You can use it via CLI: "),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npx mikro-orm schema:create --dump   # Dumps create schema SQL\nnpx mikro-orm schema:update --dump   # Dumps update schema SQL\nnpx mikro-orm schema:drop --dump     # Dumps drop schema SQL\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can also use ",Object(r.b)("inlineCode",{parentName:"p"},"--run")," flag to fire all queries, but be careful as it might break your\ndatabase. Be sure to always check the generated SQL first before executing. Do not use\n",Object(r.b)("inlineCode",{parentName:"p"},"--run")," flag in production! ")),Object(r.b)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"./create-schema.ts"))),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { MikroORM } from 'mikro-orm';\n\n(async () => {\n  const orm = await MikroORM.init({\n    entities: [Author, Book, ...],\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getSchemaGenerator();\n\n  const dropDump = await generator.getDropSchemaSQL();\n  console.log(dropDump);\n\n  const createDump = await generator.getCreateSchemaSQL();\n  console.log(createDump);\n\n  const updateDump = await generator.getUpdateSchemaSQL();\n  console.log(updateDump);\n\n  // there is also `generate()` method that returns drop + create queries\n  const dropAndCreateDump = await generator.generate();\n  console.log(dropAndCreateDump);\n\n  // or you can run those queries directly, but be sure to check them first!\n  await generator.dropSchema();\n  await generator.createSchema();\n  await generator.updateSchema();\n\n  await orm.close(true);\n})();\n")),Object(r.b)("p",null,"Then run this script via ",Object(r.b)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",Object(r.b)("inlineCode",{parentName:"p"},"node"),"):"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"$ ts-node create-schema\n")))}u.isMDXComponent=!0},233:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),s=c(t),m=r,l=s[i+"."+m]||s[m]||u[m]||o;return t?a.a.createElement(l,Object.assign({},{ref:n},p,{components:t})):a.a.createElement(l,Object.assign({},{ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var m=2;m<o;m++)c[m]=t[m];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);