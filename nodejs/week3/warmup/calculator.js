const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    response.send("Calculator homework");
  } catch (error) {
    throw error;
  }
});

//Getting data through query parameters using GET
router.get("/add", async (request, response) => {
  try {
    const addition = Object.values(request.query)
      .flat()
      .reduce(
        (firstParam, secondParam) => Number(firstParam) + Number(secondParam),
        0
      );
    if (isNaN(addition)) {
      return response.status(400).send("Please write valid number!");
    } else {
      response.send(`Result: ${addition}`);
    }
  } catch (error) {
    throw error;
  }
});

router.get("/sub", async (request, response) => {
  try {
    const subtraction = Object.values(request.query)
      .flat()
      .reduce(
        (firstParam, secondParam) => Number(firstParam) - Number(secondParam)
      );
    if (isNaN(subtraction)) {
      return response.status(400).send("Please write valid number!");
    } else {
      response.send(`Result: ${subtraction}`);
    }
  } catch (error) {
    throw error;
  }
});

router.get("/multiply", async (request, response) => {
  try {
    const multiply = Object.values(request.query)
      .flat()
      .reduce(
        (firstParam, secondParam) => Number(firstParam) * Number(secondParam)
      );
    if (isNaN(multiply)) {
      return response.status(400).send("Please write valid number!");
    } else {
      response.send(`Result: ${multiply}`);
    }
  } catch (error) {
    throw error;
  }
});

router.get("/division", async (request, response) => {
  try {
    const division = Object.values(request.query)
      .flat()
      .reduce(
        (firstParam, secondParam) => Number(firstParam) / Number(secondParam)
      );
    if (!Number(division) || division == "Infinity") {
      return response.status(400).send("Please write valid number!");
    } else {
      response.send(`Result: ${division}`);
    }
  } catch (error) {
    throw error;
  }
});

//Getting data through the request body using POST

router.post("/add", async (request, response) => {
  try {
    const addition = Object.values(request.body)
      .flat()
      .reduce(
        (firstParam, secondParam) => Number(firstParam) + Number(secondParam),
        0
      );
    if (isNaN(addition)) {
      return response.status(400).send("Please write valid number!");
    } else {
      response.send(`Result: ${addition}`);
    }
  } catch (error) {
    throw error;
  }
});

router.post("/sub", async (request, response) => {
  try {
    const subtraction = Object.values(request.body)
      .flat()
      .reduce(
        (firstParam, secondParam) => Number(firstParam) - Number(secondParam)
      );
    if (isNaN(subtraction)) {
      return response.status(400).send("Please write valid number!");
    } else {
      response.send(`Result: ${subtraction}`);
    }
  } catch (error) {
    throw error;
  }
});

router.post("/division", async (request, response) => {
  try {
    const division = Object.values(request.body)
      .flat()
      .reduce((a, b) => Number(a) / Number(b));
    if (!Number(division) || division == "Infinity") {
      return response.status(400).send("Please write valid number!");
    } else {
      response.send(`Result: ${division}`);
    }
  } catch (error) {
    throw error;
  }
});

router.post("/multiply", async (request, response) => {
  try {
    const multiplication = Object.values(request.body)
      .flat()
      .reduce(
        (firstParam, secondParam) => Number(firstParam) * Number(secondParam)
      );
    if (isNaN(multiplication)) {
      return response.status(400).send("Please write valid number!");
    } else {
      response.send(`Result: ${multiplication}`);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
