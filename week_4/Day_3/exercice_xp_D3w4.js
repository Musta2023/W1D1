//=============exercice_1============
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;
// name → "John Doe"
// country → "Canada"
// city → "Vancouver"
// lat → 49.2827 (first element of coordinates)
// lng → -123.1207 (second element of coordinates)
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//and the output is : I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
//=============exercice_2============
function displayStudentInfo(objeUser){
const {first,last}=objeUser;
console.log(`your full name is ${first} ${last}`)
}
displayStudentInfo({first: 'Elie', last:'Schoppik'})
// =============exercice_3============
const users ={user1: 18273, user2: 92833, user3: 90315}
//1
const usersArray=Object.entries(users)
console.log(usersArray)
//2
const newUserArray=usersArray.map(([Key,value])=>[Key,value*2])
console.log(newUserArray)
//=============exercice_4============
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John'); 
console.log(typeof member);//member is an object ==>{name:'john'}
//=============exercice_5============
class Dog {
  constructor(name) {
    this.name = name;
  }
};
  // 2 is the correct answer, Labrador inharite from Dog class name so that is why using super( as parent class variable)
  //so there is no need to redifined again
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
//=============exercice_6============
1
// [2] === [2] false: bc there are two different objects in memory
// {} === {} false: the same as befor
2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};//the same value but the reference memory is diffrent 

object1.number = 4;
console.log(object2.number)//4 the same refernce memory so every change cause the change for both sides.
console.log(object3.number)//4 the same.
console.log(object4.number)//5 the same value but the reference memory is diffrent.
3
class Animal{
    constructor(name,type,color){
        this.name=name
        this.type=type
        this.color=color
    }
}
class Mammal extends Animal{
    constructor(name,type,color,noise){
        super(name,type,color)
        this.noise=noise
    }
    sound(noise){
        return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    }
   
}
let cat= new Mammal("kati","cat","black","meo")
let farmerCow= new Mammal("Lily","cow","brown and white")
console.log(farmerCow.sound("Mooo"))
console.log(cat.sound("meo"))
