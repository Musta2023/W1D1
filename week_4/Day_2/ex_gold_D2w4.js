//=============exercice_1===============

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;//the array contains just numbers so the condition is valid.
  return ;
});//[2,4,6]

//=============exercice_1===============
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
    //we have the initial array=[1, 2] this array will concatinate with the origine one with concatination methode.
  },
  [1, 2],
);//[1,2,0,1,2;3]

//=============exercice_3===============
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})//the values of i is (0 1 2 3 4 5)
//=============exercice_4===============
const array = [[1],[2],[3],[[[4]]],[[[5]]]].flat(2)
console.log(array)
//=============exercice_4===============
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 
//["Hello young grasshopper!","you are","learning fast!"].
const newConcat=greeting.map((word)=>word.join(" "))
console.log(newConcat)
const newConcat1=newConcat.join(" ")
console.log(newConcat1)
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const newTrapped=trapped.flat(Infinity)
console.log(newTrapped)
