function makeAllCaps(words){
    return new Promise((resolve,reject)=>{
        allString=words.every(word=>typeof word ==='string')
        if(allString){
            const toUppCase=words.map(word=>word.toUpperCase())
            resolve(toUppCase)
        }else{
            reject("error: not all worlds are strings")
        }
    })
}
function sortWords(worlds){
    return new Promise((resolve,reject)=>{
        if (worlds.length>4){
            resolve(worlds.sort())
        }else{
            reject(" the array length is less than 4")
        }
    })

}
//in this example, the catch method is executed, because the array contains a number
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed, because the array length is not bigger than 4
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))
