console.log("My name is Pride");

// Variables
// Declaring variables uses the var, let, or const keywords

// var is a function-scoped and can be redeclared and updated
var name = "Pride";
console.log(name)
name = "Malen Pride";

// let is block-scoped and can be updated but not redeclared
let age = 25;
console.log(age);
age = 18;
console.log("My age has been changed because am just a girl",age);

// const is block-scoped and cannot be updated or redeclared
const country = "Uganda";
console.log(country);
//country = "Kenya"; // This will throw an error because const cannot be reasigned

// Data types 
// Java script has several data types including;
// 1. String
// A string data type is a text ie "uganda", major trait is the quotes.
let greeting = "Hello, how are you?";
console.log(greeting);
console.log(typeof greeting);

// 2. Number
let x = 10;
let y = "12"
console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);

// 3. boolean
// 4. undefined 
// 5. null 
// 6. symbol 
// expln of symbol data type 
let a = 5
let b =3
console.log(a + b);  // addition


// Conditionals in Javascript
// if statement
// defn of if statement 
let condition = true;
let condition1 = false;
let condition2 = false;
let condition3 = true;

// if-else statement 
// defn of if-else statement

if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false 
}

// else-if statement when having more than two conditions to execute
// defn of else-if statement 
if (condition) {
    // code to be executed if conditional is true 
} else if (condition2) {
    // code to be executed if condition2 is true
} else if (condition3) {
    // code to be executed if both conditional and condition2 are false
} else {
    // code to be execute if all conditions are false 
}

// Practice examples 
let mark = 75;

if (mark > 69) {
    console.log("very good, you have passed the exam")
}

if (mark >= 70){
    console.log("You have passed the exam")
} else {
    console.log("You have failed the exam")
}


// Comparison Operators
// 1.  Equal to (==)
// Example of equal to operator
if (name = "John"); //This will assign "John" to name. 

//2. Not equal to (!=)
//3. Strict equal to (===)
//4. Strict not equal to (!==)
//5. Greater than (>)
//6. Greater than or equal to (>=)
//7. Less than (<)
//8. Less than or equal to (<=)


//Arrays
// ["Volvo", "Benz", "Kia", "Toyota"]
// [1,2,3,4,5]
// ["Vision", 25, "Uganda"]

let cars = ["Volvo", "Benz", "Kia", "Toyota"]
console.log(cars);
console.log(cars[2]); //Acessing the third element

let mixedArray = ["Vision", 25, "Uganda", true, null, undefined, { name: "John"}];
console.log(mixedArray);
console.log(mixedArray[6])

//Objects, they always appear in pairs
{}// an empty object
{name: "John"} //property(variable) is name, and "John" is the value

let person = {
    name: "Pride",
    age: 23,
    country: "Uganda",
    Student: false,
    hobbies: ["coding", "travelling"],
    address:{
        street: "123 Main St",
        city: "Kampala",
        country: "Uganda"
    }

}

console.log(person);
console.log(person["name"]); //Accessing the name property
console.log(person.hobbies)
console.log(person.hobbies[1]) //Accessing the second item under hobbies.

// Assignment 1. Grading math scores, (An Array called scores containing  objects with each object having a name and score properties)
// Using loops; these help us to look through an array and return a specific item 

let scores = [
    {name: "Annet", score: 85},
    {name: "Justine", score: 63},
    {name: "Samuel", score: 75},
    {name: "Martin", score: 57},
    {name: "Resy", score: 39},
    {name: "Liz", score: 95}
];

scores.forEach(student => {
    let grade;

    if (student.score >= 90) {
        grade = "A"
    } else if (student.score >= 80) {
        grade = "B"
    } else if (student.score >= 70) {
        grade = "C"
    } else if (student.score >= 60) {
        grade = "D"
    } else if (student.score >= 50) {
        grade = "E"
    } else {
        grade = "F"
    }


    console.log(student.name + ": " + student.score + " And my grade is; " + grade)

})


//Concantenation means joining two or more strings to form one.

//Using + operator

let text1 = "Malen"
let text2 = "Pride"
let text3 = text1 + " " + text2
console.log(text3)



//Using the concat method

let firstname = "Malen";
let secondname = "Pride";
let fullname = firstname.concat(" ", secondname);
console.log(fullname);


// Functions; 
// Functions;These are reusable blocks of code that perform a specific task. they can take parameters and return values.
 // Function declaration// we use the function keyword to declare a function
// In Functions, cant have two functions with the same name.
 function functionName() {
    // code to be executed
 }

 function funcName(parameter) { //separation minus comma, function & parameter
    // code to be executed
    return parameter; // returning the parameter
 }

 function funcWithParameters(parameter1, parameter2, parameter3) {
    // code to be executed
    return parameter1 + parameter2 + parameter3; //returning the sum of the paramters
 }

 // Working example of a function
 function returnSomevalue() {
    let value = "This is my first function in JavaScript"
    console.log(value);
 }

 returnSomevalue(); //this is how you call a function to execute the code inside it

 function returnParameter(parameter) {
    return parameter;
 }

 //console.log(returnParameter("hello, tthis ismy second function in JavaScript"));
const result = returnParameter("hello, this is my second function in JavaScript");
console.log(result);

function addNumbers(x, y) {
    return x + y;

}
const sum = addNumbers(4, 5);
console.log(sum);


//Arow functions
// thesse are a more concise way of writing functions in Javascript.
// They are often used for short, simple functions.

// Traditional function expression
const traditionalFunction = function() {
    console.log("This is a traditional function");
}
traditionalFunction();

function anotherTraditionalFunction() {
    console.log("This is another traditional function");
}
anotherTraditionalFunction();

// Arrow function expression
const arrowFunction =  () => {
    console.log("This is an arrow function");
}
arrowFunction();

const add = (a,b) => {
    console.log(a + b);
}
add(3,4);

//JSON (Javascript Object Notation) 
// This is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used for transmitting data in web applications.
 
//Javascript object
const task = {
    id: 1,
    title: "Complete Javascript assignment",
    completed: false
}
console.log(task);

// JSON string
const taskJSON = JSON.stringify(task);
   console.log(taskJSON);

//Passing JSON string back to Javascript object
const parseTask = JSON.parse(taskJSON);
console.log(parseTask);

//Local storage
//storing data in local storage
//stores data in pairs ie value name and its value.
localStorage.setItem("Name", "Pride");
localStorage.setItem("task", taskJSON);

//Retrieving data from local storage
const nameFromStorage = localStorage.getItem("Name");
console.log("Name fron local storage: ", nameFromStorage);

const taskFromStorage = localStorage.getItem("task");
console.log(taskFromStorage);

// *const parsenameFromStorage = JSON.parse(localStorage.getItem("Name"));
// console.log(parsenameFromStorage);








































