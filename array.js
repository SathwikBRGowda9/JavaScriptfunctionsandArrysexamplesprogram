console.log("Array exampl string arrayen using js");

stringArray = ["java", "python", "javascript", "html"];
console.log(stringArray);
console.log(stringArray[2]);

//defination of array: An array is a data structure that stores a collection of elements,
//  typically of the same data type, in a contiguous block of memory.
//  Each element in an array is identified by an index, which represents its position in the array. 
// Arrays are commonly used to store and organize multiple values under a single variable name.


//perform opertions like add  add delete updateremove
 
//examples fruitslet

let fruits = ["Apple", "Banana", "Watermelon", "Orange", "Mango"];

console.log("Original Array:");
console.log(fruits);

// add
fruits[4] = "Cherry";

console.log(fruits);

// update
fruits[1] = "Grapes";

console.log(fruits);

// remove based on index
fruits.splice(1, 1);

console.log(fruits);

// delete
delete fruits[2];

console.log(fruits);


//fruits  prints using array using for loop print all element

fruits = ["Apple", "Banana", "Watermelon", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);

}

//more the five leter 5 ignore that fruits
console.log("Fruits with more than 5 letters:");

fruits = ["Apple", "Banana", "Watermelon", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {

    if (fruits[i].length > 5) {

        console.log(fruits[i]);

    }



}console.log("Add element to the array");

let newarray = ["Apple", "Banana", "Watermelon", "Orange", "Mango"];

newarray[newarray.length] = "Cherry";

console.log(newarray);


//print fruiteswhos  lert is end with e result in arrya
console.log("Fruits whose length ends with 'e':");

let fruit = ["Apple", "Banana", "Watermelon", "Orange", "Mango"];

for (let i = 0; i < fruit.length; i++) {

    if (fruit[i]. endsWith("e")) {

        console.log(fruit[i]);
    }

}

//print only numbers from hetrogeneous arraya only numbersconsole.log("Numbers from heterogeneous array:");

let heterogeneousArray = [1, "apple", 2, "banana", 3, "cherry", 4, "date", 5];

for (let i = 0; i < heterogeneousArray.length; i++) 
    {
    if (typeof heterogeneousArray[i] === "number") 
        {
        console.log(heterogeneousArray[i]);
    }
}
// Even number

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Even numbers from the array:");

let num = [];

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 === 0) {
        console.log(numbers1[i]);

        num[num.length] = numbers1[i];
    }
}

console.log("New array:");
console.log(num);


// Even and Odd numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Even and Odd numbers from the array:");

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        console.log("Even:", numbers[i]);

        evenNumbers[evenNumbers.length] = numbers[i];

    } else {
        console.log("Odd:", numbers[i]);

        oddNumbers[oddNumbers.length] = numbers[i];
    }
}

console.log("Even Numbers:");
console.log(evenNumbers);

console.log("Odd Numbers:");
console.log(oddNumbers);



// sum of array

let num2 = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < num2.length; i++) {
    sum = sum + num2[i];
}

console.log("Sum of array:");
console.log(sum);


//sum of even numbers in array
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenSum = 0;
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        evenSum = evenSum + numbers2[i];
    }
}
console.log("Sum of even numbers in array:", evenSum);

