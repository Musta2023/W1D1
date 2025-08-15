# ------ Exercise 1
dict={"Ten" :10, "Twenty": 20, "Thirty": 30}
print(dict)
# ------ Exercise 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
#to add new person;
add_or_not=input("add other person yes/no ").lower()
if add_or_not=="yes":
    add_person_name=input("add new person's name ")
    add_person_age=int(input("add the age of this person "))
    family[add_person_name] = add_person_age
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
total_cost_ticket=0
for name, age in family.items():
    if age<3 :
        total_cost_ticket+=0
        print(f"you {name} can get the tickets for free")
    elif age>= 3 and age<12:
        total_cost_ticket+=10
        print(f"{name} the ticket is 10$")
    elif age >=12 :
        total_cost_ticket+=15
        print(f"{name} the ticket is 15$")
    else:
        print("out of data")
print(f"the total coste for this family is {total_cost_ticket} $")


# ------ Exercise 3
#1
brand={
"name": "Zara", 
"creation_date": 1975, 
"creator_name": ["Amancio", "Ortega", "Gaona"], 
"type_of_clothes": ["men", "women", "children", "home"], 
"international_competitors": ["Gap", "H&M", "Benetton"], 
"number_stores": 7000,
"major_color":{ 
    "France": "blue", 
    "Spain": "red", 
    "US": ["pink", "green"]}}
#2
brand["number_stores"]= 2
#3
print("Zara's clients are:", ", ".join(brand["type_of_clothes"]))
#4
brand["country_creation"]= "spain"
#5
if "international_competitors" in brand:
    print("internation competitor existe.")
else:
    print("not here")
#6
del brand["creation_date"]
#7
print(f"the last internation competior is {brand["international_competitors"][-1]}")
#8 
print("major color in US is:", ", ".join(brand['major_color']["US"]))
#9
print(len(brand))
#10
print(list(brand.keys()))
#11
more_on_zara={
    "creation_date": 1975,
    "number_stores": 10000
}
brand.update(more_on_zara)
#12
print("the number of stores updated is ",brand["number_stores"])
# the key number_stores in brand dict wa updated frome 2 to 10000

# ------ Exercise 4
def describe_city(city,country="Morocco"):
    print(f"the city {city} is in {country}")

describe_city("Pris","France")
# ------ Exercise 5
import random
def randam_num(num):
    rand1=random.randint(1,100)
    if num==rand1:
        print("success massage")
    else:
        print("fail message")
    return num, rand1

num, rand1 = randam_num(22)
print(f"the random number is {rand1} and yours {num}")
# ------ Exercise 6
def make_shirt(size="large", text="I love python"):
    print(f"""- the size of this shirt is {size}
- the print text is: {text}""")
make_shirt(12,"am the best")
print("=======================================")
make_shirt()
print("=======================================")
make_shirt("medum")
# ------ Exercise 7
#1
import random
def get_random_temp(min_rand,max_rand):
    temperature = random.randint(min_rand, max_rand)
    return temperature

print("the first mesure of temperature is ",get_random_temp(-10,40))
print("==========================================")
def main(min_rand,max_rand):
    temp_info = get_random_temp(min_rand,max_rand)
    print("the temperature now is", temp_info, "°C")
    if temp_info<=0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 16>=temp_info>0:
        print("it is cold")
    elif 23>=temp_info>16:
        print("it's cool")
    elif 30>=temp_info>23:
        print("it's a good weather")
    elif 35>=temp_info>30:
        print("ooh it is getting hot")
    else: 
        print("the sun near to kiss as")
main(-10,40)



# ------ Exercise 8
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def star_war_quiz():
    wrong_answers = []
    right_answers =[]
    score = 0
    for i in data:
        user_answer = input(i["question"] + "  ")
        if user_answer.lower() == i["answer"].lower():
            print("right")
            right_answers.append(user_answer)
            score += 1
        else:
            print("wrong!")
            wrong_answers.append(user_answer)
    print(f"Your score: {score}/{len(data)}")
    if wrong_answers:
        print("Your wrong answers:", wrong_answers)
        print("Your right answers:", right_answers)
star_war_quiz()

