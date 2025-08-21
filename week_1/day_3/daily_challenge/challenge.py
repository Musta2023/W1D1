class Farm:
    def __init__(self, farm_name):
         self.name = farm_name
         self.animals= {}
    def add_animal(self, animal, count=1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count
    def get_info(self):
        result =f" Farm Name: {self.name}\n --------Animals invontory---------\n"
        for animal,count in self.animals.items():
            result += f"{animal}: {count}\n"
            
        return result
    def get_animal_type(self):
        return sorted(self.animals.keys())
    
    def get_short_info(self):
        if not self.animals:
            return f"{self.name} has no animals in the farm"
        animal_list = []
        for animal, count in self.animals.items():
            if count == 1:
                animal_list.append(f"{animal}")
            elif count > 1:
                animal_list.append(f"{animal}s")
        # animal_str = ", ".join(animal_list)
        animal_str = " and ".join([f"{count} {animal if count == 1 else animal + 's'}" for animal, count in self.animals.items() if count > 0])
        return f"{self.name} has {animal_str}"
    

macdonald = Farm("McDonald")
macdonald.add_animal('fish', 6)
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep',2)
macdonald.add_animal('sheep',1)
macdonald.add_animal('goat', 0)
print(f"{macdonald.get_info()}\nE-I-E-I-O") 
print("Animal types in the farm:", macdonald.get_animal_type())  
print(macdonald.get_short_info())   