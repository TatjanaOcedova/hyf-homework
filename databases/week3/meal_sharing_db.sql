
USE meal_sharing;


-- Create data tables
CREATE TABLE `Meal` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) NOT NULL,
    `description` text NULL DEFAULT NULL,
    `location` varchar(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservation` int(10) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `created_date` DATE NULL DEFAULT NULL
);
ALTER TABLE Meal
DROP COLUMN max_reservation;

ALTER TABLE Meal
ADD max_reservation int(10) NOT NULL;

CREATE TABLE `Reservation` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` int(10) NOT NULL,
    `meal_id` int(10) unsigned NOT NULL,
    `created_date` DATE NULL DEFAULT NULL,
    `contact_phonenumber` varchar(255) NOT NULL,
    `contact_name` varchar(255) NOT NULL,
    `contact_email` varchar(255) NOT NULL,
    CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `Review` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) NOT NULL,
    `description` text NULL DEFAULT NULL,
    `meal_id` int(10) unsigned NOT NULL,
    `stars` int(10) NOT NULL,
    `created_date` DATE NULL DEFAULT NULL,
    CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Meals
INSERT INTO 
    `Meal` (`title`, `description`, `location`, `when`, `max_reservation`, `price`, `created_date`)
VALUES
    ("bombay burritos", "Curry mashed potatoes, chickpeas, cauliflower, spinach and pickled onions wrap in a tortilla", "India", "2022-03-23", 20, 200, "2022-03-20"),
    ("ratatouille","Roasted veggies over creamy polenta", "France", "2022-03-23", 20, 220, "2022-03-20"),
    ("stir fry","Stir- fry seasonal vegetables with noodles", "China", "2022-03-23", 20, 180, "2022-03-20"),
    ("vegan carbonara", "Pasta with cashew butter and mushrooms", "Italy", "2022-03-23", 20, 250, "2022-03-20"),
    ("sarma", "Cabbage roll with rice and veggies", "Macedonia", "2022-03-23", 20, 120, "2022-03-20");


-- Reservation
INSERT INTO
    `Reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES
    (4, 2, "2022-03-25", "+45 01 02 03 04", "Tatjana", "tatjana@email.com"),
    (3, 5, "2022-03-30", "+45 55 66 44 33", "Dimitar", "dimitar@email.com"),
    (10, 1, "2022-03-29", "+45 33 22 11 00", "Milena", "milena@email.com"),
    (6, 4, "2022-03-27", "+45 11 22 03 04", "Ben", "ben@email.com"),
    (2, 3, "2022-03-26", "+45 99 88 77 66", "Ema", "ema@email.com");
    

-- Review

INSERT INTO 
    `Review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES
    ("good", "The food is delicious, you get a lot of food for the price.", 2, 4, "2022-03-25"),
    ("very good", "The food is absolutely amazing", 5, 4, "2022-03-30"),
    ("awesome", "wonderful time", 1, 5, "2022-03-29"),
    ("always great", "It's always fun to try and learn many food", 4, 5, "2022-03-27"),
    ("amazing", "The food is absolutely amazing everything we tasted melted in other mouths.", 3, 5, "2022-03-26");