const shortMovieTitle = movies.filter((movie) => movie.title.length < 5);
console.log(shortMovieTitle);

const longMovieTitle = movies.filter((movie) => movie.title.length > 10);
console.log(longMovieTitle);

const numMovies = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
console.log(numMovies);

//4. Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const ratingTagMovies = movies.map((movie) => {
  if (movie.rating >= 7) {
    movie.tag = "Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    movie.tag = "Average";
  } else if (movie.rating < 4) {
    movie.tag = "Bad";
  }
  return movie;
});
console.log(ratingTagMovies);

//5. Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const chainingMovie = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(chainingMovie);

//6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin
//const specialKeywords = ["Surfer", "Alien", "Benjamin"];
const specialKeywords = movies.filter(
  (movie) =>
    movie.title.toLowerCase().includes("surfer") ||
    movie.title.toLowerCase().includes("alien") ||
    movie.title.toLowerCase().includes("benjamin")
).length;
console.log(specialKeywords);

//7. Create an array of movies where a word in the title is duplicated.
const inspectDuplicatedWords = movies.filter((movie) => {
  const duplicatedWords = [];
  const dupWords = movie.title.toLowerCase().split(" ");
  let result = false;
  dupWords.forEach((word) => {
    if (duplicatedWords.includes(word)) {
      result = true;
    } else {
      duplicatedWords.push(word);
    }
  });
  return result;
});
console.log(inspectDuplicatedWords);

//8. Calculate the average rating of all the movies using reduce.

//9. Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123}
