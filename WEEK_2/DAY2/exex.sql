select * from students
15:05:38
select* from students
14:39:23
SELECT first_name, last_name, math_grade, COUNT(*) OVER (PARTITION BY math_grade) AS grade_count FROM students ORDER BY grade_count DESC, math_grade;
14:38:17
SELECT SUBSTRING_INDEX(name, ' ', 1) AS first_name, SUBSTRING_INDEX(name, ' ', -1) AS last_name, COUNT(*) AS total_grade FROM students GROUP BY first_name, last_name;
14:30:32
SELECT SUBSTRING_INDEX(first_name, ' ', 1) AS first_name, SUBSTRING_INDEX(last_name, ' ', -1) AS last_name, COUNT(*) AS total_grade FROM students GROUP BY first_name, last_name;
14:30:05
SELECT SUBSTRING_INDEX(name, ' ', 1) AS first_name, SUBSTRING_INDEX(name, ' ', -1) AS last_name, COUNT(*) AS total_grade FROM students
14:29:32
select math_grade, count(*) as grad_count from students group by math_grade order by grad_count desc
14:28:22
select math_grade, count(*) as grad_count from students group by math_grade,first_name, last_name order by grad_count desc
14:28:01
select math_grade, count(*) as grad_count from students group by math_grade order by grad_count desc
14:27:24
 select math_grade, first_name, last_name count(*) as grad_count from students group by math_grade order by grad_count desc
14:26:50
select math_grade, count(*) as grad_count from students group by math_grade order by grad_count desc
14:24:53
select * from students
13:57:45
delete from students where student_id = 7
13:57:33
select * from students
13:56:52
insert into students (first_name, last_name, borth_date, math_grade) select first_name, last_name, borth_date, 70 from students where student_id=6;
13:56:48
insert into students (first_name, last_name, borth_date, math_grade=70) select first_name, last_name, borth_date, math_grade from students where student_id=6;
13:54:28
 select * from students
13:52:13
delete from students where student_id = 8
13:52:05
insert into students (first_name, last_name, borth_date, math_grade) select first_name, last_name, borth_date, math_grade from students where student_id=6; select * from students
13:50:25
 INSERT INTO students (first_name, last_name, borth_date, math_grade) SELECT first_name, last_name, borth_date, math_grade FROM students WHERE student_id = 6;
13:47:42
select * from students


