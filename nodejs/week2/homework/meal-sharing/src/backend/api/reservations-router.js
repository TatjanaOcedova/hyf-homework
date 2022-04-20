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
  const reservationId = Number(request.params.id);
  if(!isNaN(reservationId)) {
    let newReservation = reservations.find(item => item.id === reservationId)
    if(newReservation) {
      response.send(newReservation)
    }else{
      response.status(200).json("There is no reservation with the requested id!")
    }
  }else{
    response.status(400).json("Please write valid id!")
  
  }
});




module.exports = router;

