DROP DATABASE IF EXISTS bamazon_db; 

CREATE DATABASE bamazon_db; 

USE bamazon_db; 

CREATE TABLE products(
product_id INT NOT NULL AUTO_INCREMENT, 
product_name VARCHAR(255) NOT NULL, 
department_name VARCHAR(50) NOT NULL, 
price INT NOT NULL,
stock_quantity INT NOT NULL, 
PRIMARY KEY (product_id)
); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Zebra Adidas Yeezy Boost 350", "Men Shoes", 220, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Gucci Guilty Cologne", "Men Frangrance", 75, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Louis Vuitton Never Full", "Women's Handbags", 1280, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Stokke Baby Stroller", "Baby Accessories", 990, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Paige Denim Jeans", "Women's Clothing", 198, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Tory Burch Miller Sandals", "Women Shoes", 199, 45);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Green Hershel Backpack", "Bags", 88, 79);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Honest Diaper Bag", "Baby Accessories", 99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Faux Fur Throw Blanket", "Home", 98, 65);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Samsung Smart TV", "Electronics", 1999, 11);


