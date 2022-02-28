//movies exercise
fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const badMovies = data.filter((movie) => movie.rating < 5);
    const newBadMovies = badMovies.filter((movie) => movie.year > 2000);

    console.log(badMovies);
    console.log(newBadMovies);
  });

//Promise that resolves after set time
myPromise(8).then(() => {
  console.log("I am called asynchronously"); // logged out after 8 seconds
});

function myPromise(resolveAfter) {
  const setTime = resolveAfter * 1000;
  return new Promise((resolve) => setTimeout(resolve, setTime));
}

//Rewrite time
setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

function getCurrentLocation() {
  return new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        position = { latitude, longitude };
        resolve(position);
      });
    } else {
      reject;
    }
  });
}

function setTimeoutPromise(msec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log("After 3 seconds");
    }, msec);
  });
}

//Fetching and waiting

// Promise.resolve()
//   .then(function () {
//     return fetch(
//       "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
//     );
//   })
//   .then(function (result) {
//     setTimeout(() => {
//       console.log(result);
//       return result.json;
//     }, 3000);
//   })
//   .then(function (data) {
//     // console.log(data);
//     return Promise.resolve();
//   })
//   .catch(console.log.bind(console));

async function deckOfCard() {
  try {
    const response = await fetch(
      "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    console.log(response);
    const cards = await response.json();
    return cards;
  } catch (error) {
    console.log(error);
  }
}
setTimeout(() => {
  deckOfCard();
}, 3000);
