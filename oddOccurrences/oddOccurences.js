function odd(data){
    let modArr = []
    for(let el of data.split(" ")){
        el = el.toLowerCase()
        modArr.push(el)
    }
    let myMap = new Map()
    for(let i =0; i < modArr.length; i++){
        let currentEl = modArr[i]
        let counter = 0
        for(let g = 0; g< modArr.length;g++){
            let testedElement = modArr[g]
            if(currentEl === testedElement){
                counter++
            }
        }
        if(counter % 2 !== 0){
            myMap.set(currentEl,counter)
        }
        counter = 0
    }
    let result = ""
    for(let [key,value] of myMap.entries()){
        result += key +" "
    }
    console.log(result)
}
odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')