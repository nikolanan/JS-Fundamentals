function maxSq(arr){

    let sequence = 1
    let maxSequence = 0;
    let number = 0;
    let currentNumber;
    let prevNumber;

    for(let i =0; i < arr.length; i++ ){
        if(i !== 0){
            currentNumber = arr[i]
            prevNumber = arr[i-1]
            if(prevNumber === currentNumber){
                sequence++
                if(sequence > maxSequence){
                maxSequence = sequence
                number = currentNumber
                }
            }else{
            sequence = 1
            }
    }
    
}
console.log(`${(number+ " ").repeat(maxSequence)}`)
}
maxSq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1] )
