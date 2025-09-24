// //============exercice_1=============
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// //answer: inside the funcOne function 3==> the if condition is true so a=3.
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?==> error, bc we can not asigne a new value to const variable.

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()//==>insde the funThree function 0.
// funcTwo()//==>assigne a=5 and do nothing
// funcThree()//==>so when we call funcThree again we'll have "inside the....5" bc funcTwo put a=5.
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?

// //==>if we declared 'a' as const:
//   //when we called this funcThree() first will exicut it normally as first so a=0.
//   //when we called this funcTwo() we'll have error bc a is const.
//   //when we called funcThree again we'll have error bc of the error inside funcTwo()


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()// will create global property a="hello"
// funcFive()//as a is globla property so ==>alert"inside the functFive function hello.

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()//the scop variable shdow the global varibale so alert"...test".
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// // ==>here the same as let the scope const shadows the golobal const. 

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     console.log(`in the if block ${a}`);
// }
// console.log(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // the if condition is true so in the if scope we'll have a=5==>"in the if block 5"
// // in the secont alert a=2 bc a=5 is inner scope variable==>"outside of the od block 2"
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
// // the same as let, we have the same results as we don't have an reassignement in the same scope.

// //============exercice_2=============
// //1:
const winBattle=()=>true
//2:
let experiencePoints=winBattle()? 10:1;
console.log(experiencePoints);
//============exercice_3=============
//1
const isString=(value)=>typeof value==="string"

console.log(isString("hello"))
console.log(isString("123"))
console.log(isString(12334))
console.log(isString([1, 2, 4, 0]));
//============exercice_4=============
const add=(a,b)=>a+b;
console.log(add(3,9))//12
//============exercice_5=============
//declaration of function==>can be called befor defined
function KgtoG(kilog){
    return kilog*1000
}
//function expression==>can't be called befor definition
const kilogtoGrams= function(kilograms){
    return kilograms*1000;
}
//arrow function==> its the same as the second need initialisation first befor called
const toGrams=(inKilogram)=>inKilogram*1000;

console.log(KgtoG(5));
console.log(kilogtoGrams(5));
console.log(toGrams(5));
//============exercice_5=============
function futurisme(JobTitle,geoLocation,partner,nbrOfchildren){
    const firstliter=JobTitle[0].toLowerCase()
    const articles=["a","e","i","o","u"].includes(firstliter)? "an":"a";
    return`You will be ${articles} ${JobTitle} in ${geoLocation}, and married to ${partner} with ${nbrOfchildren} kids`
}
console.log(futurisme("Engineer","casablanca","zineb",2))
