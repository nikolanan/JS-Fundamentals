function mergeArrays(arr1, arr2){
    let arr1Length = arr1.length
    let thirdArr =[]

    for(let i =0;i<arr1Length;i++){
        let currentNumber;
        if(i %2 ===0){
            currentNumber = Number(arr1[i]) + Number(arr2[i])
            thirdArr.push(currentNumber)
        }else{
            currentNumber = arr1[i] + arr2[i]
            thirdArr.push(currentNumber)
        }
    }
    console.log(thirdArr.join(" - "))
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])