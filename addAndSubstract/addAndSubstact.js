function array(arr){
    arrLength = arr.length
    let newArr =[]
    
    let sumOld =0
    let sumNew =0

    for( let i =0; i < arrLength;i++){
        currentNumber = arr[i]
        sumOld += currentNumber
        if(currentNumber %2 === 0){
            currentNumber += i
            sumNew += currentNumber
            newArr.push(currentNumber)
        }else{
            currentNumber -=i
            sumNew += currentNumber
            newArr.push(currentNumber)
        }
    }
    console.log(newArr)
    console.log(sumOld)
    console.log(sumNew)
}
array([5, 15, 23, 56, 35])