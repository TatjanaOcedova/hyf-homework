const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(mealsWithReviews)
});


const mealsWithReviews = meals.map((meal) => {
  meal.reviews = [];
  reviews.filter((review) => {
    if (meal.id === review.mealId) {
      meal.reviews.push(review);
    }
  });
  return meal;
});


// // Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
app.get("/cheap-meals", async(request, response) => {
  const cheapMeals = mealsWithReviews.filter((meal) => meal.price <80);
  response.send(cheapMeals)
});


//Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get("/large-meals", async(request, response) => {
  const largeMeals = mealsWithReviews.filter((meal) => meal.maxNumberOfGuests > 5)
  response.send(largeMeals)
});

//Respond with the json for a random meal (including it's reviews)
app.get("/meal", async(request, response) => {
  const meal = meals[Math.floor(Math.random() * meals.length)]
  response.send(meal)
});


//Respond with the json for all reservations
app.get("/reservations", async(request, response) => {
  response.send(reservations)
});

//Respond with the json for a random reservation
app.get("/reservation", async(request, response) => {
  const reservation = reservations[Math.floor(Math.random() * reservations.length)]
  response.send(reservation)
});


module.exports = app;
