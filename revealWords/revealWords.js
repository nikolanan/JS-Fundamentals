function reveal(words,text){
    let arrWords = words.split(", ")
    let arrOfText = text.split(" ")
    for(let i =0; i<arrWords.length;i++){

        for(let g=0;g<arrOfText.length;g++){
            if(arrOfText[g] === "*".repeat(arrWords[i].length)){
            arrOfText[g] = arrWords[i]
            break
            }
        }
    }
    console.log(arrOfText.join(" "))
}
reveal('great, learning','softuni is ***** place for ******** new programming languages')