function isAnagram(word1,word2){
    word1=word1.replace(/\s+/g,"").toLowerCase()
    word2=word2.replace(/\s+/g,"").toLowerCase()
    if(word1.length!==word2.length){
        console.log("the lenght of words not matched!")
    }else{
        let trimWrord1=word1.split('').sort().join('');
        let trimWrord2=word2.split('').sort().join('');
        if(trimWrord1===trimWrord2){
            console.log(`${word1} is an anagram of ${word2}` )
        }else{
            console.log("the words has the same length but not mached")
        }

    }

}
isAnagram("stream","amstre")
