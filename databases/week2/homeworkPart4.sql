-- Create a new database and use it
CREATE DATABASE library
    DEFAULT CHARACTER SET = 'utf8mb4';

USE library;

-- Create data table
CREATE TABLE `member` (
    `member_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` varchar(255) NOT NULL,
    `lastname` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phone` int(10) NOT NULL
    );

CREATE TABLE `book` (
    `book_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `author` varchar(255) NOT NULL,
    `publish_date` int(10) NOT NULL,
    `numbers_of_copy` int(10) NOT NULL
    );

CREATE TABLE `borrowing_log` (
    `book_id` int(10) unsigned NOT NULL,
    `member_id` int(10) unsigned NOT NULL,
    `borrowing_date` DATETIME NOT NULL
    );

ALTER TABLE book
DROP COLUMN publish_date;

ALTER TABLE book
ADD publish_date DATETIME NOT NULL;

SELECT
    *
FROM
    book;


-- Forgot to add foreing keys
ALTER TABLE borrowing_log
ADD  CONSTRAINT `fk_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE borrowing_log
ADD  CONSTRAINT `fk_member` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;