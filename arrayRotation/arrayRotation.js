function arrayRotation(arr,rotations){

    for(let i=0; i < rotations;i++){
        currentNumber = arr[0]
        arr.shift()
        arr.push(currentNumber)
    }
    console.log(arr.join(" "))
}
arrayRotation([51, 47, 32, 61, 21], 2 )