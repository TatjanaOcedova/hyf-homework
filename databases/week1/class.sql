--1 Select the names and phones of all users;
SELECT
   name, phone
FROM
    user;

 
--2 Select the name of the user with id=10;
SELECT
   name
FROM
  user
WHERE
  id=10;


--3 Find how many users exist in the database;
SELECT
    COUNT(*)
FROM
    user;


--4 Select the names of the first 5 users in the database;
SELECT
    name
FROM
    user
ORDER BY
    id
LIMIT
    5;


--5 Select the names of the last 3 users in the database;
SELECT
    name
FROM
    user
ORDER BY 
    id DESC
LIMIT
    3;


--6 Sum all the ids in the user table;
SELECT
    SUM(id)
AS
    total
FROM
    user;


--7 Select all users and order them alphabetically by name;
SELECT
    name
FROM
    user
ORDER BY name ASC;


--8 Find all tasks that include SQL either on the title or on the description;
SELECT
    *
FROM
    task
WHERE 
    title LIKE "%SQL%" OR description LIKE "%SQL%";


--9 Find the title of all tasks that the user Maryrose is responsible for;
SELECT
    title, name 
FROM
    user
LEFT JOIN
     task
ON task.user_id = user.id
WHERE 
    user.name LIKE "%Maryrose%";


--10 Find how many tasks each user is responsible for;
SELECT COUNT(user_id), name
FROM
task
LEFT JOIN 
    user
    ON task.user_id = user.id
GROUP BY
user_id;  


