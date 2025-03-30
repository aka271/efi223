# SQL
SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases. It allows users to interact with databases by performing operations.

A good practice website can be found [here](https://www.sql-practice.com/).

## SQL SELECT WHERE
The <span style="color: red;">WHERE</span> clause is used to filter records.\
It is used to extract only those records that fulfill a specified condition.

> **Syntax**
> ```sql
> SELECT column1, column2, ...
> FROM table_name
> WHERE condition;
> ```

> **Example**\
> Select all customers from Mexico:
> ```sql 
> SELECT *
> FROM Customers
> WHERE Country='Mexico';
> ```

## SQL SELECT ORDER BY ASC, DESC
The <span style="color: red;">ORDER BY</span> keyword is used to sort the result-set in ascending or descending order.

> **Syntax**
> ```sql
> SELECT column1, column2, ...
> FROM table_name
> WHERE ORDER BY column1, column2, ... ASC|DESC;
> ```

> **Example**\
> Sort the products by price:
> ```sql
> SELECT *
> FROM Products
> ORDER BY Price;
> ```

## SQL SELECT GROUP BY, HAVING
### GROUP BY
The <span style="color: red;">GROUP BY</span> statement groups rows that have the same values into summary rows, like "find the number of customers in each country".
The <span style="color: red;">GROUP BY</span> statement is often used with aggregate functions (<span style="color: red;">COUNT()</span>, <span style="color: red;">MAX()</span>, <span style="color: red;">MIN()</span>, <span style="color: red;">SUM()</span>, <span style="color: red;">AVG()</span>) to group the result-set by one or more columns.

> **Syntax**
> ```sql
> SELECT column_name(s)
> FROM table_name
> WHERE condition
> GROUP BY column_name(s)
> ORDER BY column_name(s);
> ```

> **Example**\
> The following SQL statement lists the number of customers in each country, sorted high to low:
> ```sql
> SELECT COUNT(CustomerID), Country
> FROM Customers
> GROUP BY Country
> ORDER BY COUNT(CustomerID) DESC;
> ```

### HAVING
The <span style="color: red;">HAVING</span> clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.

- <span style="color: red;">WHERE</span> is used to filter rows before any aggregation takes place.
- <span style="color: red;">HAVING</span> is used to filter rows after the aggregation (i.e., after the <span style="color: red;">GROUP BY</span> operation and aggregate functions like <span style="color: red;">SUM()</span>, <span style="color: red;">COUNT()</span>, <span style="color: red;">AVG()</span>, etc.).

> **Syntax**
> ```sql
> SELECT column_name(s)
> FROM table_name
> WHERE condition
> GROUP BY column_name(s)
> HAVING condition
> ORDER BY column_name(s);
> ```

> **Example**\
> The following SQL statement lists the number of customers in each country. Only include countries with more than 5 customers:
> ```sql
> SELECT COUNT(CustomerID), Country
> FROM Customers
> GROUP BY Country
> HAVING COUNT(CustomerID) > 5;
> ```

## SQL SELECT SUM, COUNT, MIN, MAX, AVG
### COUNT
The <span style="color: red;">COUNT()</span> function returns the number of rows that matches a specified criterion.

> **Syntax**
> ```sql
> SELECT COUNT(column_name)
> FROM table_name
> WHERE condition;
> ```

> **Example**\
> The following SQL statement finds the number of products:
> ```sql
> SELECT COUNT(ProductID)
> FROM Products;
> ```

### AVG
The <span style="color: red;">AVG()</span> function returns the average value of a numeric column.

> **Syntax**
> ```sql
> SELECT AVG(column_name)
> FROM table_name
> WHERE condition;
> ```

> **Example**\
> The following SQL statement finds the average price of all products:
> ```sql
> SELECT AVG(Price)
> FROM Products;
> ```

### SUM
The <span style="color: red;">SUM()</span> function returns the total sum of a numeric column.

> **Syntax**
> ```sql
> SELECT SUM(column_name)
> FROM table_name
> WHERE condition;
> ```

> **Example**\
> The following SQL statement finds the sum of the "Quantity" fields in the "OrderDetails" table:
> ```sql
> SELECT SUM(Quantity)
> FROM FROM OrderDetails;
> ```

### MIN/MAX
The <span style="color: red;">MIN()</span> function returns the smallest value of the selected column.\
The <span style="color: red;">MAX()</span> function returns the largest value of the selected column.

> **Syntax MIN**
> ```sql
> SELECT MIN(column_name)
> FROM table_name
> WHERE condition;
> ```

> **Syntax MAX**
> ```sql
> SELECT MAX(column_name)
> FROM table_name
> WHERE condition;
> ```

## SQL SELECT LIKE, IN, BETWEEN
## SQL INSERT INTO
## SQL UPDATE SET
## SQL DELETE FROM
## SQL CREATE TABLE
## SQL datatypes: INT, DOUBLE, VARCHAR, BOOLEAN
## SQL datatypes: DATE, TIMESTAMP
## SQL Relationshipmodell
