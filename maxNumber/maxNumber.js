function maxNumber(arr){
    let arrLength = arr.length
    let statement = false;
    let buffer = "";
    for(let i = 0;i<arrLength;i++){
        let currentNumber = Number(arr[i])

        for(let j=i;j < arrLength -1;j++){

            let nextNumber = arr[j+1]

            if(currentNumber > nextNumber){
                statement = true
            }else{
                statement = false
                break;
            }
        }
        if(statement === true){
            buffer += currentNumber + " "
        }
        statement = false
    }
    for(let i= 0; i<arrLength; i++){
        if(i === arrLength-1){
            buffer += String(arr[i])
        }
    }
    console.log(buffer)

}
maxNumber([27, 19, 42, 2, 13, 45, 48] )