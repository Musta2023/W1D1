# ------ Exercise 1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.cat_name = cat_name
        self.cat_age = cat_age

cat1 = Cat("Whiskers", 2)
cat2 = Cat("Mittens", 5)
cat3 = Cat("Shadow", 3)

print(f"the cat {cat1.cat_name} has {cat1.cat_age} years old")
print(f"the cat {cat2.cat_name} has {cat2.cat_age} years old")
print(f"the cat {cat3.cat_name} has {cat3.cat_age} years old")

def get_age(cat):
    return cat.cat_age

def find_oldest_cat(cats):
    oldest_cat = max(cats, key=get_age)  
    print(f"The oldest cat is {oldest_cat.cat_name}, and they are {oldest_cat.cat_age} years old.")

find_oldest_cat([cat1, cat2, cat3])

        
# ------ Exercise 2
class Dog:
    def __init__(self, name, hight):
        self.name=name
        self.hight=hight
    def bark(self):
        print(f"{self.name} goes woof")
    def jump(self):
        print(f"{self.name} jump {self.hight*2} cm")
davids_dog = {
    "name": "Rex",
    "hight": 50
}
sarahs_dog = {
    "name":"Teacup",
    "hieght":20
    }
if davids_dog["hight"] > sarahs_dog["hieght"]:
        print(f"The taller dog is {davids_dog['name']}")
elif davids_dog["hight"] < sarahs_dog["hieght"]:
        print(f"The taller dog is {sarahs_dog['name']}")
else:
        print("Both dogs are the same height")

dog1=Dog("hobi",12)
dog1.bark()
dog1.jump()
davids_dog_instance = Dog(davids_dog["name"], davids_dog["hight"])
sarahs_dog_instance = Dog(sarahs_dog["name"], sarahs_dog["hieght"])
davids_dog_instance.bark()
davids_dog_instance.jump()
sarahs_dog_instance.bark()
sarahs_dog_instance.jump()

# ------ Exercise 3
class Song:
    def __init__(self,lyrics):
        self.lyrics=lyrics
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])    
stairway.sing_me_a_song()    
# ------ Exercise 4
class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []
        
    def add_animal(self, new_animal):
        self.animals.append(new_animal)
    def get_animal(self):
        print(f"animals in {self.zoo_name}")
        unique_animals = set()
        for animal in self.animals:
            if animal not in unique_animals:
                print(f"-{animal}")
                unique_animals.add(animal)
            else:
                print(f"this animal {animal} already exists in {self.zoo_name}")
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} is sold from {self.zoo_name}")
        else:
            print(f"{animal_sold} is not in {self.zoo_name}")
    def sort_animals(self):
        self.animals.sort()
        grouped = {}
        for animal in self.animals:
            key = animal[0].upper()  
            if key not in grouped:
                grouped[key] = [animal]
            else:
                grouped[key].append(animal)
        return grouped
    def get_groups(self):
        groups = self.sort_animals()
        print(f"Animal groups in {self.animals}:")
        for key, group in groups.items():
            if len(group) == 1:
                print(f"{key}: {group[0]}")
            else:
                print(f"{key}: {group}")
        
animals_in_zoo=Zoo("my zoo")
animals_in_zoo.add_animal("cat")
animals_in_zoo.add_animal("cat")
animals_in_zoo.add_animal("lion")
animals_in_zoo.add_animal("dog")
animals_in_zoo.sell_animal("lion")
animals_in_zoo.get_groups()
animals_in_zoo.get_animal()

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
