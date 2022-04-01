-- Part 2: School database
-- Create a new database containing the following tables:
CREATE DATABASE school
    DEFAULT CHARACTER SET = 'utf8mb4';

USE school;

-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE `Class` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `begins_date` DATETIME NOT NULL,
    `ends_date` DATETIME NOT NULL
    );
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `Student` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) DEFAULT NULL,
    `phone` int(10) NOT NULL,
    `class_id` int(10) unsigned NOT NULL
)

-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
