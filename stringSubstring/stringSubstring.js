function substring(word,text){
    word = word.toLowerCase()
    let arrOfWords = text.split(" ")

    let arrayOfLowerCase = []
    for(let el of arrOfWords){
        el = el.toLowerCase()
        arrayOfLowerCase.push(el)
    }
    
    if(arrayOfLowerCase.includes(word)){
        console.log(word)
    }else{
        console.log(`${word} not found!`)
    }

    
}
substring('python','JavaScript is the best programming language'
)