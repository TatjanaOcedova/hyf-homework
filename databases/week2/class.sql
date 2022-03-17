---  Get all the tasks assigned to `Pavel`
SELECT
    task.title, user.name
FROM
    user
JOIN
    task
ON user.id = task.id
WHERE
    name 
LIKE
    "%Pavel%";

--- Find how many tasks each user is responsible for
SELECT
    COUNT(task.id), user.name
FROM
    task
JOIN
    user
ON user.id = task.id
GROUP BY 
    user.name;

---  Find how many tasks with a `status=Done` each user is responsible for
SELECT
    COUNT(task.id), user.name
    --task.*
FROM
    task
JOIN
    user
     ON task.user_id  = user.id
JOIN
    status
ON
    task.status_id = status.id 
WHERE
    status.name = "DONE"
GROUP BY
   user.name;
;

SELECT
*
FROM
task;
SELECT
*
FROM
status;
