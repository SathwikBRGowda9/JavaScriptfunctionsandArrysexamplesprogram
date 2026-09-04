//A function without parameters and without a return statement:

function hello() {
    console.log("Hello Function Is called");
}

hello();

//This program is called a function with a parameter and without a return statement.

function myname(name) {
    console.log("Hello " + name);
}

myname("Sathwik");

//A function with a parameter and a return statement:

function myName(name) {
    return "Hello " + name;
}

let message = myName("Rohan");
console.log(message);


//add two number  using general functions

function addNumbers(a,b) {
    let c=a+b;
    console.log("Addtion of two number="+c);
}

addNumbers(100, 200);

// Write a program to check even or add using general function

function even(n)
{
    if(n%2==0)
    {
      console.log("Even Number ");
    }
    else
    {
    console.log("Odd Number="+n);
    }
}
even(10);


function sayhello(name)
{
    console.log("Hello " + name);
}

sayhello("Sathwik");
sayhello("Kiran");


//function without parmameter and retryun state,ent

function add()
{
    let x = 10;
    let y = 20;

    return x + y;
}

let result = add();

console.log(result);

//Function with Parameter and with Return Statement

function fullname(firstname, lastname)
{
    return firstname + " " + lastname;
}

let name = fullname("Sathwik", "B R");
console.log(name);



//default parameters
//how to chage the default partmenter value

function fun(name)
{
    console.log(name);
}
fun();

fun("hello");

function fun2(a,b,c)
{
    console.log(a);
}
fun2();

//programs

//write aprogram to print even number from 20 to 30 using general functions
console.log("Printing Even Numbers");
function evennum(m,n)
{
    for(let i=m;i<=n;i++)
    {
        if(i%2==0)
        {
            console.log(i);
        }
    }
}
// evennum(20,30);
// evennum(40,50);


//write a program to print odd number using prompt

console.log("odd Numbers");

// let m=parseInt(prompt("Enter The start Number"));
// let n=parseInt(prompt("Enter The  end Number"));
function oddnum()
{
    let m = Number(prompt("Enter starting number:"));
    let n = Number(prompt("Enter ending number:"));

    if(m > n)
    {
        alert("Invalid Input");
    }
    else
    {
        for(let i = m; i <= n; i++)
        {
            if(i % 2 !== 0)
            {
                console.log(i);
            }
        }
    }
}

//write program to add two number using user input peompt

function addtion()
{
let a = parseFloat(prompt("Enter first number:"));
    let b = parseFloat(prompt("Enter second number:"));

    if(isNaN(a,b))
     {
       alert("Not A Number");
     }
     else
     {
    c=a+b;
    console.log("sum of Number"+c);
    }
}

//Write A program check the number is positive or neagtive zero

function postive()
{
    let n = parseFloat(prompt("Enter the number:"));
     if(isNaN(n))
     {
       alert("Not A Number");
     }
     else
        {
    if(n>0)
    {
        console.log("Postive Number");
    }else if(n<0)
    {
        console.log("Negative Number");
    }
    else{
      console.log("Zero Number");

    }
}

}

//program with default method

// Add two numbers

function addtwo(a = 0, b = 0)
{
    if(typeof(a) === "number" && typeof(b) === "number")
    {
        let sum = a + b;
        console.log(`${a} + ${b} = ${sum}`);
    }
    else
    {
        console.log("Not a Number");
    }
}
addtwo();
addtwo('a','b');
addtwo(10, 20);

function addnum1(a = 0, b = 0)
{
    if(typeof(a) === "number" && typeof(b) === "number")
    {
        let sum = a * b;
        console.log(`${a} + ${b} = ${sum}`);
    }
    else
    {
        console.log("Not a Number");
    }
}

addnum1(10, 20);


//programs with parameter and with return statement

// WAP to check even or odd number using the general function with parameter  and the return type statement
//  note 
//   check even or odd number when parameter is holding number data or else return as the invalid option


// WAP to check even or odd number using general function
// with parameter and return type statement

function checkEvenOdd(num)
{
    if(typeof(num) === "number")
    {
        if(num % 2 === 0)
        {
            return "Even Number";
        }
        else
        {
            return "Odd Number";
        }
    }
    else
    {
        return "Invalid Option";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd("Hello"));

console.log("Assignment Qustions");

// Write a JavaScript program to find the largest of two numbers using a general function with parameter and return statement.
// Note: Find the largest if the parameter is holding number data, otherwise return "Invalid Option".

function largest(a, b) {
    if (typeof(a) === "number" && typeof(b)=== "number") {
        if (a > b) 
            {
            return a;
        } else {
            return b;
        }
    } else {
        return "Invalid Option";
    }
}

console.log(largest(10, 20));
console.log(largest(50, 30));
console.log(largest(10, "20"));


// Write a JavaScript program to find the largest of three numbers using a general function with parameter and return statement.
// Note: Find the largest of 3 numbers if the parameter is holding number data, otherwise return "Invalid Option".

function largestOfThree(a, b, c) {
    if (typeof(a) === "number" && typeof(b) === "number" && typeof(c) === "number") {
        if (a > b && a > c) {
            return a;
        } else if (b > a && b > c) {
            return b;
        } else {
            return c;
        }
    } else {
        return "Invalid Option";
    }
}
console.log(largestOfThree(10, 20, 30));
console.log(largestOfThree(50, 30, 40));
console.log(largestOfThree(10, "20", 30));

// Write a JavaScript program to find the factorial of a number using a general function with parameter and return statement.
// Note: Print the factorial if the parameter is holding number data, otherwise return "Invalid Option".

function factorial(n) {
    if (typeof(n) === "number") {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact = fact * i;
        }
        return fact;
    } else {
        return "Invalid Option";
    }
}
console.log(factorial(5));
console.log(factorial("5"));



//function with out parameter with out return statement using  anomys function example
// Anonymous function without parameter and without return statement
console.log("Anonymous function without parameter and without return statement");
let addtwonum = function()
{
    let a = 10;
    let b = 20;
    let sum = a + b;

    console.log("Sum = " + sum);
};

addtwonum();


//function with parameter without return statement using anonys function


console.log("Function with parameter without return statement Using anonymous function");

let addoftwo = function(a, b)
{
    let sum = a + b;
    console.log("Sum = " + sum);
};

addoftwo(10, 20);

//functiomn with out paramter ans with return statement using anonymous function

console.log("Function without parameter and with return statement Using anonymous function");
let sumof = function()
{
    let a = 10;
    let b = 20;
    let sum = a + b;

    return sum;
};

console.log(sumof());

//function with parameteer with return statement using anonymsous function


console.log("Function with parameter and with return statement  Using anonymous function");
let sumoftwonum = function(a, b)
{
    return a + b;
};

let res = sumoftwonum(10, 20);

console.log(res);

console.log("Arrow Functions");

console.log("Arrow function without parameter and without return statement");
let sayHello = () =>
{
    console.log("Hello JavaScript");
};
sayHello();

console.log("Arrow function with parameter and without return statement");

let addtionof=(a,b)=>
{
  let c=a+b;
  console.log("sum is"+c);
};
addtionof(10,20);

console.log("Arrow function without parameter and with return statement");

let  addtionsum=()=>
{
    let a=10;
    let b=20;
    let c=a+b;
    return c;
};
console.log(addtionsum());

console.log("Arrow function with parameter and with return statement");

let  addtionnumber=(a,b)=>
{
    return a+b;
}
console.log("Sum of = "+addtionnumber(10,40));

//another Example

let arrowevenorodd=(n)=>
{
    if(n%2==0)
    {
        console.log("Even Numnber");
    }
    else{
        console.log("odd Numnber");

    }

};

arrowevenorodd(10);


//Assignment program examples

let largestOfThreenum = function(a, b, c) {

    if (typeof(a) === "number" && typeof(b) === "number" && typeof(c) === "number") {
        if (a > b && a > c) {
            return a;
        } else if (b > a && b > c) {
            return b;
        } else {
            return c;
        }
    } else {
        return "Invalid Option";
    }
};
console.log("largest Of Three num = "+largestOfThreenum(10,20,30)); 


console.log("without using parthise do the using arrwou username print Arrow function without parentheses");

let username = name =>
{
    console.log(name);
};

username("Sathwik");

console.log("One parameter → parentheses () are optional and with return statement");

let arrow3 = name =>
{
    return name;
};

console.log(arrow3("Tell me Sementhing"));

console.log("One return statement → {} and return are optional");

let arrow5 = text => text;

console.log(arrow5("Sathwik"));


//self invoking functions or imdiate functions example hello

(
    function () 
{
    let a = 10;
    let b = 20;

    console.log(a + b);
}
)
();

//another example
// Self-Invoking Function — Definition
// A self-invoking function is a JavaScript function that automatically calls (executes) 
// itself immediately after it is created, without needing a separate function call.

(
    function hello() 
{
    console.log("Hello World");
}
)
();


//self invoking with arrow function function with parmeter and  and with return statement addtion of two numbwr 

let results = (
    (a, b) => 
    {
    return a + b;
}
)
(10, 20);

console.log(results);

//self ionvking and arrow function check the number is even or odd using ternary opertors  

let evenorodd = ((num) =>{console.log(num % 2 == 0 ? "Even" : "Odd");})(10);


//callbackfunctions using j simple example sum of two number

// Callback function example - Sum of two nu<mbers
//a function we can create and argumnets is called call back functions

console.log("Callback function example - Sum of two numbers");

function add3(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

function display(result) {
    console.log("Sum = " + result);
}

//a is call back function and sumis higher order function

add3(10, 20, display);

//example 4 useranem sir name lastname using call function 

function userDetails(username, surname, lastname) {
    let fullName = username + " " + surname + " " + lastname;
    console.log("Full Name = " + fullName);
}

userDetails("Dhoni", "M", "S");

//note hire in above eexample surname is call back function username is higher order function

// Example 4 - Print 200

function print200(callback) {
    console.log(200);
    callback();
}

function display() {
    console.log("Function is completed");
}


print200(display);

//higer order functions defintion and exampple 

//2.Higher order function
//expeting call back  function  an agrument is called higer order functions


setTimeout(() => {
    console.log("hello");
}, 3000);



// this functions wii execute after 3 seconds
// note in the above example settimeout is higher order function handle is call back function 

//scope of varible in javascript using function example

//Global Scope
var globalVar = "I am a global variable";
let num1=20;
function myFunction() {

    // Local Scope
    var localVar = "I am a local variable";
    let num2=30;

    // Accessing global variable inside function
    console.log(globalVar);
    console.log(num1+num2);

    // Accessing local variable inside function
    console.log(localVar);
    return num1+num2;
    
    console.log(num1+num2);
}
myFunction();
console.log(globalVar);

//function scope example
//
function outerFunction() {

    var outerVar = "I am from outer function";

    function innerFunction() {

        var innerVar = "I am from inner function";

        // Accessing outer function's variable

        console.log(outerVar);

        // Accessing inner function's variable

        console.log(innerVar);
    }
    // Trying to access inner function's variable (will throw an error)
    // console.log(innerVar);

    // Calling inner function
    innerFunction();
}
outerFunction();


//scopr chaining example
console.log("Scope Chaining Example");

var globalVar = "I am a global variable";
function outerFunction() {

    var outerVar = "I am from outer function";

    function innerFunction() {

        var innerVar = "I am from inner function";

        function innerMostFunction() {

            // Accessing all variables from different scopes

            console.log(globalVar);
            console.log(outerVar);
            console.log(innerVar);
        }
        innerMostFunction();
    }
    innerFunction();
}
outerFunction();

//lexical scope example
console.log("Lexical Scope Example");

var globalVar2 = "I am a global variable";

function outerFunction() {

    var outerVar = "I am from outer function";

    function innerFunction() {

        var innerVar = "I am from inner function";

        // Inner function has access to its own scope, outer function's scope, and global scope

        console.log(innerVar); // Accessing inner function's variable
        console.log(outerVar); // Accessing outer function's variable
        console.log(globalVar2); // Accessing global variable
    }

    innerFunction();
}
outerFunction();

//varible hoisting

let a;
console.log(a);
a=100;

hesiting();

function hesiting()
{
    console.log("hello");
}

















