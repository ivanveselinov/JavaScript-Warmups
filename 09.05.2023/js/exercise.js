// Current Number

const currentNum = function () {
  for ( let current = 100; current <= 200; current++){
    if ( current % 7 === 0 ) {
      console.log(`${current} is current`)
    }
  }
}

currentNum()

// Factoriel

const factoriel = function (num) {
  if ( num <= 0) {
    console.log(`${num} is less or equal to zero`);
  } else if ( num === 0 ){
    console.log(`Number is zero`);
  } else {
    let fact = 1;
    for ( let i = 1; i <= num; i++){
      fact *= i;
    }
    console.log(`Factoriel of ${num} is ${fact}`)
  }
}

factoriel(4)
factoriel(5)
factoriel(6)
factoriel(7)


// Even/Off Reporter

const evenOdd = function (num) {
  console.log("Even Odd");
  for ( let i = 0; i <= 20; i++ ){
    if ( i % 2 === 0 ){
      console.log(`Number ${i} is Odd`);
    } else {
      console.log(`Number ${i} is Even`);
    }
  }
}

evenOdd();


// Multiply number by 9

const multiply = function (num) {
  for ( let i = 1; i <= 100; i++ ){
    let multiplyNum = i * num
    console.log(`Number ${i} is multiply by ${num} and result is ${multiplyNum}`)
  }
}

multiply(4)


 //

const myFaroviteThings = ["Brocoli", 60481, "Love Actually"];

console.log(myFaroviteThings[0])

myFaroviteThings.push("Ivan");

console.log(myFaroviteThings)

myFaroviteThings[3] = "Test"

console.log(myFaroviteThings)

myFaroviteThings[5] = "Empty Element is here"

console.log(myFaroviteThings)
