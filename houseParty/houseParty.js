function houseParty(arr){
    let guestList =[]
    for(let i =0; i < arr.length; i++){
        let currentGuest = arr[i]
        let newArr = currentGuest.split(" ")

        if(!newArr.includes("not")){
            guestList.push(newArr[0])
        }
    }
    
    for(let g=0; g<arr.length; g++){
        let currentGuest = arr[g]
        let newArr = currentGuest.split(" ")
        let counter = 0
        for(let e =0; e<guestList.length;e++){
            if(guestList[e] === newArr[0]){
                counter++
            }
        }
        if(newArr.includes("not")){
            
            if(guestList.includes(newArr[0]) ){
                let deletingIndex = guestList.indexOf(newArr[0])
                guestList.splice(deletingIndex)
            }else{
                console.log(`${newArr[0]} is not in the list!`)
                
            }
        }else if(newArr.includes(newArr[0]) && counter === 2){
            let index = 0
            console.log(`${newArr[0]} is already in the list!`)
            for(let n =0; n < guestList.length; n++){
                if(newArr[0] === guestList[n]){
                    index = n
                }
            }
            guestList.splice(index,1)
            index = 0
            
        }
        counter = 0
    }
    console.log(guestList.join("\n"))

    
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)