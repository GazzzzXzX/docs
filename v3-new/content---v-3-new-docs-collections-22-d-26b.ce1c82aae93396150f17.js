(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{153:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return a})),n.d(o,"rightToc",(function(){return r})),n.d(o,"default",(function(){return s}));n(59),n(32),n(23),n(24),n(60),n(0);var t=n(233);function i(){return(i=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var a={title:"Collections"},r=[{value:"OneToMany Collections",id:"onetomany-collections",children:[]},{value:"ManyToMany Collections",id:"manytomany-collections",children:[{value:"Unidirectional",id:"unidirectional",children:[]},{value:"Bidirectional",id:"bidirectional",children:[]},{value:"Forcing fixed order of collection items",id:"forcing-fixed-order-of-collection-items",children:[]}]},{value:"Propagation of Collection's add() and remove() operations",id:"propagation-of-collections-add-and-remove-operations",children:[]},{value:"Filtering and ordering of collection items",id:"filtering-and-ordering-of-collection-items",children:[]}],l={rightToc:r},c="wrapper";function s(e){var o=e.components,n=function(e,o){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(t.b)(c,i({},l,n,{components:o,mdxType:"MDXLayout"}),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"OneToMany")," and ",Object(t.b)("inlineCode",{parentName:"p"},"ManyToMany")," collections are stored in a ",Object(t.b)("inlineCode",{parentName:"p"},"Collection")," wrapper. It implements\niterator so you can use ",Object(t.b)("inlineCode",{parentName:"p"},"for of")," loop to iterate through it. "),Object(t.b)("p",null,"Another way to access collection items is to use bracket syntax like when you access array items.\nKeep in mind that this approach will not check if the collection is initialed, while using ",Object(t.b)("inlineCode",{parentName:"p"},"get"),"\nmethod will throw error in this case."),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Note that array access in ",Object(t.b)("inlineCode",{parentName:"p"},"Collection")," is available only for reading already loaded items, you\ncannot add new items to ",Object(t.b)("inlineCode",{parentName:"p"},"Collection")," this way. ")),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"const author = orm.em.findOne(Author, '...', ['books']); // populating books collection\n\n// or we could lazy load books collection later via `init()` method\nawait author.books.init();\n\nfor (const book of author.books) {\n  console.log(book.title); // initialized\n  console.log(book.author.isInitialized()); // true\n  console.log(book.author.id);\n  console.log(book.author.name); // Jon Snow\n  console.log(book.publisher); // just reference\n  console.log(book.publisher.isInitialized()); // false\n  console.log(book.publisher.id);\n  console.log(book.publisher.name); // undefined\n}\n\n// collection needs to be initialized before you can work with it\nauthor.books.add(book);\nconsole.log(author.books.contains(book)); // true\nauthor.books.remove(book);\nconsole.log(author.books.contains(book)); // false\nauthor.books.add(book);\nconsole.log(author.books.count()); // 1\nauthor.books.removeAll();\nconsole.log(author.books.contains(book)); // false\nconsole.log(author.books.count()); // 0\nconsole.log(author.books.getItems()); // Book[]\nconsole.log(author.books.getIdentifiers()); // array of string | number\nconsole.log(author.books.getIdentifiers('_id')); // array of ObjectId\n\n// array access works as well\nconsole.log(author.books[1]); // Book\nconsole.log(author.books[12345]); // undefined, even if the collection is not initialized\n")),Object(t.b)("h2",{id:"onetomany-collections"},"OneToMany Collections"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"OneToMany")," collections are inverse side of ",Object(t.b)("inlineCode",{parentName:"p"},"ManyToOne")," references, to which they need to point via ",Object(t.b)("inlineCode",{parentName:"p"},"fk")," attribute:"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id: ObjectId;\n\n  @ManyToOne()\n  author: Author;\n\n}\n\n@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id: ObjectId;\n\n  @OneToMany(() => Book, book => book.author)\n  books1 = new Collection<Book>(this);\n\n  // or via options object\n  @OneToMany({ entity: () => Book, mappedBy: 'author' })\n  books2 = new Collection<Book>(this);\n\n}\n")),Object(t.b)("h2",{id:"manytomany-collections"},"ManyToMany Collections"),Object(t.b)("p",null,"For ManyToMany, SQL drivers use pivot table that holds reference to both entities. "),Object(t.b)("p",null,"As opposed to them, with MongoDB we do not need to have join tables for ",Object(t.b)("inlineCode",{parentName:"p"},"ManyToMany"),"\nrelations. All references are stored as an array of ",Object(t.b)("inlineCode",{parentName:"p"},"ObjectId"),"s on owning entity. "),Object(t.b)("h3",{id:"unidirectional"},"Unidirectional"),Object(t.b)("p",null,"Unidirectional ",Object(t.b)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined only on one side, if you define only ",Object(t.b)("inlineCode",{parentName:"p"},"entity"),"\nattribute, then it will be considered the owning side:"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"@ManyToMany(() => Book)\nbooks1 = new Collection<Book>(this);\n\n// or mark it as owner explicitly via options object\n@ManyToMany({ entity: () => Book, owner: true })\nbooks2 = new Collection<Book>(this);\n")),Object(t.b)("h3",{id:"bidirectional"},"Bidirectional"),Object(t.b)("p",null,"Bidirectional ",Object(t.b)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined on both sides, while one is owning side (where references are store),\nmarked by ",Object(t.b)("inlineCode",{parentName:"p"},"inversedBy")," attribute pointing to the inverse side:"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"@ManyToMany(() => BookTag, tag => tag.books, { owner: true })\ntags = new Collection<BookTag>(this);\n\n// or via options object\n@ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\ntags = new Collection<BookTag>(this);\n")),Object(t.b)("p",null,"And on the inversed side we define it with ",Object(t.b)("inlineCode",{parentName:"p"},"mappedBy")," attribute pointing back to the owner:"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"@ManyToMany(() => Book, book => book.tags)\nbooks = new Collection<Book>(this);\n\n// or via options object\n@ManyToMany({ entity: () => Book, mappedBy: 'tags' })\nbooks = new Collection<Book>(this);\n")),Object(t.b)("h3",{id:"forcing-fixed-order-of-collection-items"},"Forcing fixed order of collection items"),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Since v3 many to many collections does not require having auto increment primary key, that\nwas used to ensure fixed order of collection items.")),Object(t.b)("p",null,"To preserve fixed order of collections, you can use ",Object(t.b)("inlineCode",{parentName:"p"},"fixedOrder: true")," attribute, which will\nstart ordering by ",Object(t.b)("inlineCode",{parentName:"p"},"id")," column. Schema generator will convert the pivot table to have auto increment\nprimary key ",Object(t.b)("inlineCode",{parentName:"p"},"id"),". You can also change the order column name via ",Object(t.b)("inlineCode",{parentName:"p"},"fixedOrderColumn: 'order'"),". "),Object(t.b)("p",null,"You can also specify default ordering via ",Object(t.b)("inlineCode",{parentName:"p"},"orderBy: { ... }")," attribute. This will be used when\nyou fully populate the collection including its items, as it orders by the referenced entity\nproperties instead of pivot table columns (which ",Object(t.b)("inlineCode",{parentName:"p"},"fixedOrderColumn")," is). On the other hand,\n",Object(t.b)("inlineCode",{parentName:"p"},"fixedOrder")," is used to maintain the insert order of items instead of ordering by some property. "),Object(t.b)("h2",{id:"propagation-of-collections-add-and-remove-operations"},"Propagation of Collection's add() and remove() operations"),Object(t.b)("p",null,"When you use one of ",Object(t.b)("inlineCode",{parentName:"p"},"Collection.add()")," method, the item is added to given collection,\nand this action is also propagated to its counterpart. "),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// one to many\nconst author = new Author(...);\nconst book = new Book(...);\n\nauthor.books.add(book);\nconsole.log(book.author); // author will be set thanks to the propagation\n")),Object(t.b)("p",null,"For M:N this works in both ways, either from owning side, or from inverse side. "),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// many to many works both from owning side and from inverse side\nconst book = new Book(...);\nconst tag = new BookTag(...);\n\nbook.tags.add(tag);\nconsole.log(tag.books.contains(book)); // true\n\ntag.books.add(book);\nconsole.log(book.tags.contains(tag)); // true\n")),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Collections on both sides have to be initialized, otherwise propagation won't work.")),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Although this propagation works also for M:N inverse side, you should always use owning\nside to manipulate the collection.")),Object(t.b)("p",null,"Same applies for ",Object(t.b)("inlineCode",{parentName:"p"},"Collection.remove()"),"."),Object(t.b)("h2",{id:"filtering-and-ordering-of-collection-items"},"Filtering and ordering of collection items"),Object(t.b)("p",null,"When initializing collection items via ",Object(t.b)("inlineCode",{parentName:"p"},"collection.init()"),", you can filter the collection\nas well as order its items:"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"await book.tags.init({ where: { active: true }, orderBy: { name: QueryOrder.DESC } });\n")),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"You should never modify partially loaded collection.")))}s.isMDXComponent=!0},233:function(e,o,n){"use strict";n.d(o,"a",(function(){return l})),n.d(o,"b",(function(){return d}));var t=n(0),i=n.n(t),a=i.a.createContext({}),r=function(e){var o=i.a.useContext(a),n=o;return e&&(n="function"==typeof e?e(o):Object.assign({},o,e)),n},l=function(e){var o=r(e.components);return i.a.createElement(a.Provider,{value:o},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var o=e.children;return i.a.createElement(i.a.Fragment,{},o)}},b=Object(t.forwardRef)((function(e,o){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,c=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===o.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),b=r(n),d=t,p=b[l+"."+d]||b[d]||s[d]||a;return n?i.a.createElement(p,Object.assign({},{ref:o},c,{components:n})):i.a.createElement(p,Object.assign({},{ref:o},c))}));function d(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=n.length,r=new Array(a);r[0]=b;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[c]="string"==typeof e?e:t,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);