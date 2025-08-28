create table Actors1(
  actor_id serial primary key,
  first_name varchar(50) not null,
  last_name varchar (50) not null,
  age date not null,
  number_oscars smallint not null
)

INSERT INTO Actors1 (first_name, last_name, age, number_oscars)
VALUES
    ('Leonardo', 'DiCaprio', '1974-11-11', 1),
    ('Meryl', 'Streep', '1949-06-22', 3),
    ('Denzel', 'Washington', '1954-12-28', 2),
    ('Natalie', 'Portman', '1981-06-09', 1),
    ('Tom', 'Hanks', '1956-07-09', 2),
    ('Cate', 'Blanchett', '1969-05-14', 2),
    ('Anthony', 'Hopkins', '1937-12-31', 2),
    ('Jennifer', 'Lawrence', '1990-08-15', 1),
    ('Robert', 'De Niro', '1943-08-17', 2),
    ('Julia', 'Roberts', '1967-10-28', 1);
select * from Actors1

select count(*) as total_actors from actors1;

insert into actors1 (first_name, last_name, age) values ('angelina', 'jolie', '1978-06-12')-- we error because we lift the field "number_oscars" empty 
