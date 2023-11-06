function movingTarget(data){
    let targetsArr = data[0].split(" ")
    
    let counter = 1
    while(data[counter] !== "End"){
        let allWords = data[counter].split(" ")
        let command = allWords[0]
        let index = Number(allWords[1])
        if(command === "Shoot"){
            let power = Number(allWords[2])
            if(index >=0 && index < targetsArr.length){
                let reducedValue = targetsArr[index] - power
                if(reducedValue <= 0){
                    targetsArr.splice(index,1)
                }else{
                    targetsArr.splice(index,1,reducedValue)
                }
            }
        }else if(command === "Add"){
            let value = Number(allWords[2])
            if(index >=0 && index < targetsArr.length){
                targetsArr.splice(index,0,value)
            }else{
                console.log(`Invalid placement!`)
            }
        }else{
            let radius = Number(allWords[2])
            let leftBorder = index - radius
            let rigthBorder = index + radius
            let deleteCount = 2*radius + 1
            if(leftBorder >= 0 && rigthBorder < targetsArr.length){
                targetsArr.splice(leftBorder,deleteCount)
            }else{
                console.log(`Strike missed!`)
            }
        }
        counter++
    }
    console.log(targetsArr.join("|"))
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])

