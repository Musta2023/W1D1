--Part 1------------
--1
create table customer1(
 custom_id serial primary key,
 first_name varchar(20),
 last_name varchar(20) not null)

create table customer_profil(
 id serial primary key,
 isLoggedIn boolean default false,
 customer_id int, constraint k_customer foreign key (customer_id) references customer1(custom_id) on delete cascade
)
--2
insert into customer1(first_name,last_name)values
('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive');
--3
insert into customer_profil(isLoggedIn,customer_id)values 
(True,(select custom_id from customer1 where first_name='John')),
(False,(select custom_id from customer1 where first_name='Jerome'));
--4
select 
 cu.first_name,
 cu.last_name,
 cp.customer_id,
 cp.isloggedIn
from customer1 cu
inner join customer_profil cp on cu.custom_id=cp.customer_id
--*
where isLoggedIn = True;

--*
select 
 cu.first_name,
 cu.last_name,
 cp.customer_id,
 cp.isloggedIn
from customer1 cu
left join customer_profil cp on cu.custom_id=cp.customer_id;
--*
select count(*) as Not_logged from customer_profil where  isLoggedIn=false;

select * from customer1
select *from customer_profil
--Part 2------------
--1
create table book(
book_id serial primary key,
title text not null,
author text not null
);
--2
insert into book(title,author) values
('Alice In Wonderland', 'Lewis Carrol'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird','Harper Lee');

--3
create table student(
student_id serial primary key,
name text not null unique,
age int constraint chk_age check (age<=15)
)
--4
insert into student (name,age) values
('John',12),
('Lera',11),
('Patrick',10),
('Bob',14);
--5
create table Library(
book_fk_id int not null,
student_fk_id int not null,
borrowed_date date,
constraint pk_library primary key(book_fk_id,student_fk_id),
constraint fk_library_book foreign key (book_fk_id) references book(book_id) on update cascade on delete cascade,
constraint fk_library_student foreign key (student_fk_id) references student(student_id) on update cascade on delete cascade
);


-- John - Alice In Wonderland - 2022-02-15
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
  (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
  (SELECT student_id FROM Student WHERE name = 'John'),
  '2022-02-15'
);

-- Bob -To kill a mockingbird _ 2021-03-03
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
  (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
  (SELECT student_id FROM Student WHERE name = 'Bob'),
  '2021-03-03'
);

-- Lera - Alice In Wonderland - 2021-05-23
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
  (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
  (SELECT student_id FROM Student WHERE name = 'Lera'),
  '2021-05-23'
);

-- Bob - Harry Potter - 2021-08-12
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
  (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
  (SELECT student_id FROM Student WHERE name = 'Bob'),
  '2021-08-12'
);
--7
--*
select*from library
--*
select 
 s.name as tudent_name,
 b.title as title,
 l.borrowed_date
from library l
inner join student s on l.student_fk_id=s.student_id
inner join Book b on l.book_fk_id=b.book_id
order by  l.borrowed_date asc;
--*
select 
round(avg(s.age)::numeric,2) as avg_age 
from library l
inner join student s on l.student_fk_id=s.student_id
inner join Book b on l.book_fk_id=b.book_id
where b.title='Alice In Wonderland'
order by  l.borrowed_date asc;

--*
/*The student row for Bob is removed from the Student table.

*The database automatically checks the Library table.

*Every row in Library where student_fk_id = Bob’s student_id will be deleted automatically.

 *This prevents “orphan” rows in Library (borrowings pointing to a non-existent student).
*/
select *from Book
select*from library
select*from student



