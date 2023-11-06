function bombNumbers(arr,bombArr){
    let arrayOfIndexes = []
    for(let i =0; i < arr.length; i++){
        if(arr[i] === bombArr[0]){
            arrayOfIndexes.push(i)
        }
    }
    let bombPower = bombArr[1]


    for(let j=0;j<arrayOfIndexes.length; j++){
        if(arrayOfIndexes[j] === "na"){
            break;
        }
       
        
        
        let u = arrayOfIndexes[j]
        let length = u+bombPower
        for(u; u <= length; u++){
            
                arr[u] = "na"
            
        }
        let g = arrayOfIndexes[j];
        let length2 = g - bombPower
        for(g = arrayOfIndexes[j]; length2 <= g; g--){
            
                arr[g] = "na"
            
        }
    }
    let arrMod = arr.filter(x => x!== "na")
    let sum =0;
    for(let f=0; f<arrMod.length; f++){
    sum +=arrMod[f]
    
    
    }

console.log(sum)
  
}
