
const presidentFunction = function () {

array = ["colors", "presidents", "whatever"];

for ( let i = 0; i < array.length; i++){
  const finalNumber = array[i];
  console.log(finalNumber)

  if ( finalNumber === "whatever") {
    console.log(`Ha! i have found you ${finalNumber}`)
  } else {
    console.log(`Still looking for you`)
  }
}

}

console.log(presidentFunction());


const maxOfTwoNumbers = function (num1, num2) {
  if ( num1 > num2) {
    console.log(`Number ${num1} is bugger then ${num2}`);
  } else if ( num1 === num2) {
    console.log(`Both numbers are ${num1}`);
  } else {
    console.log(`Number ${num2} is bigger then ${num1}`)
  }
}

maxOfTwoNumbers(10, 20);
maxOfTwoNumbers(20, 10);
maxOfTwoNumbers(10, 10);

const maxOfThreeNumbers = function (num1, num2, num3) {
  if ( num1 > num2 && num1 > num3){
    console.log(`Biggest number is ${num1} and other numbers are ${num2} and ${num3}`)
  } else if ( num2 > num1 && num2 > num3) {
    console.log(`Biggest number is ${num2} and other numbers are ${num1} and ${num3}`)
  } else {
    console.log(`Biggest number is ${num3} and other numbers are ${num1} and ${num2}`)
  }
}

maxOfThreeNumbers(8,6,4)
maxOfThreeNumbers(8,10,4)
maxOfThreeNumbers(8,6,14)


const character = function () {
  array = ['test', 'i can do it again', 'does not matter', 'vovel'];

  for ( let i = 0; i < array.length; i++ ) {
    console.log(`${i} - ${array[i]}`);

    if ( array[i] === "vovel"){
      console.log(`We have found you ${array[i]}`)
    } else {
      console.log("False")
    }
  }
}

character()
