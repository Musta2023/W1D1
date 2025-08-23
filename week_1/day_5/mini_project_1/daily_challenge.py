import math
from functools import total_ordering
class Cercle:
    def __init__(self,radius=0,diameter=None):
        if diameter is not None:
            self.radius=diameter/2
        else:
            self.radius=radius
    @property
    def diameter(self):
        return self.radius*2
    @property
    def area(self):
        return math.pi*self.radius**2
    @property
    def circumference(self):
        return math.pi*2*self.radius
    def __str__(self):
        return f"the cercle with radius {self.radius}, diameter {self.diameter}, area {self.area:.2f} and circumference {self.circumference:.2f}"

    def __add__(self,others_radius):
        return Cercle(self.radius + others_radius.radius)

    def __eq__(self,other_radius):
        return self.radius==other_radius.radius

   
    def __lt__(self, other):
        return self.radius < other.radius    

C1=Cercle(radius=5)
C2=Cercle(diameter=30)
C3=C1+C2

print(f"the first cercle: {C1}")
print(f"the second cercle: {C2}")
print(f"the sum of both cercles C1, C2: {C3}")

print(C1 == C2)  
print(C1 > C2)    


circles = [C1, C2, C3]
sorted_circles = sorted(circles)
for c in sorted_circles:
    print(c)


    