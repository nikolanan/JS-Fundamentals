function reverse(text){
    let arrOfLetters = text.split("")

    let firstArr = []
    let secondArr = []
    for(let i = 0 ; i<arrOfLetters.length/2;i++){
        firstArr.push(arrOfLetters[i])
    }
    for(let g = arrOfLetters.length/2;g < arrOfLetters.length;g++){
        secondArr.push(arrOfLetters[g])
    }
    console.log(firstArr.reverse().join(""))
    console.log(secondArr.reverse().join(""))
}   
reverse('tluciffiDsIsihTgnizamAoSsIsihT')