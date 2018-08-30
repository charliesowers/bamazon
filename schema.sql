create database bamazon;

use bamazon;

create table products(
	item_id int not null auto_increment,
	product_name varchar(30) not null,
	department_name varchar(30),
	price decimal(10,2) not null,
	stock_quantity int,
    primary key(item_id)
);

INSERT into products(product_name, department_name, price, stock_quantity)
values ('Sponge','Home',2.35,10);
INSERT into products(product_name, department_name, price, stock_quantity)
values ('iPhone','Electronics',255.99,30);
INSERT into products(product_name, department_name, price, stock_quantity)
values ('Rake','Outdoor',9.99,20);
INSERT into products(product_name, department_name, price, stock_quantity)
values ('Hammer','Tools',5.55,25);
INSERT into products(product_name, department_name, price, stock_quantity)
values ('Sunglasses','Glasses',23.50,20);
INSERT into products(product_name, department_name, price, stock_quantity)
values ('Pillow','Home',220.69,15);
INSERT into products(product_name, department_name, price, stock_quantity)
values ('Spatula','Kitcen',5.45,4);
INSERT into products(product_name, department_name, price, stock_quantity)
values ('Lawn Mower','Outdoor',100.00,6);
INSERT into products(product_name, department_name, price, stock_quantity)
values ('Piano','Music',435.99,7);
INSERT into products(product_name, department_name, price, stock_quantity)
values ('Screwdriver','Tools',10.65,30);