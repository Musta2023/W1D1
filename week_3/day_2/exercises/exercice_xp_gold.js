// //exercice 1-xp-gold---------------------------
let numbers = [123, 8409, 100053, 333333333, 7]
for(i=0;i<numbers.length;i++){
    if(numbers[i]%3===0){
        console.log("True")
    }
    else
        console.log("False")

}
// //exercice 2----------------------------------
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
greetings=""

stdName=window.prompt("what is your name: ")
if (stdName in guestList){
    console.log(`Hi!!I'm ${stdName}, and am from ${guestList[stdName]}`)
}
else
    console.log("Hi am a guest")
//exercice 3---------------------------------

let age = [20,5,12,43,98,55];
let sum=0
let highestAge=Math.max(...age)
for(i=0;i<age.length;i++){
    sum+=age[i]
}
console.log("Sum of age = ",sum)
console.log("the highest age is ",highestAge)
