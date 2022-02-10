//Warmup
//1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

//2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function delayFunction(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay);
}
delayFunction(5000, "This string logged after 5 seconds");
delayFunction(3000, "This string logged after 3 seconds");

//3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const buttonClick = document.querySelector(".button-click");
buttonClick.addEventListener("click", function () {
  delayFunction(5000, "This string logged after 5 seconds");
});

/*4. Create two functions and assign them to two different variables. 
One function logs out Earth, the other function logs out Saturn. 
Now create a new third function that has one parameter: planetLogFunction. 
The only thing the third function should do is call the provided parameter function. 
Try call the third function once with the Earth function and once with the Saturn function.
*/
function earthLogger() {
  const earth = "";
  console.log("Earth");
}
function saturnLogger() {
  const saturn = "";
  console.log("Saturn");
}
function planetLogFunction(callPlanet) {
  callPlanet();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5.Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api.
const getLocation = document.querySelector(".buttonLogLocation");
getLocation.addEventListener("click", (e) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let showLocation = document.querySelector(".positionStatus");
      showLocation.innerHTML =
        "This is the latitude: " +
        latitude +
        "<br />" +
        "This is the longitude: " +
        longitude;
      //   let googleMapURL = `https://maps.googleapis.com/map/api/staticmap?center=${latitude},${longitude}&zoom=11&size=400x400`;
      //   const mapImage = document.querySelector(".mapImage");
      //   mapImage.src = googleMapURL;
    },
    (error) => {
      alert("Sorry, no position available.");
      let notShowLocation = document.querySelector(".positionStatus");
      notShowLocation.innerHTML = "Unable to retrieve your location";
    }
  );
});

//6. Optional Now show that location on a map using fx the Google maps api
//AIzaSyApgPufxowpU2Y5KbcqECDfIo3bHBDxRwE

/*7. Create a function called runAfterDelay. It has two parameters: delay and callback. 
When called the function should wait delay seconds and then call the provided callback function. 
Try and call this function with different delays and different callback functions.
*/
function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function () {
  console.log("should be logged after 4 seconds");
});
runAfterDelay(6, function () {
  console.log("should be logged after 6 seconds");
});

/* 8. Check if we have double clicked on the page. 
A double click is defined by two clicks within 0.5 seconds. 
If a double click has been detected, log out the text: "double click!" */
const doubleClick = () => {
  console.log("double click!");
};
document.addEventListener("dblclick", doubleClick);

/* 8. Create a function called jokeCreator that has three parameters: 
shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function
 that should log out a funny joke. And vice versa.
 */
let shouldTellFunnyJoke = true;
const logFunnyJoke = () => {
  console.log(
    "Funny joke: Did you hear about the claustrophobic astronaut? He just needed a little space."
  );
};
const logBadJoke = () => {
  console.log(
    "Bad joke: Can a dog jump higher than a house? Well, duh. Houses can’t jump."
  );
};
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    return logFunnyJoke(jokeCreator);
  } else {
    return logBadJoke(jokeCreator);
  }
}
jokeCreator(true, logFunnyJoke, logBadJoke);

//Function as a variable
//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const arrayWithFunction = [
  function first() {
    console.log("First function log");
  },
  function second() {
    console.log("Second function log");
  },
  function third() {
    console.log("Third function log");
  },
];
arrayWithFunction.forEach((e) => {
  e();
});

//Create a function as a const and try creating a function normally. Call both functions.
const functionExpression = () => {
  console.log("This is function expression.");
};
function functionDeclaration() {
  console.log("This is function declaration.");
}
functionExpression();
functionDeclaration();

//Create an object that has a key whose value is a function. Try calling this function.
const objectWithFunction = {
  info: () => {
    console.log("This is function in a a object!");
  },
};
objectWithFunction.info();
