//===============exercice_1=============
let landscape1 = function() {

 let result = "";// reserve an empty string variable 

 let flat = function(x) {
   for(let count = 0; count<x; count++){
     result = result + "_";//as the call was flat(4) so this function will add "_"*4==>"____"
   }
 }

 let mountain = function(x) {
   result = result + "/"//this function will add "/" to previous result==>"____/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"//then will add "'"*4 ==>"____/''''"
   }
   result = result + "\\"//then will add "\"==>"____/''''\"
 }

 flat(4);//"____/"
 mountain(4);//"____/''''\"
 flat(4)//"____/''''\____"

 return result;
}
console.log(landscape())
//2 transfrom it to arrow nested functions.
let landscape = () => {
  let result = "";

  const flat = (x) => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  const mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

landscape(); // ____/''''\____
//==========exercice_2=============
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);
/*the function addTo return an other function y=>x+y.
so addTo(10)==>return 10+y.
and addToTen(3)return 10+3=13==> so the results is 13.
*/
//==========exercice_3=============
const curriedSum = (a) => (b) => a + b
/* it's the same as befor except 
here we have one function that have two returns one involve the other or what it call currying function
in first step take the first argument and will returns==>30+b
and in the second arg ==>30+1=31
*/
curriedSum(30)(1)//31
//===========exercice_4===========
const curriedSum1 = (a) => (b) => a + b
const add5 = curriedSum1(5)//add5=(b)=>5+b
add5(12)//(12)=>5+12===>17
//===========exercice_5==========
const compose = (f, g) => (a) => f(g(a));//add1(add5(10))
const add1 = (num) => num + 1;//
const add_5 = (num) => num + 5;
compose(add1, add5)(10)//add1(add5(10))=>add5(10)+1=>(10+5)+1=16
