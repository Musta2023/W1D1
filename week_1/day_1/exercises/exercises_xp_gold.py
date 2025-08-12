# ------ Exercise 1
months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
user_month = int(input("enter a month number (1-12):"))
if user_month in months:
    if user_month in [12,1,2]:
        print("It's winter")
    elif user_month in [3,4,5]:
        print("It's spring")
    elif user_month in [6,7,8]:
        print("It's summer")
    elif user_month in [9,10,11]:
        print("It's autumn")
else:
        print("Invalid month number")

# ------ Exercise 2
for i in range(1,20):
     print(i, end="")
for index, number in enumerate(range(1, 21)):
    if index % 2 == 0:
        print(number)
# ------ Exercise 3
My_Name="Mustapha"
user_name=str(input("Enter your name: "))
while user_name != My_Name:
    print("we don't have the same name")
    user_name = input("Enter your name: ")
print(f"Welcome, {user_name} !")

# ------ Exercise 4
users_names=["Mustapha", "Alice", "Bob", "Charlie"]
user_name= str(input("enter your name:"))
while user_name not in users_names:
    print("we don't have this name in our list")
    user_name = input("Please enter a valid name from the list: ")
print(f"welcome,{user_name}!")

# ------ Exercise 5
num1=input("Enter the first number : ")
num2=input("Enter the second number : ")
num3=input("Enter the third number : ")
the_greatest=max(num1,num2,num3)
print(f"The greatest number is: {the_greatest}")
# ------ Exercise 6
import random       
user_input = int(input("Enter a number between 1 and 9: "))
random_number = random.randint(1, 9)
while True:
    if user_input < 1 or user_input > 9:
        print("Invalid input, please enter a number between 1 and 9.")
        user_input = int(input("Enter a number between 1 and 9: "))
        continue
    if user_input == random_number:
        print("Congratulations, you guessed the number!")
        break
    else:
        print("Try again")
        user_input = int(input("Enter a number between 1 and 9: "))
        
# ------ Exercise 7

# ------ Exercise 8
