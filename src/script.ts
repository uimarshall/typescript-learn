let student = 'Asher';
let score = 10;
let isTutor = false;

// Type 'number' is not assignable to type 'string'.

// student = 5;

// However, we can change the student variable to hold another value which is a String
student = 'Rooney';

// A function to returns the square root of a number

const findSquareRoot = (value: number) => {
  return Math.sqrt(value);
};

console.log(findSquareRoot(9)); //This will output 3

let profession: string = 'programmer'; // the Type annotation here is a 'string'
profession = 50; // re-assigning a Type 'number' will result in an error

// If we don't want to assign a value during variable declaration, we can  still define the type explicitly  and assign  the value later.
// Example:

let language: string;
let followers: number;
let isBeginner: boolean;

language = 'TypeScript';

// Implicit Assignment

let club = 'Young boys'; // inferred to type string
club = 20; // JavaScript will not throw an error but Typescript will do.

// ARRAY

let languages = ['Ruby', 'Python', 'TypeScript'];

languages.push('Perl'); // will work.
languages.push(50); // will throw an error in Ts (Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)).

languages[0] = true; // will throw an error in Ts (Type 'boolean' is not assignable to type 'string'.ts(2322)).

let numbers = [4, 5, 70];
numbers.push('hello'); // will throw an error in Ts (Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

let mixedTypes = [true, 2, 'stop', true, 29];

mixedTypes.push('fred'); // will compile without error
mixedTypes.push(90); // will compile without error

// The `Readonly` keyword
// The readonly keyword can prevent arrays from being altered.

const names: readonly string[] = ['John'];
names.push('Doe'); // Error: Property 'push' does not exist on type 'readonly string[]'.

// OBJECTS

let user = {
  name: 'John',
  email: 'john@email.com',
  age: 30,
};

// All the properties (name, email, age) of the object can be updated provided their values matches the types as declared in the object.

user.name = 'Doe'; // no compiler error.
user.name = 40; // Error: Type 'number' is not assignable to type 'string'.ts(2322)

// No Additional property can be added to the original object.

user.isOnline: false; //Error: Property 'isOnline' does not exist on type '{ name: string; email: string; age: number; }'.ts(2339)

// *** It can be updated to a new object*****

// The initial object can be updated to a new object, but it must maintain the same structure of having names, email and age properties.
// The values can change but the type must remain the same.

user = {
  name: 'Doe',
  email: 'doe@email.com',
  age: 100,
} // All the values are now changed.

// Altering the structure will result in an error
user = {
  name: 'Doe',
  email: 'doe@email.com',
  // age: 100, 
  // Error: Property 'age' is missing in type '{ name: string; email: string; }' but required in type '{ name: string; email: string; age: number; }'.ts(2741)
}

// Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.

// Example: without an optional property

// The lines of code below will output this error: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'

const profile: { name: string, age: number } = { 
  name: "Dave",
};
profile.age = 18;

// Example with an optional property
const country: { name: string, population?: number } = { // no error
  name: "Brazil"
};
country.population = 100000;
console.log(country);



// Index Signatures
// Index signatures can be used for objects without a defined list of properties.

// Example
const person: { [index: string]: number } = {};
person.age = 45; // no error
console.log(person);

person.name = "Anselm"; // Error: Type 'string' is not assignable to type 'number'.

// EXPLICIT DECLARATIONS
const subject: string
let count: number
let isAdmin: boolean
// Initialize array with array items of string type
let fruits: string[]
// Initialize an empty array 
let protein: string[] = []

// UNION
// Union type can be used to define multiple types in an Array. We use parenthesis to separate the unions when working with an array.
// Example: 


let mixedArray: (string|number)[] = []
mixedArray.push("hello world")
mixedArray.push(2)
mixedArray.push(true)// Compiler error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)
console.log(mixedArray);

// UNION IN A STRING

let alphanumeric: string|number;
alphanumeric ="10101"
alphanumeric= "0123456789abcdef"
alphanumeric= true //Compiler error: Type 'boolean' is not assignable to type 'string | number'.

// OBJECT

let car: object;
car = {
  name: "Camry",
  color: "black",
}

car = [] // This works because, an Array is also considered to be an object.

// To exclude an array being considered to be an object, we explicitly declare the object as:

let product = {
  name: "phone",
  price:30
}

// NB: The object must contain properties, otherwise it will can still set the variable(product) to be equal to an Array.
product = [] //Compiler error: Type 'never[]' is missing the following properties from type '{ name: string; price: number; }': name, price ts(2739)

// ANY

let counter: any = 1
counter = true
console.log(counter);
counter = "hello world"
console.log(counter);

// Array
const arr: any[] = []
arr.push(true)
arr.push(5)
arr.push("hi")
console.log(arr);

// Objects
let obj: {value1: any, value2: any}
obj = {value1: "Ann", value2: "Fred"}
console.log(obj);

// Functions

// Declare a function type
let prayer: Function

prayer = () => {
  console.log("So help me God");
  
}

// Passing parameters into a functions

let sum = (a: number, b: number) => {
  console.log(a + b);

}

sum(3, 5) //output 8

// Passing Optional parameters into functions

// We pass an optional parameter by appending the ? sign to the parameter in question.

let summation = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c); // we will have undefined as output if a third parameter is not passed when we call the function.
  
  
};

summation(3, 7) //output 10

// Another way to handle an optional parameter is to pass in a default value and remove the ? sign

// The below function will output 9 if we log c to the console (i. e. console.log(c)). 9 being the default value; but If we pass 40 as the third parameter to the function when it is called, it will output 20 instead if we log `c` to the console.

let summation2 = (a: number, b: number, c: number | string = 9) => {
  console.log(a + b);
  console.log(c); // This will now output 9 and not undefined.
  
  
};

summation2(3, 7) //output 10

// Infer the return value from the function

let multiply = (a: number, b: number): number => {
  return a * b;
};

let products = multiply(2, 3)

// Void type

// When we don't return anything inside the function, it returns  a Void. It represents the complete absence of a return value.

// When it compiles to JavaScript, the value is `undefined`.

let subtract = (a: number, b: number): void =>{
  console.log(a-b);
  
}

// UNION TYPES

let getAlphaNumeric = (password: number | string) => {
console.log(password.toLowerCase());
}

// The above code will throw an error: Property 'toLowerCase' does not exist on type 'string | number'.
  // Property 'toLowerCase' does not exist on type 'number'.

// TYPE ALIASES

// The syntax for a type alias is:

type AliasName = {
  x: number;
  y: number;
};
  
// let article = (id: number | string, author: string) => {
// console.log(`This article: ${id} was written by ${author}`);
// }

// let order = (user: {name: string, id: number | string} ) => {
//   console.log(`${user.name}: placed an order with the id: ${user.id}`);
  
// }

// Consider the two functions above, they have similar type specifications in the params they take in.We could even have more functions like this in our code. In such cases, it is better to use alias to make our code more cleaner and readable instead of writing the same code over and over again.

// TRANSFORMING THE CODE USING ALIASES


type alphanumeric = number | string;
type objParamsWithNameAndId = {name: string, id: alphanumeric}

// We can create a file to hold our `Aliases`
// We can then replace `number | string;` with `alphanumeric` anywhere in the code.

// let article = (id: alphanumeric, author: string) => {
// console.log(`This article: ${id} was written by ${author}`);
// }

// let order = (user: {name: string, id: alphanumeric} ) => {
//   console.log(`${user.name}: placed an order with the id: ${user.id}`);
  
// }

// FURTHER IMPROVEMENTS ON THE SAME CODE

let article = (id: alphanumeric, author: string) => {
console.log(`This article: ${id} was written by ${author}`);
}

let order = (user: objParamsWithNameAndId ) => {
  console.log(`${user.name}: placed an order with the id: ${user.id}`);
  
}

// FUNCTION SIGNATURES

// Example of function signature
let simpleMath: (x: number, y: number) => void;

// The variable `simpleMath` has a signature of `(x: number, y: number) => void;`, therefore, it can be used to hold a similar function in the future which has the same signature as `(x: number, y: number) => void.

// Example:
simpleMath = (num_1: number, num_2: number ) => {
  console.log(`The addition of num_1 and num_2 is: ${num_1} + ${num_2}`);
}

// Example 2

let appearances: (game_1: number, game_2: number, featured: boolean) => number;

appearances = (played_1: number, played_2: number, isOnPitch: boolean) => {
  if (isOnPitch === true) {
    return played_1 + played_2
    
  } else {
   return played_1
  }
}

// For Objects

let profiles: (user: {name: string, age: number}) => void;

profiles = (subscriber: {name: string, age: number}) => {
  console.log(`My name is: ${subscriber.name} and my age is ${subscriber.age}`);
  
}


