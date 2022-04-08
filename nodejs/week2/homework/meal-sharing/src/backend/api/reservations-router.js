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

// router.get("/:id", async(request, response) => {
//   const reservationId = Number(request.params.id);
//   const getId = reservations.filter(item => item.id === reservationId);
//   if(getId.length > 0) {
//     response.send(getId)
//   }else
//   response.send("There is no reservations with the requested id")
// });

router.get("/:id", async(request, response) => {
  const reservationId = Number(request.params.id);
  if (!Number.isInteger(reservationId)) {
    response.status(400).json("There is no reservation with the requested id")
  }else{
    let newReservation = {}
    reservations.find(item => {
      if(item.id === reservationId) {
      newReservation = item
    }
  })
    return response.send(newReservation)
  }
});

// router.get("/:id", async(request, response) => {
//   response.send({ data: reservations[(request.params.id -1)]})
// });


module.exports = router;

