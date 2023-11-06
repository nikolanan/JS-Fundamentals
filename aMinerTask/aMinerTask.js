function minor(recources){
    object ={}

    for(let i =0; i<recources.length;i+=2){
        if(i%2 === 0) {
            let name = recources[i]
            let quantity = recources[i+1]
            
            if(object[name] !== undefined){
                object[name] += Number(quantity)
            }else{
                object[name] = Number(quantity)
            }
            
        }
    }
    for(let [key,value] of Object.entries(object)){
        console.log(`${key} -> ${value}`)
    }
}
minor([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )