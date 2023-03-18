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
