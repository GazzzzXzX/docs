(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{193:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return l}));n(59),n(32),n(23),n(24),n(60),n(0);var r=n(233);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a={title:"Property Validation"},i=[],s={rightToc:i},u="wrapper";function l(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["components"]);return Object(r.b)(u,o({},s,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"MirkoORM")," will validate your properties before actual persisting happens. It will try to fix wrong\ndata types for you automatically. If automatic conversion fails, it will throw an error. You can\nenable strict mode to disable this feature and let ORM throw errors instead. Validation is triggered\nwhen persisting the entity. "),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"// number instead of string will throw\nconst author = new Author('test', 'test');\nauthor.assign({ name: 111, email: 222 });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.name of type 'string' to '111' of type 'number'\"\n\n// string date with unknown format will throw\nauthor.assign(author, { name: '333', email: '444', born: 'asd' });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.born of type 'date' to 'asd' of type 'string'\"\n\n// string date with correct format will be auto-corrected\nauthor.assign({ name: '333', email: '444', born: '2018-01-01' });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born).toBe(true); // instance of Date\n\n// Date object will be ok\nauthor.assign({ born: new Date() });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born).toBe(true); // instance of Date\n\n// null will be ok\nauthor.assign({ born: null });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born); // null\n\n// string number with correct format will be auto-corrected\nauthor.assign({ age: '21' });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.age); // number 21\n\n// string instead of number with will throw\nauthor.assign({ age: 'asd' });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to 'asd' of type 'string'\"\nauthor.assign({ age: new Date() });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to '2019-01-17T21:14:23.875Z' of type 'date'\"\nauthor.assign({ age: false });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to 'false' of type 'boolean'\"\n")))}l.isMDXComponent=!0},233:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return p}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(t){var e=o.a.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):Object.assign({},e,t)),n},s=function(t){var e=i(t.components);return o.a.createElement(a.Provider,{value:e},t.children)};var u="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},c=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(t,["components","mdxType","originalType","parentName"]),c=i(n),p=r,h=c[s+"."+p]||c[p]||l[p]||a;return n?o.a.createElement(h,Object.assign({},{ref:e},u,{components:n})):o.a.createElement(h,Object.assign({},{ref:e},u))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);