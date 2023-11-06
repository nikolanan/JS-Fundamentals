function piccolo(data){
    let object = {}
    for(let el of data){
        let [command,carPlate] = el.split(", ")
        if(!object.hasOwnProperty(carPlate) && command === "IN"){
            object[carPlate] = carPlate
        }
        if(object.hasOwnProperty(carPlate) && command === "OUT"){
            delete object[carPlate]
        }
    }
    let sortedArr = []
    for(let el of Object.entries(object)){
        sortedArr.push(el)
    }
    sortedArr.sort((a,b) => a[1].localeCompare(b[1]))
    
    for(let [key, value] of sortedArr){
        console.log(value)
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])