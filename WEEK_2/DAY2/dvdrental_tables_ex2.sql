--1_select all columns from "customer"
select * from customer
--2_desplay first_name, last_name as full_name
select first_name ||' '|| last_name as full_name from customer
--3_ select all "creat_date" in customer table
select distinct create_date from customer
--4_ get all the customer details from the customer table ordered asc
select * from customer order by first_name asc 
--5 get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc
--6 get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
select * from address
select address, phone, district from address where district ='Texas'
--7 retrieve all movie details where the movie id is either 15 or 150.
select * from film
select*from film where film_id=15 or film_id= 150
--8 
select film_id, title, description,length, rental_rate from film where title='Inch jet'
--9
select film_id, title, description,length, rental_rate from film where title like 'In%';
--10 find the 10 cheapest movies.
select film_id, title, description,length, rental_rate, replacement_cost from film order by replacement_cost asc limit 10  

--11 
with ordered as(
select film_id, 
       title,
       description,
       length, 
       rental_rate, 
       replacement_cost,
	   row_number() over (order by replacement_cost asc) as rn from film)
select film_id, title, description,length, rental_rate, replacement_cost from ordered where rn between 11 and 20 order by rn
--12
select*from customer 
select*from payment
select c.customer_id, c.first_name, c.last_name, p.payment_date,p.amount from customer c inner join payment p
on c.customer_id=p.customer_id
order by c.customer_id , p.payment_date
--13 Write a query to get all the movies which are not in inventory.
select*from film
select*from inventory
select f.film_id, f.title, f.description, f.release_year from film f 
left join inventory i 
on f.film_id=i.film_id where i.inventory_id is  null
--14 Write a query to find which city is in which country.
select*from country
select*from city
select co.country, ci.city from country co
inner join city ci on co.country_id=ci.country_id
order by co.country, ci.city



