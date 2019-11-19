(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return p}));n(59),n(32),n(23),n(24),n(60),n(0);var i=n(233);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o={title:"Using EntityRepository instead of EntityManager",sidebar_label:"Entity Repository"},a=[{value:"Custom Repository",id:"custom-repository",children:[]},{value:"EntityRepository API",id:"entityrepository-api",children:[]}],l={rightToc:a},b="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(i.b)(b,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"More convenient way of fetching entities from database is by using ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRepository"),", that\ncarries the entity name so you do not have to pass it to every ",Object(i.b)("inlineCode",{parentName:"p"},"find")," and ",Object(i.b)("inlineCode",{parentName:"p"},"findOne")," calls:"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"const booksRepository = orm.em.getRepository(Book);\n\n// with sorting, limit and offset parameters, populating author references\nconst books = await booksRepository.find({ author: '...' }, ['author'], { title: QueryOrder.DESC }, 2, 1);\n\n// or with options object\nconst books = await booksRepository.find({ author: '...' }, { \n  populate: ['author'],\n  limit: 1,\n  offset: 2,\n  sort: { title: QueryOrder.DESC },\n});\n\nconsole.log(books); // Book[]\n")),Object(i.b)("h2",{id:"custom-repository"},"Custom Repository"),Object(i.b)("p",null,"To use custom repository, just extend ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRepository<T>")," class:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"@Repository(Author)\nexport class CustomAuthorRepository extends EntityRepository<Author> {\n\n  // your custom methods...\n  public findAndUpdate(...) {\n    // ...\n  }\n\n}\n")),Object(i.b)("p",null,"You can also omit the ",Object(i.b)("inlineCode",{parentName:"p"},"@Repository")," decorator and register your repository in ",Object(i.b)("inlineCode",{parentName:"p"},"@Entity"),"\ndecorator instead:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"@Entity({ customRepository: () => CustomAuthorRepository })\nexport class Author {\n  // ...\n}\n")),Object(i.b)("p",null,"Note that we need to pass that repository reference inside a callback so we will not run\ninto circular dependency issues when using entity references inside that repository."),Object(i.b)("p",null,"Now you can access your custom repository via ",Object(i.b)("inlineCode",{parentName:"p"},"em.getRepository()")," method."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also register custom base repository (for all entities where you do not specify\n",Object(i.b)("inlineCode",{parentName:"p"},"customRepository"),") globally, via ",Object(i.b)("inlineCode",{parentName:"p"},"MikroORM.init({ entityRepository: CustomBaseRepository })"))),Object(i.b)("p",null,"For more examples, take a look at\n",Object(i.b)("a",r({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"}),Object(i.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",Object(i.b)("a",r({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"}),Object(i.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."),Object(i.b)("h2",{id:"entityrepository-api"},"EntityRepository API"),Object(i.b)("h4",{id:"findwhere-filterqueryt-options-findoptions-promiset"},Object(i.b)("inlineCode",{parentName:"h4"},"find(where: FilterQuery<T>, options?: FindOptions): Promise<T[]>")),Object(i.b)("p",null,"Returns array of entities found for given condition. You can specify ",Object(i.b)("inlineCode",{parentName:"p"},"FindOptions")," to request\npopulation of referenced entities or control the pagination:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"export interface FindOptions {\n  populate?: string[];\n  orderBy?: { [k: string]: QueryOrder };\n  limit?: number;\n  offset?: number;\n}\n")),Object(i.b)("hr",null),Object(i.b)("h4",{id:"findwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(i.b)("inlineCode",{parentName:"h4"},"find(where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(i.b)("p",null,"Same as previous ",Object(i.b)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",Object(i.b)("inlineCode",{parentName:"p"},"populate"),", ",Object(i.b)("inlineCode",{parentName:"p"},"orderBy"),", ",Object(i.b)("inlineCode",{parentName:"p"},"limit"),"\nand ",Object(i.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"findandcountwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(i.b)("inlineCode",{parentName:"h4"},"findAndCount(where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(i.b)("p",null,"Combination of ",Object(i.b)("inlineCode",{parentName:"p"},"find")," and ",Object(i.b)("inlineCode",{parentName:"p"},"count")," methods. "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"findalloptions-findoptions-promiset"},Object(i.b)("inlineCode",{parentName:"h4"},"findAll(options?: FindOptions): Promise<T[]>")),Object(i.b)("p",null,"Returns all entities for given type. "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"findallpopulate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(i.b)("inlineCode",{parentName:"h4"},"findAll(populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(i.b)("p",null,"Same as previous ",Object(i.b)("inlineCode",{parentName:"p"},"findAll")," method, just with dedicated parameters for ",Object(i.b)("inlineCode",{parentName:"p"},"populate"),", ",Object(i.b)("inlineCode",{parentName:"p"},"orderBy"),", ",Object(i.b)("inlineCode",{parentName:"p"},"limit"),"\nand ",Object(i.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"findonewhere-filterqueryt--string-populate-string-promiset--null"},Object(i.b)("inlineCode",{parentName:"h4"},"findOne(where: FilterQuery<T> | string, populate?: string[]): Promise<T | null>")),Object(i.b)("p",null,"Finds an entity by given ",Object(i.b)("inlineCode",{parentName:"p"},"where")," condition. You can use primary key as ",Object(i.b)("inlineCode",{parentName:"p"},"where")," value, then\nif the entity is already managed, no database call will be made. "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"findoneorfailwhere-filterqueryt--string-populate-string-promiset"},Object(i.b)("inlineCode",{parentName:"h4"},"findOneOrFail(where: FilterQuery<T> | string, populate?: string[]): Promise<T>")),Object(i.b)("p",null,"Just like ",Object(i.b)("inlineCode",{parentName:"p"},"findOne"),", but throws when entity not found, so it always resolves to given entity.\nYou can customize the error either globally via ",Object(i.b)("inlineCode",{parentName:"p"},"findOneOrFailHandler")," option, or locally via\n",Object(i.b)("inlineCode",{parentName:"p"},"failHandler")," option in ",Object(i.b)("inlineCode",{parentName:"p"},"findOneOrFail")," call."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"mergedata-entitydatat-t"},Object(i.b)("inlineCode",{parentName:"h4"},"merge(data: EntityData<T>): T")),Object(i.b)("p",null,"Adds given entity to current Identity Map. After merging, entity becomes managed.\nThis is useful when you want to work with cached entities. "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"getreferenceid-string-t"},Object(i.b)("inlineCode",{parentName:"h4"},"getReference(id: string): T")),Object(i.b)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually\nloading it, if the entity is not yet loaded."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"countwhere-filterqueryt-promisenumber"},Object(i.b)("inlineCode",{parentName:"h4"},"count(where?: FilterQuery<T>): Promise<number>")),Object(i.b)("p",null,"Gets count of entities matching the ",Object(i.b)("inlineCode",{parentName:"p"},"where")," condition. "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"persistentity-anyentity--anyentity-flush-boolean-promisevoid"},Object(i.b)("inlineCode",{parentName:"h4"},"persist(entity: AnyEntity | AnyEntity[], flush?: boolean): Promise<void>")),Object(i.b)("p",null,"Tells the EntityManager to make an instance managed and persistent. The entity will be\nentered into the database at or before transaction commit or as a result of the flush\noperation. You can control immediate flushing via ",Object(i.b)("inlineCode",{parentName:"p"},"flush")," parameter and via ",Object(i.b)("inlineCode",{parentName:"p"},"autoFlush"),"\nconfiguration option. "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"persistandflushentity-anyentity--anyentity-promisevoid"},Object(i.b)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: AnyEntity | AnyEntity[]): Promise<void>")),Object(i.b)("p",null,"Shortcut for ",Object(i.b)("inlineCode",{parentName:"p"},"persist")," & ",Object(i.b)("inlineCode",{parentName:"p"},"flush"),"."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"persistlaterentity-anyentity--anyentity-void"},Object(i.b)("inlineCode",{parentName:"h4"},"persistLater(entity: AnyEntity | AnyEntity[]): void")),Object(i.b)("p",null,"Shortcut for just ",Object(i.b)("inlineCode",{parentName:"p"},"persist"),", without flushing. "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"flush-promisevoid"},Object(i.b)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),Object(i.b)("p",null,"Flushes all changes to objects that have been queued up to now to the database."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"removewhere-anyentity--filterqueryt-flush-boolean-promisenumber"},Object(i.b)("inlineCode",{parentName:"h4"},"remove(where: AnyEntity | FilterQuery<T>, flush?: boolean): Promise<number>")),Object(i.b)("p",null,"When provided entity instance as ",Object(i.b)("inlineCode",{parentName:"p"},"where")," value, then it calls ",Object(i.b)("inlineCode",{parentName:"p"},"removeEntity(entity, flush)"),",\notherwise it fires delete query with given ",Object(i.b)("inlineCode",{parentName:"p"},"where")," condition. "),Object(i.b)("p",null,"This method fires ",Object(i.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(i.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks only if you provide entity instance.  "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"removeandflushentity-anyentity-promisevoid"},Object(i.b)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: AnyEntity): Promise<void>")),Object(i.b)("p",null,"Shortcut for ",Object(i.b)("inlineCode",{parentName:"p"},"removeEntity")," & ",Object(i.b)("inlineCode",{parentName:"p"},"flush"),"."),Object(i.b)("p",null,"This method fires ",Object(i.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(i.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"removelaterentity-anyentity-void"},Object(i.b)("inlineCode",{parentName:"h4"},"removeLater(entity: AnyEntity): void")),Object(i.b)("p",null,"Shortcut for ",Object(i.b)("inlineCode",{parentName:"p"},"removeEntity")," without flushing. "),Object(i.b)("p",null,"This method fires ",Object(i.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(i.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"canpopulateproperty-string-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"canPopulate(property: string): boolean")),Object(i.b)("p",null,"Returns whether given entity has given property which can be populated (is reference or\ncollection)."),Object(i.b)("hr",null))}p.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));var i=n(0),r=n.n(i),o=r.a.createContext({}),a=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=a(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,b=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["components","mdxType","originalType","parentName"]),s=a(n),c=i,u=s[l+"."+c]||s[c]||p[c]||o;return n?r.a.createElement(u,Object.assign({},{ref:t},b,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},b))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[b]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);