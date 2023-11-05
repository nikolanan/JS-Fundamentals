function sumOfDigits(number){

    number = String(number)
    let sum =0;

    for(let i=0; i <number.length;i++){
        sum += Number(number[i])
    }
    console.log(sum)
}
sumOfDigits(245678)