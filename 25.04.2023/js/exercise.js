const numbers = function (num) {
  while ( num <= 5) {
    console.log(`Current Number is ${num}`);
    num = num + 1;
  }
}

numbers(0)


const forLoop = function () {
  for (let i = 0; i <= 5; i++){
    console.log(i)
  }
}

forLoop(0)


const currentNum = function () {
  for ( let i = 100; i < 200; i++ ){
    console.log(`Testing, starting with ${i}`);

    if ( i % 7 === 0) {
      console.log(`Found it ${i}`);
      // break;
    }
  }
}

console.log(currentNum())


const evenOdd = function () {
  for ( let i = 0; i <= 20; i++ ){
    if ( i % 2 === 0) {
      console.log(`Number ${i} is Odd!`);
    } else {
      console.log(`Number ${i} is Even!`)
    }
  }
}

console.log(evenOdd())


const multiplicationTables = function () {
  for ( let i = 0; i <= 10; i++){
    const multiply = i * 9;
    console.log(`Number ${i} multplied by 9 = ${multiply}`);
  }
}
console.log(multiplicationTables())


const gradeAssigner = function () {
  for ( i = 60; i <= 100; i++ ) {
    if ( i >= 91 && i <= 100) {
      console.log(`for ${i} you got grade A`);
    } else if ( i <= 90 && i >= 81) {
      console.log(`for ${i} you got grade B`);
    } else if ( i <= 80 && i >= 71) {
      console.log(`for ${i} you got grade C`);
    } else if ( i <= 70 && i >= 61) {
      console.log(`for ${i} you got grade D`);
    } else {
      console.log(`for ${i} you have grade E, and you did not pass this exam`)
    }
  }
}

console.log(gradeAssigner());
