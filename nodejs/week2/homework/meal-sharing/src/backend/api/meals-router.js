const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  const maxPrice = request.query.maxPrice;
  const title = request.query.title;
  const createdAfter = request.query.createdAfter;
  const limit = request.query.limit;
  //Get meals that has a price smaller than maxPrice
  if(maxPrice) {
    response.send(meals.filter(item => item.price < maxPrice))
    return;
   //Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
  }else if (title){
    response.send(meals.filter(item => item.title.toLowerCase().includes(title.toLowerCase())));
    return;
    //Get meals that has been created after the date
  }else if (createdAfter) {
    response.send(meals.filter(item => new Date(item.createdAt) > new Date(createdAfter)));
    return;
    //Only specific number of meals
  }else if (limit) {
    response.send(meals.splice(0, limit))
    return;
  }
  try {
    response.send(meals)
    console.log(meals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});





router.get("/:id", async(request, response) => {
  const mealId = Number(request.params.id);
  const getId = meals.filter(item => item.id === mealId);
  if(getId.length > 0) {
    response.send(getId)
  }else
  response.send("There is no meal with the requested id")
});

module.exports = router;
