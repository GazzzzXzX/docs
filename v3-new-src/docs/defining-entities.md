---
title: Defining Entities
---

Entities are simple javascript objects (so called POJO), decorated with `@Entity` decorator.
No real restrictions are made, you do not have to extend any base class, you are more than welcome
to [use entity constructors](entity-constructors.md), just do not forget to specify primary key with
`@PrimaryKey` decorator.

**`./entities/Book.ts`**

```typescript
@Entity()
export class Book implements IdEntity<Book> {

  @PrimaryKey()
  id: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title: string;

  @ManyToOne() // when you provide correct type hint, ORM will read it for you
  author: Author;

  @ManyToOne(() => Publisher) // or you can specify the entity as class reference or string name
  publisher?: Publisher;

  @ManyToMany() // owning side can be simple as this!
  tags = new Collection<BookTag>(this);

  constructor(title: string, author: Author) {
    this.title = title;
    this.author = author;
  }

}
```

You will need to mark the entity by implementing one of `*Entity` interfaces:

- `IdEntity<T>` for numeric/string PK on `id` property (`id: number`)
- `UuidEntity<T>` for string PK on `uuid` property (`uuid: string`)
- `MongoEntity<T>` for mongo, where `id: string` and `_id: ObjectId` are required
- `AnyEntity<T, PK>` for other possible properties (fill the PK property name to `PK` 
parameter, e.g.: `AnyEntity<Book, 'myPrimaryProperty'>'`)

As you can see, entity properties are decorated either with `@Property` decorator, or with one
of reference decorators: `@ManyToOne`, `@OneToMany`, `@OneToOne` and `@ManyToMany`. 

Here is another example of `Author` entity, that was referenced from the `Book` one, this 
time defined for mongo:

**`./entities/Author.ts`**

```typescript
@Entity()
export class Author implements MongoEntity<Author> {

  @PrimaryKey()
  _id: ObjectId;

  @SerializedPrimaryKey()
  id: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name: string;

  @Property()
  email: string;

  @Property()
  age?: number;

  @Property()
  termsAccepted = false;

  @Property()
  identities?: string[];

  @Property()
  born?: Date;

  @OneToMany(() => Book, book => book.author)
  books = new Collection<Book>(this);

  @ManyToMany()
  friends = new Collection<Author>(this);

  @ManyToOne()
  favouriteBook: Book;

  @Property({ version: true })
  version: number;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

}
```

More information about modelling relationships can be found on [modelling relationships page](relationships.md).

If you want to define your entity in Vanilla JavaScript, take a look [here](usage-with-js.md).

### Optional Properties

When you define the property as optional (marked with `?`), this will be automatically considered
as nullable property (mainly for SQL schema generator). 

> This auto-detection works only when you omit the `type` attribute.

## Virtual Properties

You can define your properties as virtual, either as a method, or via JavaScript `get/set`.

Following example defines User entity with `firstName` and `lastName` database fields, that 
are both hidden from the serialized response, replaced with virtual properties `fullName` 
(defined as a classic method) and `fullName2` (defined as a JavaScript getter).

> For JavaScript getter you need to provide `{ persist: false }` option otherwise the value
> would be stored in the database. 

```typescript
@Entity()
export class User {

  @Property({ hidden: true })
  firstName: string;

  @Property({ hidden: true })
  lastName: string;

  @Property({ name: 'fullName' })
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Property({ persist: false })
  get fullName2() {
    return `${this.firstName} ${this.lastName}`;
  }

}

const repo = orm.em.getRepository(User);
const author = repo.create({ firstName: 'Jon', lastName: 'Snow' });

console.log(author.getFullName()); // 'Jon Snow'
console.log(author.fullName2); // 'Jon Snow'
console.log(author.toJSON()); // { fullName: 'Jon Snow', fullName2: 'Jon Snow' }
```

## Entity file names

You are free to choose one of those formats for entity filename (for a `BookTag` entity):

- `BookTag.ts`
- `BookTag.model.ts`
- `book-tag.ts`
- `book-tag.model.ts`
- `book-tag.entity.ts`

Entity name is inferred from the first part of file name before first dot occurs, so you can 
add any suffix behind the dot, not just `.model.ts` or `.entity.ts`. 

> You can change this behaviour by defining custom `NamingStrategy.getClassName()` method.

## Using BaseEntity

You can define your own base entity with properties that you require on all entities, like
primary key and created/updated time. 

> If you are initializing the ORM via `entities` option, you need to specify all your
> base entities as well.

**`./entities/BaseEntity.ts`**

```typescript
import { v4 } from 'uuid';

export abstract class BaseEntity implements UuidEntity<BaseEntity> {

  @PrimaryKey()
  uuid = v4();

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

}
```

## Examples of entity definition with various primary keys

### Using id as primary key (SQL drivers)

```typescript
@Entity()
export class Book implements IdEntity<Book> {

  @PrimaryKey()
  id: number; // string is also supported

  @Property()
  title: string;

  @ManyToOne()
  author: Author;

}
```

### Using UUID as primary key (SQL drivers)

```typescript
import { v4 } from 'uuid';

@Entity()
export class Book implements UuidEntity<Book> {

  @PrimaryKey()
  uuid = v4();

  @Property()
  title: string;

  @ManyToOne()
  author: Author;

}
```

### Example of Mongo entity

```typescript
@Entity()
export class Book implements MongoEntity<Book> {

  @PrimaryKey()
  _id: ObjectId;

  @SerializedPrimaryKey() 
  id: string; // string variant of PK, will be handled automatically

  @Property()
  title: string;

  @ManyToOne()
  author: Author;

}
```

### Using WrappedEntity interface

```typescript
@Entity()
export class Book {

  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @ManyToOne()
  author: Author;

}

export interface Book extends WrappedEntity<Book, 'id'> { };
```

With your entities set up, you can start [using entity manager](entity-manager.md) and 
[repositories](repositories.md) as described in following sections. 
