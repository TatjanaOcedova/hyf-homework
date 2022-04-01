-- Part 1: Working with tasks
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES("write homework", "database week 2", "2022-3-15 06:54:16", "2022-3-15 09:54:16", "2022-3-15 12:54:16", 3, 1 
);

-- Change the title of a task
UPDATE
    task
SET
    title = "update homework"
WHERE
    id = 38;

-- Change a task due date
UPDATE
    task
SET
    due_date = "2022-3-19 12:00:00"
WHERE
    id = 38;
-- Change a task status
UPDATE
    task
SET
    status_id = 2
WHERE
    id = 38;

-- Mark a task as complete
UPDATE
    task
SET
    status_id = 3
WHERE
    id = 38;
-- Delete a task
DELETE
FROM
    task
WHERE
    id = 37;
