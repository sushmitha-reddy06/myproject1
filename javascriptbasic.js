//basic example
console.log("Hello World!");

console.log();

//basic variables and math
console.log("variables");
let num1 = 1111;
let num2 = 2222;
let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

console.log();

//basic Conditional Statements
console.log("statements");
let age = 12;
if (age >= 18) {
    console.log("You are an Adult");
} else {
    console.log("You are a Minor");
};

console.log();

//functions
console.log("functions");
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Sushmitha");

console.log();

//Arrays
console.log("Arrays and Array Methods");
let family = ["Apple", "Banana", "Grapes"];
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);

console.log(family.length);

console.log();

//for loop
console.log("Using for-Loop");
const numbers = [1, 2, 3, 4, 5];
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log();

//foreach
console.log("foreach");
numbers.forEach(function(number) {
    console.log(number += 1); //number = number+1
  });

  console.log();

//for-of loop
console.log("for-of");
for (let number of numbers) {
  console.log(number);
}

console.log();

//map() method for cube numbers
console.log("map-cube");
const cubeNumbers = numbers.map(function(number) {
  return number * number * number;
});
console.log(cubeNumbers);

console.log();

//map() method for square numbers
console.log("map-square");

const squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers);

//for-in loop(for iterating over object keys)
const person = {
    myname:"Sushmitha",
    age:20,
    city:"Hyderabad"
};
for (let key in person) {
console.log(key + ":"+ person[key]);
}

// push() - Adds elements to the end of the array
console.log("using Push");
numbers.push(6, 7);
console.log(numbers);

console.log();

// pop() - Removes the last element from the array
console.log("using Pop");
numbers.pop();
console.log(numbers);

console.log();

//shift() - Removes the first element from the array
console.log("using Shift");
numbers.shift();
console.log(numbers);

console.log();

//unshift - Adds elements to the beginning of the array
console.log("using Unshift");
numbers.unshift(1);
console.log(numbers);

console.log();

//slice() - returns a new array containing a portion of the original array
console.log("using Slice");
const sliceArray = numbers.slice(2, 3);
console.log(sliceArray);

console.log();

// splice() - Adds or removes elements from the array at a specific position
console.log("using Splice");
numbers.splice(3, 3 , "a", "b", "c");

console.log(numbers);

console.log();

//concat - combines two or more arrays to create a new array
console.log("using Concat");
const numbers2 = [0, -1, -2, -3, -4, -5];
const combinedArray = numbers.concat(numbers2);

console.log(combinedArray);

console.log();

// filter() - Creates a new array with elements that pass a certain condition
console.log("using Filter");
const filteredArray = combinedArray.filter(function(element) {
    return typeof Element === "number";
});

console.log(filteredArray);

console.log();

// reduce() - Applies a function to reduce the array to a single value
console.log("using Reduce");
const add = multipliedArray.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  console.log(add); // Output: 72
console.log();