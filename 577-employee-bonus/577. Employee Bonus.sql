SELECT
    e.name,
    b.bonus
FROM
    Employee e
    LEFT JOIN Bonus b ON b.empId = e.empId
WHERE
    b.bonus < 1000
    OR b.bonus is null;

/* 
 
 Case 1
 Input
 Employee =
 | empId | name   | supervisor | salary |
 | ----- | ------ | ---------- | ------ |
 | 3     | Brad   | null       | 4000   |
 | 1     | John   | 3          | 1000   |
 | 2     | Dan    | 3          | 2000   |
 | 4     | Thomas | 3          | 4000   |
 Bonus =
 | empId | bonus |
 | ----- | ----- |
 | 2     | 500   |
 | 4     | 2000  |
 Output
 | name | bonus |
 | ---- | ----- |
 | Brad | null  |
 | John | null  |
 | Dan  | 500   |
 Expected
 | name | bonus |
 | ---- | ----- |
 | Brad | null  |
 | John | null  |
 | Dan  | 500   |
 */