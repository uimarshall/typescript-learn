var student = 'Asher';
var score = 10;
var isTutor = false;
// Type 'number' is not assignable to type 'string'.
// student = 5;
// However, we can change the student variable to hold another value which is a String
student = 'Rooney';
// A function to returns the square root of a number
var findSquareRoot = function (value) {
    return Math.sqrt(value);
};
console.log(findSquareRoot(9)); //This will output 3
var profession = 'programmer'; // the Type annotation here is a 'string'
profession = 50; // re-assigning a Type 'number' will result in an error
// If we don't want to assign a value during variable declaration, we can  still define the type explicitly  and assign  the value later.
// Example:
var language;
var followers;
var isBeginner;
language = 'TypeScript';
// Implicit Assignment
var club = 'Young boys'; // inferred to type string
club = 20; // JavaScript will not throw an error but Typescript will do.
// ARRAY
var languages = ['Ruby', 'Python', 'TypeScript'];
languages.push('Perl'); // will work.
languages.push(50); // will throw an error in Ts (Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)).
languages[0] = true; // will throw an error in Ts (Type 'boolean' is not assignable to type 'string'.ts(2322)).
var numbers = [4, 5, 70];
numbers.push('hello'); // will throw an error in Ts (Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
var mixedTypes = [true, 2, 'stop', true, 29];
mixedTypes.push('fred'); // will compile without error
mixedTypes.push(90); // will compile without error
// The `Readonly` keyword
// The readonly keyword can prevent arrays from being altered.
var names = ['John'];
names.push('Doe'); // Error: Property 'push' does not exist on type 'readonly string[]'.
// OBJECTS
var user = {
    name: 'John',
    email: 'john@email.com',
    age: 30
};
// All the properties (name, email, age) of the object can be updated provided their values matches the types as declared in the object.
user.name = 'Doe'; // no compiler error.
user.name = 40; // Error: Type 'number' is not assignable to type 'string'.ts(2322)
// No Additional property can be added to the original object.
user.isOnline;
false; //Error: Property 'isOnline' does not exist on type '{ name: string; email: string; age: number; }'.ts(2339)
// *** It can be updated to a new object*****
// The initial object can be updated to a new object, but it must maintain the same structure of having names, email and age properties.
// The values can change but the type must remain the same.
user = {
    name: 'Doe',
    email: 'doe@email.com',
    age: 100
}; // All the values are now changed.
// Altering the structure will result in an error
user = {
    name: 'Doe',
    email: 'doe@email.com'
};
// Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.
// Example: without an optional property
// The lines of code below will output this error: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'
var profile = {
    name: "Dave"
};
profile.age = 18;
// Example with an optional property
var country = {
    name: "Brazil"
};
country.population = 100000;
console.log(country);
// Index Signatures
// Index signatures can be used for objects without a defined list of properties.
// Example
var person = {};
person.age = 45; // no error
console.log(person);
person.name = "Anselm"; // Error: Type 'string' is not assignable to type 'number'.
// EXPLICIT DECLARATIONS
var subject;
var count;
var isAdmin;
// Initialize array with array items of string type
var fruits;
// Initialize an empty array 
var protein = [];
// UNION
// Union type can be used to define multiple types in an Array. We use parenthesis to separate the unions when working with an array.
// Example: 
var mixedArray = [];
mixedArray.push("hello world");
mixedArray.push(2);
mixedArray.push(true); // Compiler error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)
console.log(mixedArray);
// UNION IN A STRING
var alphanumeric;
alphanumeric = "10101";
alphanumeric = "0123456789abcdef";
alphanumeric = true; //Compiler error: Type 'boolean' is not assignable to type 'string | number'.
// OBJECT
var car;
car = {
    name: "Camry",
    color: "black"
};
car = []; // This works because, an Array is also considered to be an object.
// To exclude an array being considered to be an object, we explicitly declare the object as:
var product = {
    name: "phone",
    price: 30
};
// NB: The object must contain properties, otherwise it will can still set the variable(product) to be equal to an Array.
product = []; //Compiler error: Type 'never[]' is missing the following properties from type '{ name: string; price: number; }': name, price ts(2739)
// ANY
var counter = 1;
counter = true;
console.log(counter);
counter = "hello world";
console.log(counter);
// Array
var arr = [];
arr.push(true);
arr.push(5);
arr.push("hi");
console.log(arr);
// Objects
var obj;
obj = { value1: "Ann", value2: "Fred" };
console.log(obj);
