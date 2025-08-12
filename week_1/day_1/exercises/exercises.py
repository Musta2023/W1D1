# ------ Exercise 1
print("Hello world\n" * 4)
# ------ Exercise 2
result = 99**3*3
print(result)
# ------ Exercise 3
My_Name="Mustapha"
User_Name=input("What is your name? ")
if User_Name == My_Name:
    print("ooh we have the same name")
else:
    print("ooh not as mine" )
# ------ Exercise 4

userTall =int(input("Enter yout heit in cm:"))
if userTall >= 145:
    print("You are tall enough to ride the roller coaster") 
else:
    print("Sorry, you need to grow more to ride the roller")
# ------ Exercise 5
my_fav_numbers = {3,7,13,15,21}
my_fav_numbers.update([34,12])
my_friends_fav_numbers = {1,2,3,4,5,21,7,8,15,10}
print(my_fav_numbers)
#we can't remove a number from a set by index, but we can remove it by valus or choose a randome number to remove it.
my_fav_numbers.remove(12)
print(my_fav_numbers)
my_fav_numbers.pop()
print(my_fav_numbers)
our_fav_numbers = my_fav_numbers.union(my_friends_fav_numbers)
print("our favarites are",our_fav_numbers)

# ------ Exercise 6
# no, tuples are immutable, meaning you cannot change their content after creation.
# Tuples are used to store multiple items in a single variable.

# ------ Exercise 7
Basket=["Banana", "Apples", "Oranges", "Blueberries"]
Basket.remove("Banana")
print(Basket)
Basket.remove("Blueberries")
print(Basket)
Basket.append("Kiwi")
print(Basket)
Basket.insert(0, "Apples")
print(Basket)  
Apples_count=Basket.count("Apples")
print(Apples_count)
Basket.clear()
print(Basket) 
# ------ Exercise 8
sandwich_orders = [ "Tuna sandwich","Pastrami sandwich","Avocado sandwich","Pastrami sandwich","Egg sandwich","Chicken sandwich","Pastrami sandwich"
]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)  
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich.lower()}")  