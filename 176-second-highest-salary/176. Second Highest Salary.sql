SELECT MAX(salary) as SecondHighestSalary
FROM employee
WHERE salary < (SELECT MAX(salary) FROM employee);

/* 

Case 1::
Input
Employee =
| id | salary |
| -- | ------ |
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
Output
| SecondHighestSalary |
| ------------------- |
| 200                 |
Expected
| SecondHighestSalary |
| ------------------- |
| 200                 |

Case 2::
Employee =
| id | salary |
| -- | ------ |
| 1  | 100    |
Output
| SecondHighestSalary |
| ------------------- |
| null                |
Expected
| SecondHighestSalary |
| ------------------- |
| null        
 */