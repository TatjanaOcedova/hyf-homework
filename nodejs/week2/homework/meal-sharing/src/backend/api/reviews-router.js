const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    response.send(reviews)
    // console.log(reviews);
    // console.log("in /api/reviews");
  } catch (error) {
    throw error;
  }
});


router.get("/:id", async(request, response) => {
  const reviewId = Number(request.params.id);
  if(!isNaN(reviewId)) {
    let newReview = reviews.find(item => item.id === reviewId)
    if(newReview) {
      response.send(newReview)
    }else{
      response.status(200).json("There is no review with the requested id!")
    }
  }else{
    response.status(400).json("Please write valid id!")
  
  }
});



module.exports = router;