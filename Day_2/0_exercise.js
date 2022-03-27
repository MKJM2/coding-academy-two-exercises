// Write a for loop which prints out the numbers 1 through 10
// HINT:
// This line of code will print out a variable called "counter" 
// console.log(counter)

// Write a while loop which prints out the numbers 2 through 20, 
// in increments of 2 (2, 4, 6, 8, ...)


// Initialize a string with a length of at least 10 characters


// Print out the string in reverse
// a) using a for-loop
// b) using built-in functions

function reverseString(str) {
    /* Your code goes here */
    let reversed = "";
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}
console.log(reverseString("hello"));


// BONUS: 
// Complete this problem if time permits
// Print all of the prime numbers between 0 and 1000