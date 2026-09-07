//array method

//push method examples

let fruits = ["Apple", "Banana", "Orange"];
console.log("Original array:", fruits);

// Push method
fruits.push("Grape");
console.log("After push:", fruits);

//pop method
fruits.pop();
console.log("After pop:", fruits);

console.log("Unshift method");
//unshfits add element starting element in first
arryaname=[10,20,30,40,50,60];
console.log(arryaname.unshift(5));
console.log(arryaname);

console.log("Shifts Method Examples");
//shift delete the element first
arr=[1,2,3,4,5,6,7];
console.log(arr.shift());
console.log(arr);

console.log("Slice Operations");

//slice method is used perform both operation add and delete
var a=[10,20,30,40,50,60];
console.log(a.slice(2,5));
console.log(a);
console.log(a.splice(2, 2,"Hi","Bye"));  //add or update that index position
console.log(a);


//indexof method 
console.log("Indexof Method");
let place=["Banglore","Shivomogo","Goa","Goa","Goa","Maanglore"];
console.log(place.indexOf("Goa"));

//last indexof method
console.log("Last Index of");
let places=["Banglore","Shivomogo","Goa","Goa","Goa","Maanglore"];
console.log(places.lastIndexOf("Goa"));
console.log(places.lastIndexOf("Banglore"));

//includes method true or false

//def;include mehod 
console.log("Includes method");
let place1=["Bnaglore","Shivomogo","Manglore","Goa"];
console.log(place1.includes("Manglore"));
console.log(place1.includes("Goa"));
console.log(place1.includes("Thirthalii"));

//sort method
console.log("Sort Method");
let sortingnumber=[50,20,40,10,30];
console.log(sortingnumber.sort());


//rverse array element using reverse method
console.log("Reverse Method");
let num1=[10,20,30,40,50,60,70,80,90,100];
console.log(num1.reverse());

//cancat of two arrays

console.log("Concat Method");
let array1=[1,2,3];
let array2=[4,5,6];
console.log(array1.concat(array2));
console.log(array1);

//joins method in arryu
console.log("Join Method");
let joinarray=["Apple","Banana","Mango"];
console.log(joinarray.join(" * "));

//flat method in array
console.log("Flat Method");
let b=[1,2,3,[4,5,6],[7,8,9]];
console.log(b.flat());  // it is used to convert muti dimsional into to single dimision arrrya

//example for arry FOR LLOP FORIN LOOP AND FORO LOOP

console.log("For loop examples");
let arr5 = [10, 20, 30, 40, 50];

for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}

//for in loop examples using array

console.log("For in loop example");

let arr6 = [10, 20, 30, 40, 50];

for (let i in arr6) {
    console.log(i);
}

console.log("for off loop examples");

// for of loop example for arraya

let arr7 = [10, 20, 30, 40, 50];

for (let value of arr7) {
    console.log(value);
}


// /for eacg higher order functions and callback examples
console.log("For Each loop Examples");
let arr8 = [10, 20, 30, 40, 50];
arr8.forEach(function(value)
 {
    console.log(value);
});

console.log("Diffren for loop and for each loop");

//let arr7 = [10, 20, 30, 40, 50]; usin for each allnumber +2 like example 10+2 20+3 like this do
//do this program in for loop and foreach loop also


let arr9 = [10, 20, 30, 40, 50];

for (let i = 0; i < arr9.length; i++) {
    console.log(arr9[i] + 2);
}

console.log("for each loop + 3 ");
let arr10 = [10, 20, 30, 40, 50];

arr10.forEach(function(value) {
    console.log(value + 2);
});

//Map methid ; it is used to commom operation for all array elements and it returns the modify the array


let arr11 = [10, 20, 30, 40, 50];

let result = arr11.map(function(value)
 {
    return value + 2;
});

console.log(result);

console.log("1 Line method");
let arr12 = [10, 20, 30, 40, 50];

let results = arr12.map(value => value + 2); console.log(results);

console.log("using map method");
let fruit = ["apple", "banana", "orrange", "chery"];

let newarray = fruit.map(value => value.toUpperCase());

console.log(newarray);


let fruit3 = ["apple", "banana", "orrange", "chery"];

let newarray3 = [];

for (let i in fruit3) {
    newarray3[i] = fruit3[i].toUpperCase();
}

console.log(newarray3 );


//filter method examples  it return the filter the srray print only the even number

let arr13 = [10, 15, 20, 25, 30, 35, 40];

let result12 = arr13.filter(value => value % 2 === 0);

console.log(result12);


//whos name is end with e using filter method

console.log("Filter Method");

let names = ["John", "Mike", "Alice", "Charlie", "David"];

let resultss = names.filter(name => name.endsWith("e"));

console.log(resultss);


let name2 = ["John", "Mike", "Alice", "Charlie", "David"];

let result5 = [];

for (let i in name2) {
    if (name2[i].endsWith("e")) {
        result5.push(name2[i]);
    }
}
console.log(result5);

console.log("Reduce method");

// Sum of array elements

let numberss = [10, 20, 30, 40];

let total = numberss.reduce((sum, value) => {

    let result = sum + value;

    return result;

}, 0);

console.log(total);


// Multiplication of array elements

let numbers = [2, 3, 4, 5];

let total1 = numbers.reduce((product, value) => {

    let result = product * value;

    return result;

}, 1);

console.log(total1);

// //todo : reduce() : It is used to reduce all elements of an array
// into a single value while doing some operation & returns the single
// value.

// /*
// ? Syntax :

//     array.reduce((accumulator , currentValue , index , array) => {
//         return result
//     } , initialValue)

// ~ Accumulator = A variable that stores and keeps updating the result
// while processing elements one by one.
// ~ currentValue = Current array element
// ~ index = Index of current array element
// ~ array = Original Array
// ~ initialValue = Initial value of accumulator


//sort method :sort method is used to sort the array elememnts assending or desnending order and it returns osrted array]

console.log("Sort Method Examples");
let unsortedArray = [5, 2, 8, 1, 9, 3];
console.log(unsortedArray.sort());
console.log(unsortedArray);
//desending order
let unsortedArray1 = [57, 27868, 867687, 189800, 9666866, 390906767];
console.log(unsortedArray1.sort());
//use higer order do it
let unsortedArray2 = [57, 27868, 867687, 189800, 9666866, 390906767];
console.log(unsortedArray2.sort((a, b) => a - b));

