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
   let filterPrice = meals
    filterPrice = meals.filter(item => item.price < Number(maxPrice))
    if(!Number(maxPrice)) {
      return response.status(400).send("Please write correct price");
    }else{
      return response.json(filterPrice)
    }

   //Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
  }else if (title){
    response.send(meals.filter(item => item.title.toLowerCase().includes(title.toLowerCase())));
    return;

    //Get meals that has been created after the date
  }else if (createdAfter) {
   let filterDate = meals
   filterDate = meals.filter((item => new Date(item.createdAt) > new Date(createdAfter)))
   if(!Date.parse(createdAfter)) {
    return response.status(400).send("Please write correct date");
   }else{
     return response.json(filterDate)
   }
    return;
   
    //Only specific number of meals
  }else if (limit) {
    let filterLimit = meals;
    //meals[Math.floor(Math.random() * meals.length)]
    filterLimit = meals.filter(item => item.id <= limit)
    if(!Number(limit)) {
      return response.status(400).send("Please write correct limit")
    }else {
      return response.json(filterLimit)
    }
    // response.send(meals.splice(0, limit))
    return;
  }
  try {
    response.send(meals)
    // console.log(meals);
    // console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});





router.get("/:id", async(request, response) => {
  const mealId = Number(request.params.id);
  if (!Number.isInteger(mealId)) {
    response.status(400).json("There is no meal with the requested id")
  }else{
    let newMeal = {}
    meals.find(item => {
      if(item.id === mealId) {
      newMeal = item
    }
  })
    return response.send(newMeal)
  }
});

module.exports = router;
