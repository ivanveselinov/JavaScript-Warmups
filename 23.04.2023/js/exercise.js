

const weather = function (day) {
  if ( day === "Sunday"){
    console.log("You should rest")
  } else {
    console.log("Go back to work")
  }
}

weather("Sunday");
weather("Monday")

const temperature = function (temperature) {

  if (temperature >= 40) {
    console.log(`Weather is too hot to go outside and temperature is ${temperature } 🥵`);
  } else if ( temperature <= 39 && temperature >= 30) {
    console.log(`Still risky to go outside, temperature is ${temperature} 🌞`);
  } else if ( temperature <= 29 && temperature >= 20 ){
    console.log(`Weather is good for walking, go outside and enjoy. Current temperature is ${temperature} 😎`);
  } else if ( temperature <= 19 && temperature >= 10) {
    console.log(`Take a jacket, outside can be cold current temperature is ${temperature} 🫥`)
  }
  else {
    console.log(`Outside is cold and Temperature is ${temperature} 🥶`);
  }

}

temperature(41)
temperature(40)
temperature(37)
temperature(29)
temperature(19)
temperature(5)
