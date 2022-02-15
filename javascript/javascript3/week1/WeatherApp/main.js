const inputCity = document.getElementById("inputField");
const buttonSearchCity = document.getElementById("button");
var city = document.querySelector("#cityoutput");
var temp = document.querySelector("#temp");
var LocationIcon = document.querySelector("#icon");
let iconWeather = document.getElementById("icon");
// const { icon } = data.weather[0];
var wind = document.querySelector("#wind");
let clouds = document.getElementById("clouds");
let sunRiseAndSunSet = document.getElementById("sunrise and sunset");
let map = document.getElementById("map");
// temp = Math.round(parseFloat(temp) - 273.15);
buttonSearchCity.addEventListener("click", (e) => {
  e.preventDefault;
  let inputVal = document.getElementById("message");
  inputVal.innerHTML = inputCity.value;
  if (inputCity.value == "") {
    inputVal.innerHTML = "Please search for a valid city";
  } else {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=e64c5025eb778680cc166c7ba9b42654"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        //The chosen city
        city.innerHTML = `Weather of ${data.name}`;

        // Temperature
        temp.innerHTML = `The temperature is ${Math.round(
          data.main.temp - 273.15
        )}°C`;

        // Icon for the weather type
        let icon = data.weather[0].icon;
        iconWeather.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${icon}@2x.png`
        );

        //Wind speed
        wind.innerHTML = `The wind speed is ${data.wind.speed}meter/sec`;

        // How clowdy it is
        clouds.innerHTML = `It is ${data.clouds.all}% cloudy`;

        // When sunrise
        let riseTime = new Date(data.sys.sunrise * 1000);
        let riseHours = riseTime.getHours();
        let riseMinutes = riseTime.getMinutes();
        //let seconds = rise.getSeconds();

        // When sunrise
        let setTime = new Date(data.sys.sunset * 1000);
        let setHours = setTime.getHours();
        let setMinutes = setTime.getMinutes();
        //let seconds = set.getSeconds();
        sunRiseAndSunSet.innerHTML = `Sunrise Today: ${riseHours}:${riseMinutes} and Sunset Today: ${setHours}:${setMinutes}`;

        // Optional a map showing where the city is located
      });
  }
});
