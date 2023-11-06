function blackFlag(arr){
    let days = Number(arr[0])
    let dailyPlunder = Number(arr[1])
    let expectedPlunder = Number(arr[2])

    let totalPlunder = 0
    for(let i = 1; i <=days; i++){
        totalPlunder += dailyPlunder
        if(i%3 === 0){
            totalPlunder += dailyPlunder/2
        }
        if(i%5 === 0){
            totalPlunder = totalPlunder - 0.3*totalPlunder
        }
    }
    if(totalPlunder >= expectedPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    }else{
        let percentage = (totalPlunder/expectedPlunder)*100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}
blackFlag((["5",
"40",
"100"]))
console.log("==============")
blackFlag((["10",
"20",
"380"])
)