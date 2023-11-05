function magicSum(arr,number){
    
    
    for(let i=0; i < arr.length; i++){
        for(let g = i; g < arr.length;g++){
            if(i !== g){
                if(arr[i] + arr[g] === number){
                    console.log(`${arr[i]} ${arr[g]}`)
                }
            }
        }
    }

}
magicSum([1, 7, 6, 2, 19, 23],
8
)
