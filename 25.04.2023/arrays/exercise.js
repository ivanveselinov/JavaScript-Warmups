
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

console.log(presidentFunction())
