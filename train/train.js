function train(input){
    let wagons = input[0].split(" ").map(Number)
    let maximumCapacity = Number(input[1])

    for(let i = 2; i < input.length; i ++){
        let element = input[i].split(" ")

        if(element[0] === "Add"){
            wagons.push(Number(element[1]))
        }else{
            let passengers = Number(element[0])
            for(let j =0; j < wagons.length; j++){
                if(maximumCapacity - wagons[j] - passengers >= 0){
                    wagons[j] += passengers
                    break;
                }
            }
        }
        
        
    }
    console.log(wagons.join(" "))
    
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])