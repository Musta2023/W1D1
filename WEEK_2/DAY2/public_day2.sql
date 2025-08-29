create table bootcamp(
 student_id serial primary key,
 first_name varchar(50) not null,
 last_name varchar (50) not null,
 borth_date date not null
)
truncate table bootcamp
insert into (first_name, last_name, borth_date) 
values (
 ('Marc', 'benichou', '1998/11/02')
 ('Yaon', 'cohen', '2010/12/03')
 ('le', 'benichou', '1998/11/02')
 ('Marc', 'benichou', '1998/11/02')
 ('Marc', 'benichou', '1998/11/02')
 ('Marc', 'benichou', '1998/11/02')
 
)