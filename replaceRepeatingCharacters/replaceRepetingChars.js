function replace(text){
    let arrText = text.split("")
    let firstChar = arrText[0]
    let char = arrText[0]

    let arrOfElement = []

    for(let i=1; i < arrText.length;i++){
        if(char !== arrText[i]){
            arrOfElement.push(arrText[i])
        }
        char = arrText[i]
    }
    arrOfElement.unshift(firstChar)
    console.log(arrOfElement.join(""))
}
replace('qwerqwecwd')