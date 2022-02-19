const inputCity = document.getElementById("inputField");
const buttonSearchCity = document.getElementById("button");

let city = document.getElementById("cityoutput");
let temp = document.getElementById("temp");
let LocationIcon = document.getElementById("icon");
let iconWeather = document.getElementById("icon");
let wind = document.getElementById("wind");
let clouds = document.getElementById("clouds");
let sunRise = document.getElementById("sunrise");
let sunSet = document.getElementById("sunset");
let map = document.getElementById("map");

function resetSearch() {
  city.innerHTML = "";
  temp.innerHTML = "";
  iconWeather.src = "";
  wind.innerHTML = "";
  clouds.innerHTML = "";
  sunRise.innerHTML = "";
  sunSet.innerHTML = "";
}

buttonSearchCity.addEventListener("click", () => {
  let inputVal = document.getElementById("message");
  inputVal = inputCity.value;
  resetSearch();
  if (inputCity.value == "") {
    inputVal.innerHTML = "Please search for a valid city";
  } else if (inputVal.value === undefined) {
    //console.log("greska");
    alert("Please search for a valid city");
    inputCity.value = "";
  } else {
    inputVal.innerHTML = "";
    inputCity.value = "";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=e64c5025eb778680cc166c7ba9b42654`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        //city
        city.innerHTML = data.name;

        // Temperature
        temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°`;

        // Icon for the weather type
        let icon = data.weather[0].icon;
        iconWeather.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${icon}@2x.png`
        );

        //Wind speed
        wind.innerHTML = `Wind ${data.wind.speed}m/s`;

        // How clowdy it is
        // let iconCloud = document.createElement("img");
        // iconCloud.src = "https://i.imgur.com/NjSawWx.png";
        // clouds.appendChild(iconCloud);
        clouds.innerHTML = `Cloudy ${data.clouds.all}%`;

        // When sunrise
        let riseTime = new Date(data.sys.sunrise * 1000);
        let riseHours = riseTime.getHours();
        let riseMinutes = riseTime.getMinutes();
        //let seconds = rise.getSeconds();
        sunRise.innerHTML = `Sunrise ${riseHours}:${riseMinutes}`;
        // When sunset
        let setTime = new Date(data.sys.sunset * 1000);
        let setHours = setTime.getHours();
        let setMinutes = setTime.getMinutes();
        //let seconds = set.getSeconds();
        sunSet.innerHTML = `Sunset ${setHours}:${setMinutes}`;
        // Optional a map showing where the city is located
      });
  }
});

//Use my current position optional
const getLocation = document.getElementById("buttonLocation");
getLocation.addEventListener("click", (e) => {
  resetSearch();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let latit = position.coords.latitude;
        let longi = position.coords.longitude;
        let showLocation = document.getElementById("message");
        showLocation.innerHTML =
          "Latitude: " + latit + "<br />" + "Longitude: " + longi;
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latit}&lon=${longi}&appid=e64c5025eb778680cc166c7ba9b42654`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            // Temperature
            temp.innerHTML = `${Math.round(data.current.temp - 273.15)}°`;

            // // Icon for the weather type
            let icon = data.current.weather[0].icon;
            iconWeather.setAttribute(
              "src",
              `http://openweathermap.org/img/wn/${icon}@2x.png`
            );

            //Wind speed
            wind.innerHTML = `Wind ${data.current.wind_speed}m/s`;

            // How clowdy it is
            //I try to add icon but can't display
            //<i class="fas fa-cloud" aria-hidden="true"></i>
            // const iconCloud = document.createElement("i");
            // iconCloud.setAttribute("class", "fas fa-cloud");
            // document.body.appendChild(iconCloud);
            clouds.innerHTML = `Cloudy ${data.current.clouds}%`;

            // When sunrise
            let riseTime = new Date(data.current.sunrise * 1000);
            let riseHours = riseTime.getHours();
            let riseMinutes = riseTime.getMinutes();
            //let seconds = rise.getSeconds();
            sunRise.innerHTML = `Sunrise ${riseHours}:${riseMinutes}`;
            // When sunset
            let setTime = new Date(data.current.sunset * 1000);
            let setHours = setTime.getHours();
            let setMinutes = setTime.getMinutes();
            //let seconds = set.getSeconds();
            sunSet.innerHTML = `Sunset ${setHours}:${setMinutes}`;

            // Optional a map showing where the city is located;
          });
      },

      (error) => {
        alert("Sorry, no position available.");
        let notShowLocation = document.getElementById("message");
        notShowLocation.innerHTML = "Unable to retrieve your location";
      }
    );
  }
});
