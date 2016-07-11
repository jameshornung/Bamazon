USE Bamazon_db;

CREATE TABLE departments (
	Departmentid INT NOT NULL AUTO_INCREMENT,
	DepartmentName VARCHAR(100) NOT NULL,
	OverheadCost INT NOT NULL,
	TotalSales INT,
	Profit INT,
	PRIMARY KEY(DepartmentId)
);

INSERT INTO departments(DepartmentName, OverheadCost) VALUES('Running Shoes', 2000);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES('Apparel', 2000);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES('Electronics', 3000);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES('Accessories', 1000);