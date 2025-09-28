//===========exerciec_1===========
function printFullName(Obj){
    const {first,last}=Obj
    console.log(`Your full name is ${first} ${last} `)
}

obj1={first: 'Elie', last:'Schoppik'}
printFullName(obj1) 
console.log(Object.entries(obj1))
//===========exerciec_2===========
function keysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map(key => obj[key]);
  return [keys, values];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
//===========exerciec_3===========
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();//call increment so count=1
counterOne.increment();//recall again so count=2

const counterTwo = counterOne;//point in the same object in memory
counterTwo.increment();//call increment the follow the next where was stopped so count=3

console.log(counterOne.count);// so the output is 3
