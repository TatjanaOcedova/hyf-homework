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
