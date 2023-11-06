function reception(data){
    let firstEmployee = Number(data.shift())
    let secondEmployee = Number(data.shift())
    let thrirdEmployee = Number(data.shift())
    let overallHandlingPower = firstEmployee + secondEmployee + thrirdEmployee
    let count = Number(data.shift())

    let hours = 0
    while(count > 0){
        count -= overallHandlingPower
        hours++
        
        if(hours % 4 === 0){
            hours++
        }
    }
    console.log(`Time needed: ${hours}h.`)
}
reception(['1','2','3','45'])