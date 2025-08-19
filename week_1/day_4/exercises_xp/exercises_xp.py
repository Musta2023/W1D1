# ------ Exercise 1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
class  Siamese(Cat):
    def sing(self,sounds):
        return f"{sounds}"
bengal_cat=Bengal("leo",2)
chartreux_cat=Chartreux("kimi",5)
siamese_cat=Siamese("kati", 8)

all_cats=[bengal_cat,chartreux_cat,siamese_cat]

saras_pets=Pets(all_cats)
saras_pets.walk()
# ------ Exercise 2
class Dog:
    def __init__(self, name, age, weight):
        self.name=name
        self.age=age
        self.weight=weight
    def bark(self):
        return f'{self.name} is barking'
    def run_speed(self):
        return self.weight/self.age*10
    def fight(self, another_dog):
        self_power = self.run_speed() * self.weight
        another_power = another_dog.run_speed() * another_dog.weight
        if self_power < another_power:
            return f"{another_dog.name} bat {self.name}"
        elif self_power > another_power:
            return f"{self.name} bat {another_dog.name}"
        else:
            return f"no winner"

dog1=Dog("dobi",7,13)
dog2=Dog("bami",12,29)
dog3=Dog("riko",6,18)

print(dog3.fight(dog1))
    
# ------ Exercise 3
from ex_2 import Dog
import random as rd

class PetDog(Dog):
  def __init__(self, name, age, weight, trained=False):
    super().__init__(name, age, weight)
    self.trained = trained

  def train(self):
    print(self.bark())
    self.trained = True
    return self.trained

  def play(self, *args):
      print(f"{self.name} and {', '.join(args)} all play together")

  def to_a_trick(self):
      tricks = [
          f"{self.name} does a barrel roll",
          f"{self.name} stands on her back legs",
          f"{self.name} shakes her hand",
          f"{self.name} plays dead"
      ]
      if self.trained:
          print(rd.choice(tricks))

pet_dog1 = PetDog("ania", 12, 10, True)
pet_dog1.to_a_trick()

# ------ Exercise 4 and 5
class Familly:
    def __init__(self, last_name, members=None):
        self.last_name=last_name
        self.members = members if members else [] 
        
    
    def born(self,**kwargs):
        self.members.append(kwargs)
        print(f"congrats {self.last_name} for new child {kwargs.get('name')}")
          
    def is_18(self, name):
      for member in self.members:
        if member.get("name") == name:
            return member.get('age', 0) >= 18
        return False

    def family_presentation(self):
       print(f"\nThe {self.last_name} Family:")
       for member in self.members:
        print(f" - Name:{member['name']}, Age:{member['age']}, "
              f"Gender:{member['gender']}, Child:{member['is_child']}")
        
class TheIncredibles(Familly):
    def use_power(self, name):
        for member in self.members:
            if member.get("name") == name:
                if member.get("age", 0) >= 18:
                    
                    print(f"{member['name']} can {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old!")
                return
        print(f"No member named {name} found.")

    def incredible_presentation(self):
        print("\nHere is our powerful family")
        super().family_presentation()

laaraj_family = Familly("Laaraj", [
    {"name": "karim", "age": 45, "gender": "Male", "is_child": False},
    {"name": "Sara", "age": 32, "gender": "Female", "is_child": False}
])
laaraj_family.family_presentation()

laaraj_family.born(name="hoda", age=1, gender="Female", is_child=True)

print("Is karim over 18?", laaraj_family.is_18("karim"))
print("Is hoda over 18?", laaraj_family.is_18("hoda"))

laaraj_family.family_presentation()

incredibles = TheIncredibles("Incredibles", [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power':'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power':'read minds','incredible_name':'SuperWoman'}
])


incredibles.incredible_presentation()
incredibles.use_power("Michael")
incredibles.born(name="Baby Jack", age=1, gender="Male", is_child=True,
                 power="Unknown Power", incredible_name="BabyJack")
try:
    incredibles.use_power("Baby Jack")
except Exception as e:
    print("Exception:", e)

incredibles.incredible_presentation()







# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
