function splitter(text){
    let indexes = []
    
    let arrOfLetters = text.split("")
    
    for(let i=0; i < arrOfLetters.length; i++){
        if(arrOfLetters[i].charCodeAt() >= 65 && arrOfLetters[i].charCodeAt() <= 90){
            
            indexes.push(arrOfLetters.indexOf(arrOfLetters[i]))
            arrOfLetters.splice(arrOfLetters.indexOf(arrOfLetters[i]),1,"1")
        }
    }
    let finalArr = []
    for(let i = 0; i < indexes.length;i++){
        let start = indexes[i]
        let end = indexes[i+1]
        let word = text.substring(start,end)
        finalArr.push(word)
    }
    console.log(finalArr.join(", "))
}
splitter('HaHaYouCantOrYouCan')