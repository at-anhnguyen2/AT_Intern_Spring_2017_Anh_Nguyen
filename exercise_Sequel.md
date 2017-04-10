# Basic Select Challenges
## Revising the Select Query I
```sql
  SELECT * 
  FROM CITY 
  WHERE COUNTRYCODE = 'USA' 
  AND POPULATION > 100000
```
## Revising the Select Query II
```sql
  SELECT NAME 
  FROM CITY 
  WHERE COUNTRYCODE = 'USA' 
  AND POPULATION > 120000
```

## Select All
```sql
  SELECT *
  FROM CITY
```

## Select by ID
```sql
  SELECT *
  FROM CITY
  WHERE ID = '1661'
```

## Japanese Cities' Attributes 
```sql
  SELECT * 
  FROM CITY 
  WHERE COUNTRYCODE = "JPN"
```

## Japanese Cities' Names 
```sql
  SELECT NAME 
  FROM CITY WHERE 
  COUNTRYCODE = "JPN"
```

## Weather Observation Station 1 
```sql
  SELECT CITY, STATE 
  FROM STATION
```

## Weather Observation Station 3 
```sql
  SELECT DISTINCT CITY 
  FROM STATION 
  WHERE ID % 2 = 0
```

## Weather Observation Station 4 
```sql
  SELECT COUNT(CITY) - COUNT(DISTINCT CITY) 
  FROM STATION
```

## Weather Observation Station 5 
```sql
  SELECT CITY, CHAR_LENGTH(CITY) 
  FROM STATION 
  ORDER BY CHAR_LENGTH(CITY) ASC, CITY ASC LIMIT 1;
  SELECT CITY, CHAR_LENGTH(CITY) 
  FROM STATION 
  ORDER BY CHAR_LENGTH(CITY) DESC, CITY ASC LIMIT 1;
```

## Weather Observation Station 6 
```sql
  SELECT DISTINCT CITY 
  FROM STATION 
  WHERE CITY RLIKE '^[aeiouAEIOU].*$'
```

## Weather Observation Station 7 
```sql
  SELECT DISTINCT CITY 
  FROM STATION 
  WHERE CITY RLIKE '.*[aeiouAEIOU]$'
```

## Weather Observation Station 8 
```sql
  SELECT DISTINCT CITY 
  FROM STATION 
  WHERE CITY RLIKE '^[aeiouAEIOU].*[aeiouAEIOU]$'
```

## Weather Observation Station 9
```sql
  SELECT DISTINCT CITY 
  FROM STATION
  WHERE  CITY NOT RLIKE '^[aeiouAEIOU].*$'
```

## Weather Observation Station 10 
```sql
  SELECT DISTINCT CITY
  FROM STATION
  WHERE CITY NOT RLIKE '.*[aeiouAEIOU]$'
```

## Weather Observation Station 11 
```sql
  SELECT DISTINCT CITY
  FROM STATION
  WHERE CITY NOT RLIKE '^[aeiouAEIOU].*[aeiouAEIOU]$'
```

## Weather Observation Station 12
```sql
  SELECT DISTINCT CITY
  FROM STATION
  WHERE CITY NOT RLIKE '^[aeiouAEIOU].*$'
  AND CITY NOT RLIKE '.*[aeiouAEIOU]$'
```

## Higher Than 75 Marks 
```sql
  SELECT Name 
  FROM STUDENTS
  WHERE Marks > 75 
  ORDER BY RIGHT(Name, 3) ASC, ID ASC
```

## Employee Names 
```sql
  SELECT name 
  FROM Employee 
  ORDER BY name ASC
```

## Employee Salaries 
```sql
  SELECT name 
  FROM Employee 
  WHERE months < 10 
  AND salary > 2000
```

# Advanced Select Challenges
## Type of Triangle 
```sql
  SELECT CASE 
    WHEN (A + B) <= C OR (B + C) <= A OR (A + C) <= B THEN 'Not A Triangle'
    WHEN A = B AND B = C THEN 'Equilateral'
    WHEN (A = B) OR (B = C) OR (A = C) THEN 'Isosceles'
    WHEN A != B AND B != C AND A != C THEN 'Scalene'
  END 
  FROM TRIANGLES
```

## The PADS 
```sql
  SELECT CONCAT(Name, '(', LEFT(Occupation,1), ')') 
  FROM OCCUPATIONS
  ORDER BY Name ASC;
  SELECT CONCAT('There are total ', COUNT(Occupation), ' ', LOWER(Occupation), 's.')
  FROM OCCUPATIONS
  GROUP BY Occupation
  ORDER BY COUNT(Occupation), Occupation ASC;
```

## Binary Tree Nodes 
```sql
  SELECT N, CASE
              WHEN P IS NULL THEN "Root"
              WHEN N IN (SELECT DISTINCT P FROM BST) THEN "Inner"
              ELSE "Leaf"
            END
  FROM BST
  ORDER BY N ASC
```

## New Companies 
```sql
  SELECT Company.company_code, 
    Company.founder, 
    COUNT(DISTINCT Employee.lead_manager_code), 
    COUNT(DISTINCT Employee.senior_manager_code), 
    COUNT(DISTINCT Employee.manager_code), 
    COUNT(DISTINCT Employee.employee_code)
  FROM Company
  INNER JOIN Employee ON Employee.company_code = Company.company_code
  GROUP BY Company.company_code,Company.founder
  ORDER BY Company.company_code ASC;
```

## Asian Population 
```sql
  SELECT SUM(CITY.POPULATION) 
  FROM CITY, COUNTRY
  WHERE CITY.COUNTRYCODE = COUNTRY.CODE AND COUNTRY.CONTINENT = 'Asia';
```