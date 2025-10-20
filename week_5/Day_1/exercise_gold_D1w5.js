//-----------exercise 1------------
const promise1=Promise.resolve(3);
const promise2=Promise.resolve(42);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
Promise.all([promise1,promise2,promise3])
   .then(value=>{
    console.log(value)
   })
   .catch(error=>{
    console.log("one of those promises failed: ",error)
   })

//-----------exercise 2------------
function timesTwoAsync(x) {
  // returns a Promise that resolves to x * 2
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];

// map each number to a Promise that doubles it
const promiseArr = arr.map(timesTwoAsync); 
//  [Promise(2), Promise(4), Promise(6)]

Promise.all(promiseArr)
  .then(result => {
    // Promise.all waits for ALL promises to resolve
    // and returns their resolved values in the same order
    console.log(result); // the output: [2, 4, 6]
  });
