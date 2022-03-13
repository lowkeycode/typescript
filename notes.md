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

### Literal Types

Often used in combination with union types. The resultConversion will be forced to be one of the two strings. Handy when you only have a couple of options for something and dont need a map like type like an enum

```ts
const num1 = 2.8;
//  Type is inferred but it is literal as it is the exact literal number 2.8 (consider it like a hard coded type & value)


function combine(
  input1: number | string
  input2: number | string
  resultConversion: 'as-text' | 'as-number'
  ) {

}
```

### Aliases

Can be used with union types, giving a good name to avoid repetition and give some abstraction. Also can be used for say complex objects, for example a AdminUser type or something.

```ts
type Combinable = number | string;
type ConversionDescriptor = 'as-text' | 'as-number';

function combine(
  input1: Combinable
  input2: Combinable
  resultConversion: ConversionDescriptor
  ) {

}
```