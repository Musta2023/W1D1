//==========exercice_1==============
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color,index)=>{
   console.log(`${index+1}# choice is ${color}\n`)
})
const isViolet=colors.some((color)=>color==="Violet")
if (isViolet)
    console.log("Yeah")
else
    console.log("No...")
//==========exercice_2==============
const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color,index)=>{
    const num=index+1;
    const suffix= (num===1) ? ordinal[1]:
                  (num===2) ? ordinal[2]:
                  (num===3) ? ordinal[3]:
                  ordinal[0]

    console.log(`${num}${suffix} choice is ${color}\n`);
});
//==========exercice_3==============
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);//['bread','carrot','potato','chicken', 'appel','orange']

//------2------
const country = "USA";
console.log([...country]);//["U","S","A"]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);//[undefined,undefined] counting just the holes 
//==========exercice_4==============

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// const welcomStudens=users.map(user=>`Hello ${user.firstName}`)
// console.log(welcomStudens)
const filtred=users.filter(user=>user.role==='Full Stack Resident' )
// console.log(filtred)

const fStackRes=filtred.map(user=>user.firstName)
console.log(fStackRes)
//==========exercice_5==============
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const phrase=epic.reduce((acc,word)=>acc+" "+word)
console.log(phrase)
//==========exercice_6==============
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
const studentsPassed=students.filter((student=>student.isPassed===true))
    studentsPassed.forEach(student=>{
        console.log(`Good job ${student.name}, you passed the course in ${student.course}`)
    })
