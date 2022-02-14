// Write a simple function which logs “Hello Code Nation” to the console.
// Then write a higher order function which will run our simple function five times, even though you only call it one time.
// Hint: Pass the simple function as a parameter, and this will involve a for loop.


const sayHello = () => { // create function which says hello
    return ("Hello Code Nation"); // return that says "Hello Code Nation"
}

console.log(sayHello()); // Call function 

const runItFiveTimes = (parameter) => { //  Create arrow funciton with parameter that will take the function
    for (let i = 1; i <= 4; i++)  // 
   return parameter; // return the parameter
} 
 

runItFiveTimes(sayHello); // run higher order function/


/*==== Second attempt ===*/ 
let myString = "Some string that I'd like to log multiple times."

const logItMultipleTimes = (theInput)=> { //Create arrow funciton with parameter that will take the function
    for (let i = 0; i <= 4; i++) { //iterate 5 times
        console.log(theInput); // log the output of loop 
    }    
} 

logItMultipleTimes(myString); // call the higher order function
