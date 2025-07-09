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
// boolean value
let isTrue = true;
// two symbols with the same description
let value1 = Symbol("programiz");
let value2 = Symbol("programiz");

console.log(value1 === value2);  // false
console.log("\n--------\n")
let student = {
    name: "John",
    age: 20,
    isActive: true,
    subjects: ["Math", "Science", "English"],
    address: {
        city: "New York",
        zip: "10001"
    }
};

function studentInfor() {
        
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        console.log(`Address: ${this.address.city}, ${this.address.zip}`);          
    } 
    // This function displays student information
    student.studentInfor = studentInfor;
    student.studentInfor();  
console.log("\n--------\n")
let x = 5;

// addition operator
console.log("Addition: x + 3 = ", x + 3);

// subtraction operator
console.log("Subtraction: x - 3 =", x - 3);

// multiplication operator
console.log("Multiplication: x * 3 =", x * 3);

// division operator
console.log("Division: x / 3 =", x / 3);

// remainder operator
console.log("Remainder: x % 3 =", x % 3);

// increment operator
console.log("Increment: ++x =", ++x);

// decrement operator
console.log("Decrement: --x =", --x);

// exponentiation operator
console.log("Exponentiation: x ** 3 =", x ** 3);
console.log("\n--------\n")
// assignment operator
let a = 7;
console.log("Assignment: a = 7, a =", a);

// addition assignment operator
a += 5;  // a = a + 5
console.log("Addition Assignment: a += 5, a =", a);

// subtraction assignment operator
a -= 5;  // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a);

// multiplication assignment operator
a *= 2;  // a = a * 2
console.log("Multiplication Assignment: a *= 2, a =", a);

// division assignment operator
a /= 2;  // a = a / 2
console.log("Division Assignment: a /= 2, a =", a);

// remainder assignment operator
a %= 2;  // a = a % 2
console.log("Remainder Assignment: a %= 2, a =", a);

// exponentiation assignment operator
a **= 2;  // a = a**2
console.log("Exponentiation Assignment: a **= 7, a =", a);
console.log("\n--------\n")