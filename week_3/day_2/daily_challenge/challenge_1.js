//exercice-1------------------------------
let sentence="The movie is not bad"
WordNot=sentence.indexOf("not")
WordBad=sentence.indexOf("bad")

if (WordNot!==-1 && WordBad!==-1 && WordNot<WordBad){
    sentence=sentence.slice(0,WordNot)+"good"+sentence.slice(WordBad+3);
}
    console.log(sentence)
