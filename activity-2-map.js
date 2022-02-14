// The array method .map is an example of a higher
// order function.
// Declare a variable with five numbers, then
// use .map to iterate through the array and multiply each array item by 3.

let myArray = ['1', '2', '3', '4', '5']; // Create an array with five numbers

myArray = myArray.map(arrayItem => { // create arrow function with parameter 
    return arrayItem * 3 // use .map to iterate through the array and multiply each array item by 3.
})


console.log(myArray); // log array to the console