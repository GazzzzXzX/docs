(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{159:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return s}));t(59),t(32),t(23),t(24),t(60),t(0);var i=t(233);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var o={title:"Deployment"},a=[{value:"Deploy pre-built cache",id:"deploy-pre-built-cache",children:[]},{value:"Fill type or entity attributes everywhere",id:"fill-type-or-entity-attributes-everywhere",children:[]},{value:"Deploy your entity source files",id:"deploy-your-entity-source-files",children:[]},{value:"Deploy a bundle of entities and dependencies with Webpack",id:"deploy-a-bundle-of-entities-and-dependencies-with-webpack",children:[{value:"Prepare your project for Webpack",id:"prepare-your-project-for-webpack",children:[]},{value:"Webpack configuration",id:"webpack-configuration",children:[]},{value:"Running Webpack",id:"running-webpack",children:[]}]}],l={rightToc:a},c="wrapper";function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(i.b)(c,r({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Under the hood, ",Object(i.b)("inlineCode",{parentName:"p"},"MikroORM")," uses ",Object(i.b)("a",r({parentName:"p"},{href:"https://github.com/dsherret/ts-morph"}),Object(i.b)("inlineCode",{parentName:"a"},"ts-morph"))," to read\nTypeScript source files of all entities to be able to detect all types. Thanks to this,\ndefining the type is enough for runtime validation."),Object(i.b)("p",null,"This has some consequences for deployment of your application. Sometimes you will want to\ndeploy only your compiled output, without TS source files at all. In that case, discovery\nprocess will probably fail. You have several options:"),Object(i.b)("h2",{id:"deploy-pre-built-cache"},"Deploy pre-built cache"),Object(i.b)("p",null,"By default, output of metadata discovery will be cached in ",Object(i.b)("inlineCode",{parentName:"p"},"temp")," folder. You can reuse this\ncache in your deployed application. Currently the cache is saved in files named like the entity\nsource file, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Author.ts")," entity will store cache in ",Object(i.b)("inlineCode",{parentName:"p"},"temp/Author.ts.json")," file."),Object(i.b)("p",null,"When running compiled code, JS entities will be taken into account instead, so you will need to\ngenerate the cache by running the compiled code locally. That will generate ",Object(i.b)("inlineCode",{parentName:"p"},"temp/Author.js.json"),",\nwhich is the file you will need to deploy alongside your application. "),Object(i.b)("h2",{id:"fill-type-or-entity-attributes-everywhere"},"Fill type or entity attributes everywhere"),Object(i.b)("p",null,"What discovery process does is to sniff TS types and save their value to string, so it can be\nused later for validation. You can skip the whole process by simply providing those values\nmanually:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book implements IdEntity<Book> {\n\n  @PrimaryKey({ type: 'number' })\n  id: number;\n\n  @Property({ type: 'string' })\n  title: string;\n\n  @ManyToOne(() => Author) // or `@ManyToOne({ type: 'Author' })` or `@ManyToOne({ entity: () => Author })`\n  author1: Author;\n\n  // or\n  @ManyToOne({ type: 'Author' })\n  author2: Author;\n\n  // or\n  @ManyToOne({ entity: () => Author })\n  author3: Author;\n\n}\n")),Object(i.b)("h2",{id:"deploy-your-entity-source-files"},"Deploy your entity source files"),Object(i.b)("p",null,"Usually it does not matter much that you deploy more files than needed, so the easiest way\nis to just deploy your TS source files next to the compiled output, just like during development."),Object(i.b)("h2",{id:"deploy-a-bundle-of-entities-and-dependencies-with-webpack"},"Deploy a bundle of entities and dependencies with ",Object(i.b)("a",r({parentName:"h2"},{href:"https://webpack.js.org/"}),"Webpack")),Object(i.b)("p",null,"Webpack can be used to bundle every entity and dependency: you get a single file that contains every required module/file and has no external dependencies."),Object(i.b)("h3",{id:"prepare-your-project-for-webpack"},"Prepare your project for Webpack"),Object(i.b)("p",null,"Webpack requires every required file to be hardcoded in your code. Code like this won't work (it will throw an error because Webpack doesn't know which file to include in the bundle):"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"let dependencyNameInVariable = 'dependency';\nconst dependency = import(dependencyNameInVariable);\n")),Object(i.b)("p",null,"As Webpack creates a file bundle, it isn't desired that it scans directories for entities or metadata. Therefore you need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"entities")," option in the initialization funcion and entitiesDirs/entitiesDirsTs will be ignored (see dynamically including entities as an alternative solution). Also you need to fill ",Object(i.b)("inlineCode",{parentName:"p"},"type")," or ",Object(i.b)("inlineCode",{parentName:"p"},"entity")," attributes everywhere (see above) and disable caching (it will decrease start-time slightly)."),Object(i.b)("h4",{id:"manually-defining-entities"},"Manually defining entities"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"import { Author, Book, BookTag, Publisher, Test } from '../entities';\n\nawait MikroORM.init({\n  ...\n  entities: [Author, Book, BookTag, Publisher, Test],\n  cache: { enabled: false },\n  ...\n});\n")),Object(i.b)("h4",{id:"dynamically-loading-dependencies"},"Dynamically loading dependencies"),Object(i.b)("p",null,"This will make use of a Webpack feature called ",Object(i.b)("a",r({parentName:"p"},{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"}),"dynamic imports"),". This way you can import dependencies as long as part of the path is known."),Object(i.b)("p",null,"In following example ",Object(i.b)("a",r({parentName:"p"},{href:"https://webpack.js.org/guides/dependency-management/#requirecontext"}),Object(i.b)("inlineCode",{parentName:"a"},"require.context"))," is used. This 'function' is only usable during the building process from Webpack so therefore there is an alternative solution provided that will as long as the environment variable WEBPACK is not set (e.g. during development with ",Object(i.b)("inlineCode",{parentName:"p"},"ts-node"),")."),Object(i.b)("p",null,"Here, all files with the extension ",Object(i.b)("inlineCode",{parentName:"p"},".ts")," will be imported from the directory ",Object(i.b)("inlineCode",{parentName:"p"},"../entities"),". "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap"}),Object(i.b)("inlineCode",{parentName:"a"},"flatMap"))," is a method from ECMAScript 2019 and requires ",Object(i.b)("a",r({parentName:"p"},{href:"https://nodejs.org/"}),"Node.js")," 11 or higher.")),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"await MikroORM.init({\n    // ...\n    entities: await getEntities(),\n    cache: { enabled: false },\n    // ...\n});\n\nasync function getEntities(): Promise<any[]> {\n  if (process.env.WEBPACK) {\n    const modules = require.context('../entities', true, /\\.ts$/);\n\n    return modules\n      .keys()\n      .map(r => modules(r))\n      .flatMap(mod => Object.keys(mod).map(className => mod[className]));\n  }\n\n  const promises = fs.readdirSync('../entities').map(file => import(`../entities/${file}`));\n  const modules = await Promise.all(promises);\n\n  return modules.flatMap(mod => Object.keys(mod).map(className => mod[className]));\n}\n")),Object(i.b)("h3",{id:"webpack-configuration"},"Webpack configuration"),Object(i.b)("p",null,"Webpack can be run without ",Object(i.b)("a",r({parentName:"p"},{href:"https://webpack.js.org/configuration/"}),"configuration file")," but for building MikroORM and ",Object(i.b)("a",r({parentName:"p"},{href:"https://nodejs.org/"}),"Node.js")," bundles it requires additional configuration. Configuration for Webpack is stored in the root of the project as ",Object(i.b)("inlineCode",{parentName:"p"},"webpack.config.js"),". For all the options please refer to the following ",Object(i.b)("a",r({parentName:"p"},{href:"https://webpack.js.org/configuration/"}),"page"),"."),Object(i.b)("p",null,"For bundling MikroORM the following configuration is required:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const optionalModules = [\n  ...Object.keys(require('knex/package.json').browser),\n  ...Object.keys(require('mikro-orm/package.json').peerDependencies),\n];\n\nmodule.exports = {\n  target: 'node',\n  module: {\n    rules: [\n      { test: /\\.ts$/, loader: 'ts-loader' },\n    ],\n  },\n  plugins: [\n    new webpack.EnvironmentPlugin({ WEBPACK: true }),\n    new webpack.IgnorePlugin({\n      checkResource: rsrc => {\n        if (optionalModules.includes(rsrc.split('/')[0])) {\n          try {\n            require.resolve(rsrc);\n            return false;\n          } catch {\n            return true;  \n          }\n        }\n\n        return false;\n      },\n    }),\n  ],\n};\n")),Object(i.b)("h3",{id:"running-webpack"},"Running Webpack"),Object(i.b)("p",null,"To run Webpack execute ",Object(i.b)("inlineCode",{parentName:"p"},"webpack")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"npx webpack")," if not installed globally) in the root of the project. It will probably throw a few warnings but you can ignore the errors regarding MikroORM: the mentioned pieces of code won't be executed if properly bundled with Webpack."))}s.isMDXComponent=!0},233:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var i=t(0),r=t.n(i),o=r.a.createContext({}),a=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=a(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===n.indexOf(i)&&(t[i]=e[i]);return t}(e,["components","mdxType","originalType","parentName"]),p=a(t),u=i,d=p[l+"."+u]||p[u]||s[u]||o;return t?r.a.createElement(d,Object.assign({},{ref:n},c,{components:t})):r.a.createElement(d,Object.assign({},{ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);