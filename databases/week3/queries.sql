-- Get all meals
SELECT
    *
FROM
    Meal;

-- Add a new meal
INSERT INTO 
    `Meal` (`title`, `description`, `location`, `when`, `max_reservation`, `price`, `created_date`)
VALUES
    ("pad thai", "Thai noodle stir fry with a sweet-savoury-sour sauce scattered with crushed peanuts", "Thailand", "2022-03-22", 20, 220, "2022-03-22");

-- Get a meal with any id, fx 1
SELECT
    *
FROM
    Meal
WHERE
    id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
    Meal
SET
    max_reservation = 25
WHERE
    id = 1;


-- Delete a meal with any id, fx 1
DELETE FROM
    Meal
WHERE
    id = 6;


-- Get all reservations
SELECT
    *
FROM
    Reservation;

-- Add a new reservation
INSERT INTO
    `Reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES
    (2, 5, "2022-03-23", "+45 91 82 73 64", "Alice", "alice@email.com");

-- Get a reservation with any id, fx 1
SELECT
    *
FROM
    Reservation
WHERE
    id = 3;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
    Reservation
SET
    created_date = "2022-03-25",
    meal_id = 3
WHERE
    id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM
    Reservation
WHERE
    id = 6;


-- Get all reviews
SELECT
    *
FROM
    Review;

-- Add a new review
INSERT INTO 
    `Review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES
    ("great", "The food was tasty but slow delivery", 5, 3, "2022-03-28");

-- Get a review with any id, fx 1
SELECT
    *
FROM
    Review
WHERE
    id = 6;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
    Review
SET
    stars = 4
WHERE
    id = 6;

-- Delete a review with any id, fx 1
DELETE FROM
    Review
WHERE
    id = 6;


-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90
SELECT
    *
FROM
    Meal 
WHERE
    price < 200;

-- Get meals that still has available reservations

SELECT
    Meal.title,
    Reservation.number_of_guests
FROM
    Meal 
JOIN
    Reservation
ON 
    Meal.id = Reservation.meal_id
WHERE
    Meal.max_reservation > Reservation.number_of_guests;


-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT
    title
FROM
    Meal
WHERE
    title LIKE "%vegan%";

-- Get meals that has been created between two dates
SELECT
    title, created_date
FROM
    Meal
WHERE
    created_date BETWEEN "2022-03-19" AND "2022-03-22";

-- Get only specific number of meals fx return only 5 meals
SELECT
    title
FROM
    Meal
LIMIT
    3;

-- Get the meals that have good reviews
SELECT
    Meal.title
FROM
    Meal 
JOIN
    Review
ON
    Meal.id = Review.meal_id
WHERE
    Review.stars = 5;

-- Get reservations for a specific meal sorted by created_date
SELECT
    *
FROM
    Reservation
WHERE
    Reservation.meal_id = 3
ORDER BY
    created_date;

-- Sort all meals by average number of stars in the reviews
SELECT
    AVG(Review.stars) as avg_stars,
    Meal.title
FROM
    Review
JOIN
    Meal 
ON
    Review.meal_id = Meal.id 
GROUP BY 
    Review.meal_id;
