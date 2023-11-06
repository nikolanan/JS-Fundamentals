function sorting(arr){
    arr.sort((a,b) => a-b)
    arrLength = arr.length
    let newArr =[]

    for(let i =0; i < arrLength/2;i++){
        newArr.push(arr.pop(arr[arrLength - i]))
        newArr.push(arr.shift(arr[i]))        
    }
    console.log(newArr.join(" "))
}
sorting([34, 2, 32, 45, 690, 6, 32,
    7, 19, 47]
    
)