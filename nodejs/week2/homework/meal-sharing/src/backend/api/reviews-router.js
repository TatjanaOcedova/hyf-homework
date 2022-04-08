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
  if (!Number.isInteger(reviewId)) {
    response.status(400).json("There is no review with the requested id")
  }else{
    let newReview = {}
    reviews.find(item => {
      if(item.id === reviewId) {
      newReview = item
    }
  })
    return response.send(newReview)
  }
});

module.exports = router;