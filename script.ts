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
