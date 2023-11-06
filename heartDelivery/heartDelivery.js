function heartDelivery(data){
    let heartsArr = data[0].split("@").map(Number)

    let counter = 1
    let startIndex = 0;
    while(data[counter] !== "Love!"){
        let specificData = data[counter].split(" ")

        let command = specificData[0]
        let distance = Number(specificData[1])

        

        if(command === "Jump"){
            
            let index = startIndex + distance
            if(index > heartsArr.length - 1){
                index = 0
            }
            
            if(heartsArr[index] === 0){
                console.log(`Place ${index} already had Valentine's day.`)
            }else{
                heartsArr[index] -= 2
                if(heartsArr[index] === 0){
                    console.log(`Place ${index} has Valentine's day.`)
                }
            }
            startIndex = index
        }
        counter++
    }
    console.log(`Cupid's last position was ${startIndex}.`)
    let failedCount =0 ;
    for(let i =0; i < heartsArr.length;i++){
        if(heartsArr[i] !==0){
            failedCount++
        }
    }
    if(failedCount === 0){
        console.log('Mission was successful.')
    }else{
        console.log(`Cupid has failed ${failedCount} places.`)
    }
}
heartDelivery((["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]))