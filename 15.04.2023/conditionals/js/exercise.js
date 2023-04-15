// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {

  if (num1 > num2 ){
    console.log(`Number ${num1} is greater then ${num2}`)
  } else if ( num1 === num2 ){
    console.log (`Number ${num1} is equal to ${num2}`)
  } else {
    console.log (`Number ${num1} is lower then ${num2}`)
  }
}

maxOfTwoNumbers (1, 2)
maxOfTwoNumbers (1, 1)
maxOfTwoNumbers (20, 10)

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
  if ( num1 > num2 && num1 > num3) {
    console.log(`Number ${num1} is greater then ${num2} and ${num3}`)
  } else if ( num2 > num3 && num2 > num1){
    console.log(`Number ${num2} is greater then ${num1} and ${num3}`)
  } else {
    console.log(`Number ${num3} is greater then ${num1} and ${num2}`)
  }
}

maxOfThree(4,2,3)
maxOfThree(4,6,3)
maxOfThree(4,6,8)

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const insertCharacter = function (name) {
  if ( name === "vowel") {
    console.log("TRUE! Congratulations")
  } else {
    console.log(`FALSE! Your character is ${name}`)
  }
}

insertCharacter("Ivan Veselinov")
insertCharacter("vowel")
insertCharacter("Test")


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function () {
  const array = [1,2,3,4,5]

  for (let i = 0; i < array.lenght; i++) {
    console.log(i);
  }
}


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
