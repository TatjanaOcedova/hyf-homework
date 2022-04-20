const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  
  try {
    const maxPrice = request.query.maxPrice;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;
    let filteredMeals;

    
    //Get meals that has a price smaller than maxPrice
    if(maxPrice) {
     filteredMeals = meals.filter(item => item.price < Number(maxPrice))
      if(!Number(maxPrice)) {
        return response.status(400).send("Please write correct price!");
      } if(filteredMeals === []){
           return response.status(200).send("Please write price!");
       } else{
        return response.send(filteredMeals)
      }
  
     //Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
    }if (title){
      filteredMeals = meals.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))
      return response.send(filteredMeals);
      
  
      //Get meals that has been created after the date
     
    }if (createdAfter) {
     filteredMeals = meals.filter((item => new Date(item.createdAt) > Date.parse(createdAfter)))
     if(!Date.parse(createdAfter)) {
      return response.status(400).send("Please write correct date!");
      //is not working
     }else if(filteredMeals === []){
       return response.status(200).send("No meals available");
     }else{
       return response.send(filteredMeals)
     }
      
     
      //Only specific number of meals
    }if (limit) {
      filteredMeals = (meals.slice(0, limit))
      if(!Number(limit)) {
        return response.status(400).send("Please write correct limit!")
      }else {
        return response.send(filteredMeals)
      }
      return;
    }
    response.send(meals)
    // console.log(meals);
    // console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});



router.get("/:id", async(request, response) => {
  const mealId = Number(request.params.id);
  if(!isNaN(mealId)) {
    let newMeal = meals.find(item => item.id === mealId)
    if(newMeal) {
      response.send(newMeal)
    }else{
      response.status(200).json("There is no meal with the requested id!")
    }
  }else{
    response.status(400).json("Please write valid id!")
  
  }
});


module.exports = router;
