-- Part 3: More queries
-- You should do these queries on the database hyf_lesson2, which we created last class. You can find the data here if you need to create the DB again.
SELECT
*
FROM
user_task;
-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
    task.title, user.email
FROM
    task
JOIN
    user
WHERE
    user.email LIKE "%@spotify.com";

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
    task.title
    -- ,
    -- user.name, 
    -- task.status_id
FROM
    task
JOIN
    user
WHERE
    user.name = "Donald Duck" AND task.status_id = 1;

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT
    task.title,
    task.created,
    user.name
FROM
    task
JOIN
    user
WHERE
    user.name = "Maryrose Meadows" AND month(created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT
    COUNT(task.id) as "created tasks",
    month(created) as "month created"
FROM
    task
GROUP BY
    month(created);

