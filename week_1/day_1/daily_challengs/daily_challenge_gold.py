# ------ Challenge 1
# import datetime
# import calendar
# birth_date = input("Enter your birth date (YYYY-MM-DD): ")
# birthdate = datetime.datetime.strptime(birth_date, "%d/%m/%Y").date()
# today= datetime.date.today()
# age = today.year - birth_date.year - ((today.month, today.day)< (birth_date.month, birth_date.day))
# print(age)
import datetime
import calendar

birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")
birthdate = datetime.datetime.strptime(birthdate_str, "%d/%m/%Y").date()

today = datetime.date.today()
age = today.year - birthdate.year
if (today.month, today.day) < (birthdate.month, birthdate.day):
    age -= 1

candles = age % 10

cake = f"""
       ___{'i' * candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""

# Print one or two cakes
if calendar.isleap(birthdate.year):
    print(cake * 2)
else:
    print(f"{age} years old! happy birthday!")
    print(cake)

