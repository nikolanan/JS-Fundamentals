function demo(input){
    let inputArray = input.split(" ")

    for(let word of inputArray){

        if(word[0] === "#" && word.length>1){
            let wordsArray = word.split("")
            wordsArray.shift()

            let wordToPrint = ''

            for(let char of wordsArray){
                if(!isNaN(char)){
                    wordToPrint = ''
                    break;
                }else{
                    wordToPrint += char
                }
            }
            if(wordToPrint.length > 0){
                console.log(wordToPrint)
            }
        }
    }
}
demo('Nowadays everyone uses # to tag a #special word in #socialMedia')