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
club = 20; // JavaScript will not throw an error
