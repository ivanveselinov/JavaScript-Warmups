// for (let i = 0 ; i <= 5 ; i++){
//   console.log(i)
// }

// Odd Number

const oddNumber = function () {
  for (let i =0; i <= 20; i++){
    console.log(i)
    if ( i % 2 === 0) {
      console.log(`Number ${i} is odd`)
    }else {
      console.log(`Number ${i} is even`)
    }
  }
}

oddNumber()

// Militply Number!!!

const multiplication = function () {
  for (let i = 0; i <= 20 ; i++){
    result = i * 9
    console.log(`Result is ${i} * 9 = ${result}`)
  }
}

multiplication()


// The Grade Assigner

const gradeAssing = function (num) {

  if ( num >= 90) {
    console.log(`Your grade is A and result is ${num}`)
  } else if ( num >= 80) {
    console.log(`Your grade is B and result is ${num}`)
  }else if ( num >= 70) {
    console.log(`Your grade is C and result is ${num}`)
  }else if ( num >= 60) {
    console.log(`Your grade is D and result is ${num}`)
  }else {
    console.log(`Your grade is ${num} and you did not pass this exam!`)
  }


}

gradeAssing(90)
gradeAssing(80)
gradeAssing(70)
gradeAssing(60)
gradeAssing(50)
