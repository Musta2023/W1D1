//----------exercise 1-----------------
function  compareToTen (num){
    return new Promise ((resolve, reject)=>{
        if(num<=10){
            resolve(`${num} is less than or equal to 10`)
        }else{
            reject(`${num} is greater than or equal to 10`)
        }

    })
}
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//  ----------exercise 2-----------------
function setPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("success")
        },4000)
    })
}
setPromise()
 .then(success=>console.log(success))
  //----------exercise 3-----------------
const resolvePromise=Promise.resolve(3)
const rejectPromise=Promise.reject("Boo")
resolvePromise.then((value)=>{
    console.log(value)
})
rejectPromise.catch((error)=>{
    console.log(error)
})
