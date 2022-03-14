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


### Function Types

We can set variables that we want to use to hold pointers to functions that we will call later in our code by giving them the type of Function.

```ts
const add = (a: number, b: number) => {
  return a + b;
}

const printStuff = () => {
  console.log('Printing stuff')
}

let combine;

const combine = add;

combine = 25;
// This causes a runtime error
// OR
combine = printStuff;
// This also cause a runtime error

console.log(combine(5, 10))
```

Assigning a Function type

```ts
const add = (a: number, b: number) => {
  return a + b;
}

const printStuff = () => {
  console.log('Printing stuff')
}

let combine: Function;

const combine = add;

combine = 25;
// Typescript now catches this error at compilation
// BUT
combine = printStuff;
// This one still causes an error at runtime

console.log(combine(5, 10))
```

To make things even better we can get more specific with our function defining what types our function should take in as well as what it should return. (When assigning function type we can use whatever params we want in the type definition)

```ts
const add = (a: number, b: number) => {
  return a + b;
}

const printStuff = () => {
  console.log('Printing stuff')
}

let combine: (num1: number, num2: number) => number;

const combine = add;

// Now both below will cause a compilation error
combine = 25;
combine = printStuff;

console.log(combine(5, 10))
```

Callback functions can be defined in the () as a parameter when defining the higher order function the exact same way as above

### Watch Mode

The TS compiler has watch mode built in

tsc app.ts --watch
OR
tsc app.ts -w


Slap a...

```json
"start": "lite-server & tsc app.ts -w"
```

...in your package.json and bob's your fuckin' uncle