create table items(
 item_id serial primary key,
 item_name varchar(50) not null,
 item_price int not null
)
insert into items(item_name,item_price) 
values ('Small desk',100),
       ('large desk',300),
	   ('fan',80);

select *from items

create table customers(
  customer_id serial primary key,
  first_name varchar(50)  not null,
  last_name varchar(50) not null
)
TRUNCATE TABLE customers;
insert into customers(first_name,last_name) 
values ('Greg','Jones'),
    ('Sandra','Jones'),
	('Scott','Scott'),
	('Trevor','Green'),
	('Melanie','Johnson');
select *from customers
select * from items where item_price>80

select * from items where item_price<=300

select * from customers where last_name='Smith' --it gives nothing beacause no one has this last name

select * from customers 
where last_name = 'Jones'

select * from customers 
where last_name<>'Scott'