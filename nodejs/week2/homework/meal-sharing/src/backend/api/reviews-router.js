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
  const reviewsId = Number(request.params.id);
  const getId = reviews.filter(item => item.id === reviewsId);
  if(getId.length > 0) {
    response.send(getId)
  }else
  response.send("There is no review with the requested id")
});

module.exports = router;