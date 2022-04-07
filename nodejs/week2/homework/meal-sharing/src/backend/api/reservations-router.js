const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    response.send(reservations)
    // console.log(reservations);
    // console.log("in /api/reservations");
  } catch (error) {
    throw error;
  }
});


router.get("/:id", async(request, response) => {
  const reservationsId = Number(request.params.id);
  const getId = reservations.filter(item => item.id === reservationsId);
  if(getId.length > 0) {
    response.send(getId)
  }else
  response.send("There is no reservation with the requested id")
});


module.exports = router;

