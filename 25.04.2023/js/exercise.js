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
