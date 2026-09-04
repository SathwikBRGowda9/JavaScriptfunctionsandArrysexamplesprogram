
//String interploation examples in javascript

//Example 1: Using template literals
const name = "Sathwik";
const text = `Hello, ${name}`;
console.log(text); // Output: Hello, John!
//based on acces index
console.log(text[1]);

//String method length example usinh javascript
var str = "Hello, World!";
console.log(str.length); // Output: 13

//String method charAt example using javascript
var str1 = "Hello, World!";
console.log(str1.charAt(7)); // Output: W

//String method indexOf example using javascript
var str2 = "Hello, World!";
console.log(str2.indexOf("World")); // Output: 7

//String method charatcodeAt example using javascript
var str3 = "Hello, World!";
console.log(str3.charCodeAt(0)); // Output: 72

//String method uppwecase example using javascript
var str4 = "Hello, World!";
console.log(str4.toUpperCase()); // Output: HELLO, WORLD!

//String method lowercase example using javascript
var str5 = "HELLO, WORLD!";
console.log(str5.toLowerCase()); // Output: hello, world!

//String method startwith example using javascript
var str6 = "Hello, World!";
console.log(str6.startsWith("Hello")); // Output: true

//String method endswith example using javascript
var str7 = "Hello, World!";
console.log(str7.endsWith("H")); // Output: true

//String methodsindexof example using javascript
var str8 = "Hello, World!";
console.log(str8.indexOf("World")); // Output: 7  

//indexof definition: The indexOf() method returns the index of the first occurrence of a specified value in a string.
//If the value is not found, it returns -1. 
//The index is zero-based, meaning the first character of the string has an index of 0.

//String method lastindexof example using javascript
var str9 = "Hello, World!";
console.log(str9.lastIndexOf("o")); // Output: 8

//lastindexof definition: The lastIndexOf() method returns the index of the last occurrence of a specified value in a string.

//String method includes example using javascript
var str10 = "Hello, World!";
console.log(str10.includes("World")); // Output: true

//includes definition: The includes() method determines whether a string contains a specified value. It returns true if the value is found, and false otherwise.

//String methodsubstring example using javascript
var str11 = "Hello, World!";
console.log(str11.substring(0, 5)); // Output: Hello

//substring definition: The substring() method returns a portion of the string between two specified indices. The first index is inclusive, and the second index is exclusive. If the second index is omitted, it extracts characters to the end of the string.

//String method substr example using javascript
var str12 = "Hello, World!";
console.log(str12.substr(7, 5)); // Output: World

//substr definition: The substr() method returns a portion of the string, starting at a specified index and extending for a given number of characters. The first parameter is the starting index, and the second parameter is the length of the substring to extract. If the second parameter is omitted, it extracts characters to the end of the string.

//String method slice example using javascript
var str13 = "JavaScript";
console.log(str13.slice(-8,8)); // Output
//how it work in the aboee code

//slice definition: The slice() method extracts a section of a string and returns it as a new string. It takes two parameters: the starting index (inclusive) and the ending index (exclusive). If the ending index is omitted, it extracts characters to the end of the string.
var str14= "JavaScript";
console.log(str14.slice(-4,9));

//String method repeate example using javacript

var strs ="JavaScript ";
console.log(strs.repeat(15));

//string method trim example using javascript
var str16="javascript  ";
console.log(str16.trim("javscript"));


// String method split example using JavaScript

var str17 = "i love javascript";

console.log(str17.split("javascript"));

//String method join example using js

// String method join example using JavaScript

let str18 = ["a", "r", "r", "y", "a"];
console.log(str18.join());

//string method concat example using js
var str19="java";
console.log(str19.concat("script"));

//Stringmethod replace example using js
var str20="java is best programming language";
console.log(str20.replace("java","python"));

//string method padstart example using js
var str21="javascript";
console.log(str21.padStart(15,"@"));

//string ,ethod padends example using js
var str22="javascript";
console.log(str22.padEnd(15, "@"));


//String method charat a-z print using ascii valeue for loop
for(let i=65; i<=90; i++){

    console.log(String.fromCharCode(i));

}

//write a program to print the oval using carrcode
console.log("Vowels using charCode:");

for(let i=65; i<=90; i++){

    if(i==65||i==69||i==73||i==79||i==85){
       
        console.log(String.fromCharCode(i));

    }

}

//write  A PROGRAM TO print the total count of ovels ingiven string

// var count = 0;

// var str = prompt("Enter a string:");

// str = str.toLowerCase();

// for (let i = 0; i < str.length; i++) {

//     if ("aeiou".includes(str[i])) {
//         count++;
//     }

// }

// console.log("Number of vowels:", count);

//write program to count total space example using js
var count1=0;
var str1="hello world how are you";

for (let i = 0; i < str1.length; i++) {

    if (" ".includes(str1[i])) {
        count1++;
    }

}

console.log("Number of Space:", count1);


//write a  program to remove the space using js
var strs2="hello world";
console.log(strs2.replaceAll(" ",""));




 
 





