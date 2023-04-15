// Names

const sayMyName = function (name) {
  console.log(`Hi, ${name}`)
}

sayMyName("Ivan")
sayMyName("Marina")

// Numbers

const addNumbers = function (num1, num2){
  const result = num1 + num2;
  console.log(`Sum of ${num1} and ${num2} = ${result}`)
}

const number1 = 4
const number2 = 5

addNumbers(1,2)
addNumbers(7,21)
addNumbers(number1,2)
addNumbers(number1, number2)

 //

 const fortuneTeller = function (name, geographicLocation, partner, kids ) {
   console.log(`You will be ${name} in ${geographicLocation}, and married to ${partner} with ${kids} kids`);
 }

fortuneTeller("Ivan", "Melbourne", "Marina", 3)
fortuneTeller("Ice", "Ballarat", "Kim", 2)


const puppyAgeCalculator = function (currentYear, birthYear){

  const calculatedAge = currentYear - birthYear
  const maybeAge = currentYear - birthYear - 1

  console.log(`You puppy is either ${calculatedAge} or ${maybeAge} years old`);
}

puppyAgeCalculator(2023, 2022)
puppyAgeCalculator(2022, 2020)

const lifeTimeSupply = function (foodAmouthPerDay, death, currentYear, birthYear){

  const timeUntilYouDie = death - (currentYear - birthYear)

  const foodSupply = (timeUntilYouDie * 365 ) * 3

  console.log(`You have left ${timeUntilYouDie} years to live and you will eat ${foodSupply} times until you die`);
}

lifeTimeSupply(3, 2064, 2023, 1991)
lifeTimeSupply(4, 2065, 2023, 1991)


const celsiusToFahreit = function (celsiusTemperature) {

  const fahreit = ((celsiusTemperature * 9 )/ 5 ) + 32

  console.log(`Tempareture is ${celsiusTemperature} Celsius or ${fahreit} fahreit`)
}

celsiusToFahreit(35)
celsiusToFahreit(45)
