----------ex_1-----------
select* from film 

--1
select rating, count(*) as film_count from film
group by rating
order by film_count desc
--2
select title, rating, length from film where (rating='G' or rating='PG-13') 
and length/60<2 
and rental_rate<3
order by title asc
--3-4 "there is no colmn named address so i replace it by my email"
select * from customer
update customer set 
first_name='mustapha',
last_name='laaraj',
email='mustapha@gmail.com'
where first_name='Jared' and  last_name='Ely' and email='jared.ely@sakilacustomer.org';
select * from customer

--------ex_2------------
create table students(
 student_id serial primary key,
 first_name varchar(50) not null,
 last_name varchar (50) not null,
 borth_date date not null
)
TRUNCATE TABLE students restart identity;

insert into students(first_name, last_name, borth_date) 
values 
 ('Marc', 'Benichou', '1998-11-02'),
 ('Yaon', 'Cohen', '2010-12-03'),
 ('Lea', 'Benichou', '1987-07-27'),
 ('Emilia', 'Dux', '1996-04-07'),
 ('David', 'Grez', '2003-06-14'),
 ('Omer', 'Simpson', '1980-10-03');


-- update


update students
set borth_date = date '1998-11-02'
where (first_name = 'marc' and last_name = 'benichou')
   or (first_name = 'lea' and last_name = 'benichou');

update students
set last_name = 'guez'
where first_name = 'david' and last_name = 'grez';


-- delete


delete from students
where first_name = 'lea' and last_name = 'benichou';


-- count


select count(*) as total_students
from students;

select count(*) as born_after_2000
from students
where borth_date > date '2000-01-01';


-- insert / alter (grades)


alter table students
add column math_grade integer;

update students set math_grade = 80 where student_id = 1;

update students set math_grade = 90 where student_id in (2, 4);

update students set math_grade = 40 where student_id = 6;

select count(*) as grades_over_83
from students
where math_grade > 83;

insert into students (first_name, last_name, borth_date, math_grade)
select first_name, last_name, borth_date, 70
from students
where first_name = 'omer' and last_name = 'simpson'
order by student_id
limit 1;

-- bonus: count how many grades each student has
select
  first_name,
  last_name,
  count(math_grade) as total_grade
from students
group by first_name, last_name
order by last_name, first_name;


-- sum


select sum(math_grade) as sum_of_grades
from students;


-- exercise 3 : items and customers


create table purchases (
  id serial primary key,
  customer_id integer not null references customers(id),
  item_id integer not null references items(id),
  quantity_purchased integer not null check (quantity_purchased > 0)
);

insert into purchases (customer_id, item_id, quantity_purchased)
values (
  (select id from customers where first_name = 'scott' and last_name = 'scott'),
  (select id from items where lower(name) = 'fan'),1);

insert into purchases (customer_id, item_id, quantity_purchased)
values (
  (select id from customers where first_name = 'melanie' and last_name = 'johnson'),
  (select id from items where lower(name) = 'large desk'),10);

insert into purchases (customer_id, item_id, quantity_purchased)
values (
  (select id from customers where first_name = 'greg' and last_name = 'jones'),
  (select id from items where lower(name) = 'small desk'),
  2
);

-- part ii queries

select * from purchases;

select p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
from purchases p
join customers c on c.id = p.customer_id
order by p.id;

select *
from purchases
where customer_id = 5;

select c.id as customer_id, c.first_name, c.last_name
from purchases p
join customers c on c.id = p.customer_id
join items i on i.id = p.item_id
where lower(i.name) in ('large desk', 'small desk')
group by c.id, c.first_name, c.last_name
having count(distinct lower(i.name)) = 2;

select c.first_name, c.last_name, i.name as item_name
from purchases p
join customers c on c.id = p.customer_id
join items i on i.id = p.item_id
order by c.last_name, c.first_name, i.name;

insert into purchases (customer_id, item_id, quantity_purchased)
values (5, null, 1);
-- this fails because item_id is not null and has a foreign key constraint

CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab;

 SELECT COUNT(*) 
 FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id=5 ) 

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

	SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN (5) 

