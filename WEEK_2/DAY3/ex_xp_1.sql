------------ex_1-------------
--1
select name from language
--2
select 
 f.film_id,
 f.title,
 f.description,
 l.name
 from film f
 join language l
 on f.language_id= l.language_id
 order by f.language_id,f.film_id
 --3
 
 SELECT
  l.language_id,
  l.name as language_name,
  f.film_id,
  f.title,
  f.description
FROM film f
RIGHT JOIN language l 
ON f.language_id = l.language_id
ORDER BY l.name, f.title;
--4

create table new_film (
  id   serial primary key,
  name varchar(50) not null
);

insert into new_film (name) values
  ('the silent mountain'),
  ('shadows at noon'),
  ('echoes of tomorrow');

select * from new_film

--5_1
truncate table customer_review restart identity;
create table customer_review (
  review_id    serial primary key,                               
  film_id      integer not null references new_film(id) on delete cascade,
  language_id  integer not null references language(language_id),
  title        varchar(20) not null,
  score        integer not null check (score between 1 and 10),  
  review_text  text not null,                                    
  last_update  timestamptz not null default now()                
);

--5_2
-- 2) add two reviews (linking to valid films/languages via subqueries)
insert into customer_review (film_id, language_id, title, score, review_text)
values
(
  (select id from new_film where name = 'the silent mountain'),
  (select language_id from language where trim(name) ilike 'English' limit 1),
  'the silent mountain',
  8,
  'a slow-burn drama with gorgeous wide shots and a strong third act.'
),
(
  (select id from new_film where name = 'shadows at noon'),
  (select language_id from language where trim(name) ilike 'english' limit 1),
  'shadows at noon',
  9,
  'time-loop sci-fi that sticks the landing; a few rough edges but memorable.'
  
),
(
  (select id from new_film where name = 'echoes of tomorrow'),
  (select language_id from language where trim(name) ilike 'english' limit 1),
  'echoes of tomorrow',
  9,'good and using new technics the cinema production');
 select *from customer_review

 -- 5_3 
delete from new_film
where name = 'echoes of tomorrow';

select* from new_film 
---------------ex_2----------
--1

update film 
set language_id = 5
where film_id in (1, 2);

--2
/*foreign keys on customer (dvdrental):

store_id → references store(store_id)

address_id → references address(address_id)

what this means for insert:

you must supply a store_id that already exists in store.

you must supply an address_id that already exists in address.

if either id doesn’t exist (or is null where not allowed), the insert fails with a foreign-key error.

practical order: create/find address first (and note: address itself needs a valid city_id), pick an existing store, then insert the customer.
*/
--3
drop table customer_review --before no, bc it throw me an error but now i have used we have defined a forign key with "on delete cascade"
--4'
select count(*) as outstanding_rental from rental where return_date is null
--5
select 
 f.title,
 f.film_id,
 f.rental_rate,
 r.rental_date,
 r.rental_id
from rental r
inner join inventory i on i.inventory_id=r.inventory_id
inner join film f on f.film_id=i.film_id
where return_date is null
order by f.rental_rate desc limit 30

--6
select 
 f.title,
 f.film_id,
 f.description,
 a.first_name as actor_name,
 a.last_name as actor_last_name
from film f
inner join film_actor fa on fa.film_id=f.film_id
inner join actor a on fa.actor_id= a.actor_id
where f.description ilike '%sumo%'
and a.first_name='Penelope'
and a.last_name='Monroe'
--7
select*from film where length<60 
and description ilike '%Documentary%'
--8
select 
 f.title,
 f.film_id,
 f.description,
 c.customer_id,
 c.first_name as friend_name,
 c.last_name as friend_lastN,
 r.return_date
from film f
inner join inventory i on f.film_id=i.film_id
inner join rental r on i.inventory_id=r.inventory_id
inner join customer c on r.customer_id=c.customer_id
where r.return_date between '2005-07-28' and '2005-08-01' 
and c.first_name='Matthew'
--9
select 
 f.title,
 f.film_id,
 f.description,
 c.customer_id,
 c.first_name as friend_name,
 c.last_name as friend_lastN,
 r.return_date
from film f
inner join inventory i on f.film_id=i.film_id
inner join rental r on i.inventory_id=r.inventory_id
inner join customer c on r.customer_id=c.customer_id
where c.first_name='Matthew' and c.last_name='Mahan'
and (f.title ilike '%boat%' or f.description ilike '%boat%');
 
  
select *from film_actor 
select*from actor
select*from film
select*from language

select*from customer

select*from rental
select *from inventory



