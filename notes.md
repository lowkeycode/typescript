# TypeScript


## Types

### Tuples

Are fixed length and types of arrays. We define Tuples with [] square brackets then the type at each position.

```ts
const person: {
  name: string
  role: [number, string]
} = {
  name: 'Cam',
  role: [2, 'author']
}
```

### Enums

Automatically enumerated global constant identifiers. They provide a list of more human readable numbers. For example if a person had a role but they were numeric, you could quickly forget what that number represents.

```ts
const person = {
  name: 'Cam',
  role: 45
}
```

Now with enums we can provide a human readable version for the numbers that are mapped behind the scenes.

```ts
enum Role { ADMIN, AUTHOR, NORMAL };
  // (enum member) Role.ADMIN = 0

const person = {
  name: 'Cam',
  role: Role.ADMIN
}

```

You can also provide default for the enum values, the subsequent enums will pick up incrementing from the most recent set default.

Ex.) Role.NORMAL = 12

```ts
enum Role { ADMIN = 5, AUTHOR = 11, NORMAL };
  // (enum member) Role.ADMIN = 0
```