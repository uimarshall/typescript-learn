# typescript-learn

In order to facilitate a clearer understanding of what Typescript is, it important to understand some concepts such as Statically vs. dynamically and strongly vs weakly typed languages.

## What is typescript?

It is a programming language which can be used as an alternative to JavaScript. It is known as the superset of the JavaScript language, which implies it extends the features and syntax of the JavaScript; It can do everything that JavaScript does plus additional features which is the TypeScript’s type system.
The main benefit of TypeScript is that it can highlight unexpected behavior in your code, reducing the chance of having frustrating /painful bugs in your code and saves time.
Again, what TypeScript helps to achieve is to write a cleaner and bug free code during development but when it comes to deployment, it has to be compiled down to JavaScript.

## How does browsers handle TypeScript?

Browsers by default do not understand TypeScript the way they understand JavaScript; Hence, when we write TypeScript, we then need to compile it down to JavaScript in order for the browser to understand, which is something very easy to do.

## Features that comes with TypeScript

**1. It allows us to use strict types**

What this means is that, If i declare a variable in TypeScript to be a particular data type in my program, for instance a String or an Integer, I cannot later in the program say I want to change the variable to another data type such as boolean or something else. That reduces the possibility of having so many errors in our program and the process of debugging and error-checking in our program becomes very easier. It also forces us to write cleaner code which is less error prone.
In contrast, JavaScript uses dynamically data types in which variables can change data types at any given point in the program.

**2. It supports modern features of JavaScript such as arrow functions, const, let etc**

This eventually compiles down to JavaScript.

**3. It comes with Extra Features such as Interfaces, tuples, generic etc**

## First Things First

It's always a good idea to build a house from the foundation, before we delve deeper into TypeScript, it is important to understand some fundamentals things things in JavaScript which includes:

> 1. Arrow Functions
>
> 2. The DOM
>
> 3. Classes

## System prerequisites

1. You need to have nodeJs installed on your system. You can follow this tutorial on how to install nodeJs on your system, we can then use npm (node package manager to install and compile TypeScript).

2. You need a text editor that you're comfortable with. If you don't already have have one, I'll recommend Visual Studio code.

## Installation

Using your command line interface (CLI), TypeScript can be installed from NPM package library using:

`npm install -g typescript`.

The above command installs TypeScript globally. It installs the `tsc` command which stands for `TypeScript Compiler`.

After the installation, it's advisable to check if TypeScript is installed properly on your machine, you can run:

`tsc --version`

If above command displays the compiler version such as Version 4.8.2, you can be rest assured that TypeScript is installed on your system.

## Upgrading or Downgrading to any or the latest version

From the Command Line Prompt, if you want to upgrade / downgrade Typescript to any specific version (e.g. 3.0, 3.8, 4.8.2 etc.), execute the below command:

`npm install -g typescript@3.0`

## Compiling TypeScript to JavaScript

What do we mean by compiling TypeScript? It means creating Typescript and then compiling it down to JavaScript so that it can be readable by the browsers.

From the command Line prompt, type the following command:

`tsc <name of typescript file>`

e.g `tsc script.ts`

`tsc` means the `TypeScript compiler`. The `tsc` comes bundled with typescript during installation via npm (`npm install -g typescript`).

_NOTE_: To avoid any challenges while during compilation, make you're inside the right directory in your file setup.

## Writing Your First TypeScript File

Create a file in your directory; you can give it any name or simply name it `script.ts` (`.ts` is the file extension for TypeScript), Then write some code in the file such as:

```Js

// script.ts
const country = 'Togo';
console.log(country);

const player = 'Gary';

console.log(player);
```

If you were to check the output of this code in the console of your browser, you'll discover that you won't see any output in the console because the browser cannot read TypeScript, to compile down to JavaScript, you can do it different ways by running the following command in your terminal:

1. `tsc script.ts script.js`

Here, you're saying that the `script.ts` should compile to a JavaScript file called `script.js`.

2. `tsc script.ts`

In the second case, you only put the `script.ts` file, and once you run the file and look in our current directory, we’ll see a `script.js` file next to `script.ts` automatically created for us. That’s the output from our script.ts file after tsc compiles or transforms it into a plain JavaScript file. And if we check the contents, we’ll see that it looks similar to what we wrote:

```Js

//script.js
var country = 'Togo';
console.log(country);
var player = 'Gary';
console.log(player);

```

## Why we see `var` in the JavaScript file and not `const` or `let`.

We're seeing var instead of const because `const` is still to some extent, considered as a new feature in JavaScript and not absolutely supported across all browsers. Hence, we have the `var` (older version) which is supported by most browsers.

## What happens if both the script.ts and script.js are opened in your Text editor?

You'll discover that certain portions in the `script.ts` file is underlined to indicate an error in the file. You may see an error such as: `Cannot redeclare block-scoped variable 'country'.ts(2451)`

This error doesn't really matter since the browser will not read the `script.ts` file in the first place.
The error is appearing because both files are opened at the same time. In order not to see the error again, you simply close one of the file, in this case, the `script.js` file.

## How To Automatically Watch the changes in the script.ts file.

So far we've been manually doing the compilation to JavaScript when we run: `tsc script.ts`. To automatically watch the changes once we make changes to the `script.ts` file we run:

`tsc script.ts -w`

The `-w` means `watch`; and recompile to script.js once any change is noticed in the `script.ts` file.

## Types Basic

Programming is all about Data-Types and Algorithm.

When we declare a variable and assign to it a value; The value we've assigned is always of a certain type either in JavaScript or any other programming language. For example, a `string` or a `number`.

`The major difference between TypeScript and JavaScript is that TypeScript uses 'strict' types while JavaScript does not`.

This means if we define a variable as String such as: `let name = "Fred"` in TypeScript, it will always remain a string and cannot be changed to other types later.

> Let's do a little practice:

```Js
//script.ts file
let student = 'Asher';
let score = 10;
let isTutor = false;

student = 5; //this will throw an error.

// However, we can change the student variable to hold another value which is a String
student = 'Rooney';

```

We can see that a value of type String is assigned to the `student` variable. If we try to change it by assigning a value of `5` (a `number`) to it we would see an error such as: `Type 'number' is not assignable to type 'string'.ts(2322)` . You can see this error by hovering over `student = 5` in your text editor.

However, we can change the student variable to hold another value which is a String.

e.g.

```js
student = 'Rooney';
```

> In summary, we can change the values and not the types.

The same thing is applicable to all other data types.

Note that, we don't have to explicitly or specifically define the type a variable will be during variable declaration. Typescript uses Inference or infer the type that we use based on the value we assign when we declare a variable.

We can just assign a variable a value and Typescript infer its type.

## Passing a variable as an argument to a function.

We can declare what type of variable we expect to be passed into a function as an argument.

### CASE 1:

If no type is specified in the argument passed into the function, the program will compile but will not give the expected result. (You can check your console):

```Js
// script.ts

const findSquareRoot = (value) => {
  return Math.sqrt(value);
};

console.log(findSquareRoot('hello')); //this will return a NAN

```

If you check your console in the browser, you will see that the output is a NAN, indicating that it is not the correct output expected.

### CASE 2:

To declare what type of variable you want to pass, you put a `colon`, then specify the `type`.

```js
// script.ts

// If you compile this code using `tsc script.ts` on your terminal, It will throw an error such as:
// "error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'".

const findSquareRoot = (value: number) => {
  return Math.sqrt(value);
};

console.log(findSquareRoot('hello'));
```

### CASE 3

```js
// script.ts

// We pass in the correct argument here.

const findSquareRoot = (value: number) => {
  return Math.sqrt(value);
};

console.log(findSquareRoot(9)); //This will output 3
```

### What you should take away

TypeScript allows us to do type-checking during development which enables us to write cleaner code that is bug free. It helps us eliminate the frustrations of runtime error.

## Primitive Types

Since TypeScript extends JavaScript, meaning TypeScript can do anything that can be done with JavaScript, and still adds extra features to it.

It follows that TypeScript supports some basic types (primitives) you may already know in JavaScript.

There are three main primitives in JavaScript and TypeScript.

`boolean` - This entails `true` or `false` values.
`number` - This entails integers or whole numbers and floating point values.
`string` - This entails a sequence or strings of characters or text values such as "Hello world".

## How the Types are Assigned

When creating a variable, there are two main ways TypeScript assigns a type:

1. Explicit
2. Implicit

### Explicit Type

In Explicit type, the data type assigned to a variable is defined or explicitly stated during the variable declaration:

```js
// script.ts
let profession: string = 'programmer'; // the Type annotation here is a 'string'
profession = 50; // re-assigning a Type 'number' will result in an error
```

Any attempt to reassign another type other a String in this case will result in an error.

If we don't want to assign a value during the variable declaration, we can still define the type explicitly and assign the value later.
Example:

```js
// script.ts
let language: string;
let followers: number;
let isBeginner: boolean;

language = 'TypeScript';

followers = true; //TypeScript will throw an error if data types do not match.
```

Explicit assignment helps us to catch bugs or errors in our code during development and not at runtime.

### Implicit Type

In Implicit assignment, TypeScript infers the type based on the value assigned to a variable.

### The Problem With Implicit Type

The challenges using Implicit type is that JavaScript will not throw an error for mismatched types and this could results in runtime errors because the code will run normally if written in JavaScript.

Example:

```Js
let club = 'Young boys'; // inferred to type string
club = 20; // JavaScript will not throw an error

```

NOTE:

`The type names String, Number, and Boolean (starting with capital letters) are legal, but refer to some special built-in types that will very rarely appear in your code. Always use string, number, or boolean for types.`

# SPECIAL TYPES

1. ARRAYS

## Explicitly declaring an array

````js
const names: string[] = []; // This can only accept strings as array items.
names.push("Peter"); // no compiler error
names.push(8); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

## The Different Ways An Array Works using Type Inference

TypeScript can infer the type of an array if it has values or array items.

> Initialize An Array With Only One type as array items or list items.
> e.g:

```js
// Initialize the array with string types
let languages = ['Ruby', 'Python', 'TypeScript'];
````

If we initialize an array to contain only one type as array items, TypeScript will not allow us to add any other data type to array. In the example above, we can only add strings and not any other data type such as: number, boolean etc.

> Initialize An Array With Mixed type as array items or list items.

```js
// Initialize the array with mixed types
let mixedTypes = ['Ruby', 3, true];
```

Typescript will permit us to add other data types if we declare the array with mixed types.

> NB: If we declare a variable to be a particular type, we cannot change that type.

The `Readonly` keyword
The readonly keyword can prevent arrays from being altered.

```js
const names: readonly string[] = ["John"];
names.push("Doe"); // Error: Property 'push' does not exist on type 'readonly string[]'.
```

# OBJECTS

```js
let user = {
  name: 'John',
  email: 'john@email.com',
  age: 30,
};
```

All the properties `(name, email, age)` of the object can be updated provided their values matches the types as declared in the object.

```js
user.name = 'Doe'; // no compiler error.
user.name = 40; // Error: Type 'number' is not assignable to type 'string'.ts(2322)
```

> No Additional property can be added to the original object.

```js
user.isOnline: false //Error: Property 'isOnline' does not exist on type '{ name: string; email: string; age: number; }'.ts(2339)
```

The property `isOnline` does not exist on the original object (user). Once we've defined the object we cannot add additional property unto it.

# Optional Properties

Objects are used to store data values in `key:value` pairs. The key is usually referred to as the property/properties of the object. Hence, Optional properties are properties that don't have to be defined in the object definition.

> Example: without an optional property

The lines of code below will output this error: `Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'`

```js
// script.ts file
const profile: { name: string, age: number } = {
  name: 'Dave',
};
profile.age = 18;
```

> Example with an optional property.

```js
// script.ts file
const country: { name: string, population?: number } = {
  // no error
  name: 'Brazil',
};
country.population = 100000;
console.log(country);
```

## Index Signatures

Index signatures can be used for objects without a defined list of properties.

> Example

```js
const person: { [index: string]: number } = {};
person.age = 45; // no error
console.log(person);

person.name = 'Anselm'; // Error: Type 'string' is not assignable to type 'number'.
```

# EXPLICIT TYPES DECLARATIONS

Once you declare a variable explicitly to be a certain type, you cannot later assign to it a value of another type.

## STRINGS

```JS
// script.ts file
const subject: string
```

## NUMBER

```JS
let count: number
```

## BOOLEAN

```js
let isAdmin: boolean;
```

## ARRAY

1. Initialize array with array items of string type:

```js
let fruits: string[];
```

2. Initialize an empty array

```js
let protein: string[] = [];
```

# UNION

Union type can be used to define multiple types in an Array. We use parenthesis to separate the unions when working with an array.

> Example:

```js
let mixedArray: (string | number)[] = [];
mixedArray.push('hello world');
mixedArray.push(2);
mixedArray.push(true); // Compiler error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)
console.log(mixedArray);

// UNION IN A STRING`

let alphanumeric: string | number;
alphanumeric = '10101';
alphanumeric = '0123456789abcdef';
alphanumeric = true; //Compiler error: Type 'boolean' is not assignable to type 'string | number'.
```

## OBJECT

```js
let car: object;
car = {
  name: 'Camry',
  color: 'black',
};

car = []; // This works because, an Array is also considered to be an object.

// To exclude an array being considered to be an object, we explicitly declare the object as:

let product = {
  name: 'phone',
  price: 30,
};

// NB: The object must contain properties, otherwise it will can still set the variable(product) to be equal to an Array.
product = []; //Compiler error: Type 'never[]' is missing the following properties from type '{ name: string; price: number; }': name, price ts(2739)
```

## SPECIAL TYPES

1. ANY

As the name implies; whenever we use ANY in a certain variable declaration, we're saying the variable can hold any `type`, be it boolean, string, numbers etc.

A variable that has `any` as a type annotation, might be defined or declared as a string initially and later change it to a number in the future without any noticeable error.

`any` is a type that disables type checking and practically allows all known types to be used.

> NOTE: It is advisable that you avoid using `ANY` at "any" cost...

```js
// script.ts file
let counter: any = 1;
counter = true;
console.log(counter);
counter = 'hello world';
console.log(counter);

const arr: any[] = [];
arr.push(true);
arr.push(5);
arr.push('hi');
console.log(arr);

// Objects
let obj: { value1: any, value2: any };
obj = { value1: 'Ann', value2: 'Fred' };
console.log(obj);
```

Since we can change the value to anything, It defeats the essence of using TypeScript in the first place except on some rare occasions. It does indicate compile errors during development with regard to types, no hints on what type a value assigned to a variable ought to be.

# // TODO

When Can We use ANY?

# INTEGRATING TYPESCRIPT INTO YOUR PROJECT & TSCONFIG

## Configuring The Compiler

Whenever, we integrate typescripts into our project we want to enforce type to write cleaner code and bug free. One configuration that is integral to this is the `tsconfig` file.

When creating a project we usually have a lot of files that are are written in typescript, while some are in JavaScript as well as some other file. It is important we separate all these files.
The Typescript file, typically goes to the `src` folder because the TypeScript acts as a devDependencies for us (we use Ts during development), while JavaScript files goes to the `public` or `dist` folder. The JavaScript goes into public folder because, after the Typescript has compiled into JavaScript, it is then deployed into some servers which we later serve to the public.
Typically, in our folder structure, we see things like `index.html`, the `css` files and `JavaScript` going inside the `public folder`, while the `src` folder houses our source code (stuffs we don't want to deploy).

HOW TO COMPILE THE .TS FILES FROM THE `SRC` FOLDER INTO THE `PUBLIC` FOLDER.

On your command prompt, type:
`tsc --init`.
This command, will create a `tsconfig.json` file for us.

# EXPLAINING THE DIFFERENT CONFIGURATIONS OPTIONS INSIDE THE TSCONFIG.JSON FILE.

`"target": "es2016",` - means the output of the js file after the typescript must have compiled.

`"rootDir": "./src",`- means all our root directory file should be inside the `src` folder.
`"outDir": "./public"`- Is where everything inside the `rootDir` is compiled to.

HOW TO PREVENT OTHER .TS FILES OUTSIDE THE SRC FOLDER FROM COMPILING INTO PUBLIC FOLDER.

If we leave our configuration the way it is, it means even though we create other `.ts` files outside the `src` folder, it will still compile. In order to prevent this we add `"include": ["src"]` to the end of the `tsconfig.json` file after the `compilerOptions` object. This means we're only going to compile things inside the `src` folder.

Example:
If we create a file `greet.js` inside the `src` folder, it will compile to `greet.js` inside the `public` folder.

```js
// greet.ts
console.log('hello world!');
```

## FUNCTIONS

## How To Declare a function type

```js
let prayer: Function;

prayer = () => {
  console.log('So help me God');
};
```

## Passing parameters into a functions

```js
let sum = (a: number, b: number) => {
  console.log(a + b);
};

sum(3, 5); //output 8
```

## Passing Optional parameters into functions

We pass an optional parameter by appending the `?` sign to the parameter in question.

```js
let summation = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c); // we will have undefined as output if a third parameter is not passed when we call the function.
};

summation(3, 7); //output 10
```

Another way to handle an optional parameter is to pass in a default value and remove the ? sign.

The below function will output `9` if we `log c` to the console (i. e. `console.log(c)`). 9 being the default value; but If we pass `40` as the third parameter to the function when it is called, it will output 20 instead if we log `c` to the console.

```js
let summation2 = (a: number, b: number, c: number | string = 9) => {
  console.log(a + b);
  console.log(c); // This will now output 9 and not undefined.
};

summation2(3, 7); //output 10
```

> NOTE: When passing an optional parameter, you must ensure that your required parameters come first while the optional parameter comes last. In the above code example, we see that parameter `c` comes last.

Otherwise, the arguments (e.g. `summation2(3, 7, 12)`; ) will get mixed up.

# TypeScript Can Infer The return value of a Function.

```js
// Infer the return value from the function

let multiply = (a: number, b: number) => {
  return a * b;
};

let products = multiply(2, 3);
```

When you hover over `products`, it will tell you that `products` is a number.

If we want to explicitly return a number, we write the code as:

```js
let multiply = (a: number, b: number): number => {
  return a * b;
};

let products = multiply(2, 3);
```

## Void type

When we don't return anything inside the function, it returns a Void. It represents the complete absence of a return value.

When it compiles to JavaScript, the value is `undefined`.

```js
let subtract = (a: number, b: number): void => {
  console.log(a - b);
};
```

> NOTE: A function whose declared type is neither 'void' nor 'any' must return a value.

# Working with Union Types

Union Types comes into play when working with Logical Operator `OR`, commonly employed in Booleans.

`OR` means either `this` or `that`.
It’s easy to provide a value matching a union type - simply provide a type matching any of the union’s members.

The Symbol for Union in TypeScript is the `|` symbol.

TypeScript will only allow an operation if it is valid for every member of the union.
For example, if you have the union `string | number`, you can’t use methods that are only available on string:

```js
let getAlphaNumeric = (password: number | string) => {
  console.log(password.toLowerCase());
};
```

The above code will throw an error: `Property 'toLowerCase' does not exist on type 'string | number'.
Property 'toLowerCase' does not exist on type 'number'`.

## TypeScript Type Aliases

First, what is an `Alias`?
An alias can be any name used in place of ones birth name.

Type Aliases allow defining types with a custom name (an Alias).

Type Aliases can be used for primitives like `string` or more complex types such as `objects` and `arrays`.

Again, to facilitate a clearer understanding, think of `Aliases` as reusable codes.

`Aliases` comes in handy when working with `unions`.

When working with functions and specifying the type for the parameters passed to the function, It could get cumbersome especially with object types.

# TYPE ALIASES

## The syntax for a type alias is:

```js
type AliasName = {
  x: number,
  y: number,
};
```

> SAMPLE CODE

```js
let article = (id: number | string, author: string) => {
  console.log(`This article: ${id} was written by ${author}`);
};
```

```js
let order = (user: { name: string, id: number | string }) => {
  console.log(`${user.name}: placed an order with the id: ${user.id}`);
};
```

Consider the two functions above, they have similar type specifications in the params they take in.We could even have more functions like this in our code. In such cases, it is better to use alias to make our code more cleaner and readable instead of writing the same code over and over again.

## TRANSFORMING THE CODE USING ALIASES

```js
type alphanumeric = number | string;
type objParamsWithNameAndId = { name: string, id: alphanumeric };
```

## We can create a file to hold our `Aliases`.

We can then replace `number | string;` with `alphanumeric` anywhere in the code.

```js
let article = (id: alphanumeric, author: string) => {
  console.log(`This article: ${id} was written by ${author}`);
};
```

```js
let order = (user: { name: string, id: alphanumeric }) => {
  console.log(`${user.name}: placed an order with the id: ${user.id}`);
};
```

## FURTHER IMPROVEMENTS ON THE SAME CODE

```js
let article = (id: alphanumeric, author: string) => {
  console.log(`This article: ${id} was written by ${author}`);
};
```

```js
let order = (user: objParamsWithNameAndId) => {
  console.log(`${user.name}: placed an order with the id: ${user.id}`);
};
```
