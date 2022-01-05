// Write a for loop which prints out the numbers 1 through 10
// HINT:
// This line of code will print out a variable called "counter" 
// console.log(counter)
for (let counter = 1; counter < 11; counter++) {
  console.log(counter)
}
// can also be simplified to
for (let counter = 1; counter <= 10; counter++) console.log(counter)


// Write a while loop which prints out the numbers 2 through 20, 
// in increments of 2 (2, 4, 6, 8, ...)
for (let counter = 1; counter < 11; counter++) {
  console.log(counter * 2)
}
// or 
for (let counter = 2; counter < 21; counter = counter + 2) {
  console.log(counter)
}

// Initialize a string with a length of at least 10 characters
const myString = "I am a string!!!"

// Print out the string in reverse
const newString = myString.split("").reverse().join("")
console.log(newString)
// or
let revString = ""
for (let counter = myString.length; counter > 0; counter--) {
  revString = revString + myString[counter - 1]
}
console.log(revString)

// BONUS: 
// Complete this problem if time permits
// Print all of the prime numbers between 1 and 1000
for (let i = 2; i <= 1000; i++) {
  let isPrime = true

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false
      continue
    }
  }

  if (isPrime) {
    console.log(i)
  }
}

// RUN USING: node 0_exercise.js