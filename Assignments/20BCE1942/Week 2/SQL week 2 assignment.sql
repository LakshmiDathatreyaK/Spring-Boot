-- create, update, delete commands in mysql

CREATE DATABASE ASS2;

USE ASS2;

CREATE TABLE table1(
	PersonID int, 
	LastName varchar(255), 
	FirstName varchar(255), 
	City varchar(255)
);

INSERT INTO table1 values (1, 'Karnati', 'Vinay', 'Hyderabad');
INSERT INTO table1 values (2, 'Karnati', 'Iayanth', 'Hyderabad');
INSERT INTO table1 values (3, 'Vattem', 'Karthik', 'Vijayawada');

UPDATE table1 
SET City='Vizag'
WHERE PersonID=3;

DELETE FROM table1 
WHERE PersonID=2;

SELECT * from table1;

-- create tables and perform joins in mysql

CREATE TABLE customers (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50)
);

INSERT INTO customers (id, name, email)
VALUES
  (1, 'John Doe', 'john@example.com'),
  (2, 'Jane Smith', 'jane@example.com'),
  (3, 'Mike Johnson', 'mike@example.com');

CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer_id INT,
  product VARCHAR(50),
  quantity INT
);

INSERT INTO orders (id, customer_id, product, quantity)
VALUES
  (1, 1, 'Product A', 5),
  (2, 1, 'Product B', 3),
  (3, 2, 'Product C', 2),
  (4, 3, 'Product A', 10);

SELECT customers.name, orders.product, orders.quantity
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id;
