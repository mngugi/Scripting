// Javascript Quick 10-Minute Guide
// JavaScript is a versatile language used for web development, server-side programming, and more. This guide provides a quick overview of its key features and syntax.
// Variables

let num = 10; // Number
// here num stores a number 10

var age = 25; // Number
// here age stores a number 25      
let name = "John"; // String
// here name stores a string "John"
const PI = 3.14; // Constant
// here PI is a constant with value 3.14
// Change the Value of Variables

num = 20; // Change value of num
// now num stores a number 20
age = 30; // Change value of age
// now age stores a number 30
name = "Jane"; // Change value of name
// now name stores a string "Jane"
// PI cannot be changed as it is a constant
// Data Types   
let isActive = true; // Boolean
// here isActive stores a boolean value true
let items = [1, 2, 3]; // Array
// here items stores an array with three numbers
let person = { name: "Alice", age: 28 }; // Object  
// here person stores an object with properties name and age        
// Functions        
console.log("\n--------\n") 
function greet() {
    console.log("Hello, World!");
    
}

// This function prints "Hello, World!" to the console      
//process.exit();
greet()

console.log("\n--------\n") 

// a second function that reads num1
let num1 = 67;
function readNum(n) {

    console.log(n);
    
}
readNum(num1);

console.log("\n--------\n") 

let latestMessage = "Global Warmning is real!  Please take action!";    
function displayMessage()   {
    console.log(latestMessage);
}
//  This function displays a message
displayMessage();
console.log("\n--------\n") 

let fruits = ["apple", "banana", "cherry"];
let country = "USA";
let result = `I like ${fruits[0]} from ${country}.`;

function displayAll(){
    console.log(fruits);
    console.log(country);
    console.log(result);
}
// This function displays the fruits, country, and result
displayAll();
console.log("\n--------\n") 
// integer value
let integer_number = -3;
console.log(integer_number);

// floating-point value
let float_number = 3.15;
console.log(float_number);
console.log("\n--------\n") 