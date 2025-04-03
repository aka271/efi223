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


> **Syntax MIN**
> ```sql
> SELECT MIN(column_name)
> FROM table_name
> WHERE condition;
> ```

The <span style="color: red;">MAX()</span> function returns the largest value of the selected column.
> **Syntax MAX**
> ```sql
> SELECT MAX(column_name)
> FROM table_name
> WHERE condition;
> ```

## SQL SELECT LIKE, IN, BETWEEN
### LIKE
The <span style="color: red;">LIKE</style> operator is used in a WHERE clause to search for a specified pattern in a column.

There are two wildcards often used in conjunction with the LIKE operator:
- The percent sign % represents zero, one, or multiple characters
- The underscore sign _ represents one, single character

> **Syntax Like**
> ```sql
> SELECT column1, column2, ...
> FROM table_name
> WHERE columnN LIKE pattern; 
> ```

> **Example**
> ```sql
> SELECT * 
> FROM Customers
> WHERE CustomerName LIKE 'a%'; 
> ```

### IN
The <span style="color: red;">IN</span> operator allows you to specify multiple values in a WHERE clause.

The <span style="color: red;">IN</span> operator is a shorthand for multiple OR conditions.

> **Syntax Like**
> ```sql
> SELECT column_name(s)
> FROM table_name
> WHERE column_name IN (value1, value2, ...);
> ```

> **Example**
> ```sql
> SELECT * FROM Customers
> WHERE Country IN ('Germany', 'France', 'UK');
> ```

### BETWEEN
The <span style="color: red;">BETWEEN</span> operator selects values within a given range. The values can be numbers, text, or dates.

The <span style="color: red;">BETWEEN</span> operator is inclusive: begin and end values are included. 

> **Syntax Like**
> ```sql
> SELECT column_name(s)
> FROM table_name
> WHERE column_name BETWEEN value1 AND value2;
> ```

> **Example**
> ```sql
> SELECT * FROM Products
> WHERE Price BETWEEN 10 AND 20;
> ```

## SQL INSERT INTO
The <span style="color: red;">INSERT INTO</span> statement is used to insert new records in a table.

> **Syntax Like**
> ```sql
> INSERT INTO table_name (column1, column2, column3, ...)
> VALUES (value1, value2, value3, ...); 
> ```

> **Example**
> ```sql
> INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
> VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
> ```

## SQL UPDATE SET
The <span color="color: red;">UPDATE<span> statement is used to modify the existing records in a table.

> **Syntax Like**
> ```sql
> UPDATE table_name
> SET column1 = value1, column2 = value2, ...
> WHERE condition; 
> ```

> **Example**
> ```sql
> UPDATE Customers
> SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
> WHERE CustomerID = 1;
> ```

## SQL DELETE FROM
The <span style="color: red;">DELETE</span> statement is used to delete existing records in a table.

> **Syntax Like**
> ```sql
> DELETE FROM table_name WHERE condition;
> ```

> **Example**
> ```sql
> DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
> ```

## SQL CREATE TABLE
The <span style="color: red;">CREATE DATABASE</span> statement is used to create a new SQL database.

> **Syntax Like**
> ```sql
> CREATE DATABASE databasename; 
> ```

> **Example**
> ```sql
> CREATE DATABASE testDB;
> ```

## SQL datatypes: INT, DOUBLE, VARCHAR, BOOLEAN
|Data type|Description|
|-|-|
|VARCHAR(size)|A VARIABLE length string (can contain letters, numbers, and special characters). The size parameter specifies the maximum string length in characters - can be from 0 to 65535|
|INT(size)| 	A medium integer. Signed range is from -2147483648 to 2147483647. Unsigned range is from 0 to 4294967295. The size parameter specifies the maximum display width (which is 255)|
|BOOLEAN/BOOL|Zero is considered as false, nonzero values are considered as true. |
|DOUBLE(size, d)| 	A normal-size floating point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter|


## SQL datatypes: DATE, TIMESTAMP
|Data type|Description|
|-|-|
|DATE| 	A date. Format: YYYY-MM-DD. The supported range is from '1000-01-01' to '9999-12-31'|
|TIMESTAMP(fsp)|A timestamp. TIMESTAMP values are stored as the number of seconds since the Unix epoch ('1970-01-01 00:00:00' UTC). Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC. Automatic initialization and updating to the current date and time can be specified using DEFAULT CURRENT_TIMESTAMP and ON UPDATE CURRENT_TIMESTAMP in the column definition|

## SQL relationship model
TODO