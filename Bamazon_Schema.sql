CREATE DATABASE Bamazon_db;

USE Bamazon_db;

CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(100) NOT NULL,
	DepartmentName VARCHAR(100) NOT NULL,
	Price INT default 0,
	StockQuantity INT default 0,
	PRIMARY KEY(id)
);

INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('Brooks Launch 2', 'Running Shoes', 99, 12);
INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('Adidas Supernova Glide 8', 'Running Shoes', 129.95, 20);
INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('Mizuno Wave Rider 18', 'Running Shoes', 119.95, 10);
INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('Nike LUNARGLIDE 8', 'Running Shoes', 119.95, 33);
INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('Nike Men\'s Running Tee', 'Apparel', 70, 10);
INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('Nike Men\'s Running Tank', 'Apparel', 45, 12);
INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('Nike Women\'s Running Tee', 'Apparel', 75, 40);
INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('Nike Women\'s Running Tank', 'Apparel', 50, 3);
INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('Hydration Belt', 'Accessories', 55, 4);
INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('Headlamp', 'Accessories', 25, 20);
INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity) VALUES ('GPS Watch', 'Electronics', 299.99, 2);
