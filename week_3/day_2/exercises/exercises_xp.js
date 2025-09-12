//exercice 1:-------------------------------
// part 1:
//1
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1)
console.log(people)
//2
people[3]="Jason"
// //3
// people.splice(4,0,"mustapha")
people.push("mustpaha")
//4
let maryIndex=people.indexOf("Mary");
console.log(`the index of Mary is ${maryIndex}`)
5
let copy=people.slice(1,people.length -1)
console.log(copy)
//exercice 2---------------------------------
for (i=0;i<people.length;i++){
   console.log(people[i])
     if (people[i]==="Devon")
       break}
let color=["blue","black","white","orange","red"]
for(i=0;i<color.length;i++){
  if (i===0)
    console.log(`my ${i+1}st choice is ${color[i]}`)
  else if (i===1)
    console.log(`my ${i+1}nd choice is ${color[i]}`)
  else
     console.log(`my ${i+1}th choice is ${color[i]}`)
}
// exercice 3-------------------------------------
let user_number = Number(window.prompt("Please enter a number greater than 10"));
while (user_number < 10 || isNaN(user_number)) {
  user_number = Number(window.prompt("No! Enter a valid number greater than 10:"));
}
alert(`You have entered a number greater than 10 ${user_number}`);

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor)
sumApt1and3Floor=building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor
console.log(sumApt1and3Floor)
console.log(building.numberOfRoomsAndRent.dan[0])
let sarahRent=building.numberOfRoomsAndRent.sarah[1]
let danRent=building.numberOfRoomsAndRent.dan[1]
let davidRent=building.numberOfRoomsAndRent.david[1]
let sumRD=sarahRent+davidRent
if (sumRD>danRent){
  building.numberOfRoomsAndRent.dan[1]=1200;
  
}
console.log(building.numberOfRoomsAndRent.dan[1])

//exercice 4-----------------------------------

const family={
  mather:"sama",
  father:"karim",
  son:"fatih",
  daughter:"kalila",
}
 for( key in family){
  console.log(`the ${key}'s name is ${family[key]}`)
 }
for (value of Object.values(family)){
  console.log(`family member: ${value}`)
}
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
sentence=''
for(let[key,value] of Object.entries(details)){
  sentence+= `${key} ${value} `
}
console.log(sentence.trim())
//exercice 6---------------------------------
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let initials=names.map(name=>name[0])
initials.sort()
let societyName=initials.join("")
console.log(societyName)
