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
