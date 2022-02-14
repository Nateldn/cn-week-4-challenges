// Test this function to make sure it works by passing a number to the doMaths function, then passing a number and one of the four maths functions, to the returned function.
const add = (a,b) => {
    return a+b;
    
}
console.log(add(2,2)); // Should return 4

const subtract = (a,b) => {
return a - b; 
} 
console.log(subtract(2,2)); // Should return 0

const multiply = (a,b) => {
    return a*b;
}

console.log(multiply(2,2)); // Should return 4

const divide = (a,b) => {
return a/b; }

console.log(divide(2,2)); // Should return 1

const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}    

doMaths(10,10);    