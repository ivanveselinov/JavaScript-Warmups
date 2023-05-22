const array1= [1, 2, 3, 4, 5];
const array2= [2, 4, 6, 8, 10];


const test = function () {

  for (let i = 0; i <= array1.length; i++){
    let sum = array1[0] + array1[1] + array1[2] + array1[3] + array1[4]
    console.log(`Total sum of array1 = ${sum}`)

      for ( let j = 0; j <= array2.length; j++){
      const sum1 = array2[0] + array2[1] + array2[2] + array2[3] + array2[4]
          console.log(`Total sum of array2 = ${sum1}`)

          const total = sum1 + sum
          console.log(`Total sum of both arrays is ${total}`)
    }
  }
}

test()
