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


 // ARRAYS !!! BEGINING !!!

const myFavoriteThings = ["Brocoli", 60481, "Love Actually"];

console.log(myFavoriteThings[0])

myFavoriteThings.push("Ivan");

console.log(myFavoriteThings)

myFavoriteThings[3] = "Test"

console.log(myFavoriteThings)

myFavoriteThings[5] = "Empty Element is here"

console.log(myFavoriteThings)

myFavoriteThings[5].pop

console.log(myFavoriteThings)


for ( let i = 0; i <= myFavoriteThings.length; i++){
  console.log(myFavoriteThings[i])

  if ( myFavoriteThings[i] === "Test"){
    console.log(`${myFavoriteThings[i]} I have found you`)
  }
}


const myCars = ["Mercedes", "VW", "Audi", "Ford"];

for ( let i =0; i < myCars.length; i++) {
  const cars = myCars[i]
  console.log(`My ${i + 1}st choice is ${cars}`)
}
