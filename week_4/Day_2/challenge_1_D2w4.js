const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
//1
const newgameInfo=[]
gameInfo.forEach(value=>{
    newgameInfo.push(value.username+"!")
})
console.log(newgameInfo)
const gameScore=[]
//2
gameInfo.forEach(value=>{
    if(value.score>5)
    gameScore.push(value.username)
})
console.log(gameScore)
//3
let totalScore=0
gameInfo.forEach(value=>{
    totalScore+=value.score
})
console.log(totalScore)
