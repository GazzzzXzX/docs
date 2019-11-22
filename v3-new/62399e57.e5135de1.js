(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));n(52),n(25),n(20),n(21),n(53),n(0);var o=n(288);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var a={title:"Identity Map and Request Context"},i=[{value:"Forking Entity Manager",id:"forking-entity-manager",children:[]},{value:'<a name="request-context"></a> RequestContext helper for DI containers',id:"a-namerequest-contexta-requestcontext-helper-for-di-containers",children:[]},{value:"Why is Request Context needed?",id:"why-is-request-context-needed",children:[{value:"Problem 1 - growing memory footprint",id:"problem-1---growing-memory-footprint",children:[]},{value:"Problem 2 - unstable response of API endpoints",id:"problem-2---unstable-response-of-api-endpoints",children:[]}]}],l={rightToc:i},s="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(s,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MikroORM")," uses identity map in background so you will always get the same instance of\none entity."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne({ name: 'Jon Snow' }, ['books']);\nconst authors = await authorRepository.findAll(['books']);\n\n// identity map in action\nconsole.log(jon === authors[0]); // true\n")),Object(o.b)("p",null,"If you want to clear this identity map cache, you can do so via ",Object(o.b)("inlineCode",{parentName:"p"},"em.clear()")," method:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"orm.em.clear();\n")),Object(o.b)("p",null,"You should always keep unique identity map per each request. This basically means that you need\nto clone entity manager and use the clone in request context. There are two ways to achieve this:"),Object(o.b)("h2",{id:"forking-entity-manager"},"Forking Entity Manager"),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"fork()")," method you can simply get clean entity manager with its own context and identity map:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"const em = orm.em.fork();\n")),Object(o.b)("h2",{id:"a-namerequest-contexta-requestcontext-helper-for-di-containers"},Object(o.b)("a",{name:"request-context"})," RequestContext helper for DI containers"),Object(o.b)("p",null,"If you use dependency injection container like ",Object(o.b)("inlineCode",{parentName:"p"},"inversify")," or the one in ",Object(o.b)("inlineCode",{parentName:"p"},"nestjs")," framework, it\ncan be hard to achieve this, because you usually want to access your repositories via DI container,\nbut it will always provide you with the same instance, rather than new one for each request. "),Object(o.b)("p",null,"To solve this, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"RequestContext")," helper, that will use ",Object(o.b)("inlineCode",{parentName:"p"},"node"),"'s Domain API in the\nbackground to isolate the request context. MikroORM will always use request specific (forked)\nentity manager if available, so all you need to do is to create new request context preferably\nas a middleware:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"app.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),Object(o.b)("p",null,"You should register this middleware as the last one just before request handlers and before\nany of your custom middleware that is using the ORM. There might be issues when you register\nit before request processing middleware like ",Object(o.b)("inlineCode",{parentName:"p"},"queryParser")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bodyParser"),", so definitely\nregister the context after them. "),Object(o.b)("h2",{id:"why-is-request-context-needed"},"Why is Request Context needed?"),Object(o.b)("p",null,"Imagine you will use single Identity Map throughout your application. It will be shared across\nall request handlers, that can possibly run in parallel. "),Object(o.b)("h3",{id:"problem-1---growing-memory-footprint"},"Problem 1 - growing memory footprint"),Object(o.b)("p",null,"As there would be only one shared Identity Map, you can't just clear it after your request ends.\nThere can be another request working with it so clearing the Identity Map from one request could\nbreak other requests running in parallel. This will result in growing memory footprint, as every\nentity that became managed at some point in time would be kept in the Identity Map. "),Object(o.b)("h3",{id:"problem-2---unstable-response-of-api-endpoints"},"Problem 2 - unstable response of API endpoints"),Object(o.b)("p",null,"Every entity has ",Object(o.b)("inlineCode",{parentName:"p"},"toJSON()")," method, that automatically converts it to serialized form. If you\nhave only one shared Identity Map, following situation may occur:"),Object(o.b)("p",null,"Let's say there are 2 endpoints"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"GET /book/:id")," that returns just the book, without populating anything"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"GET /book-with-author/:id")," that returns the book and its author populated")),Object(o.b)("p",null,"Now when someone requests same book via both of those endpoints, you could end up with both\nreturning the same output:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",Object(o.b)("inlineCode",{parentName:"li"},"Book")," without populating its property ",Object(o.b)("inlineCode",{parentName:"li"},"author")," property"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"GET /book-with-author/1")," returns ",Object(o.b)("inlineCode",{parentName:"li"},"Book"),", this time with ",Object(o.b)("inlineCode",{parentName:"li"},"author")," populated"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",Object(o.b)("inlineCode",{parentName:"li"},"Book"),", but this time also with ",Object(o.b)("inlineCode",{parentName:"li"},"author")," populated")),Object(o.b)("p",null,"This happens because the information about entity association being populated is stored in\nthe Identity Map. "))}c.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var o=n(0),r=n.n(o),a=r.a.createContext({}),i=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return r.a.createElement(a.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),p=o,b=u[l+"."+p]||u[p]||c[p]||a;return n?r.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);