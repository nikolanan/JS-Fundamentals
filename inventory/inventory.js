function inventory(data){
    let arrOfObject = []
    for(let i = 0; i < data.length;i++){
        let object = {

        }
        let [Hero, level,items] = data[i].split(" / ")

        object["Hero"] = Hero
        object["level"] = Number(level)
        object["items"] = items
        arrOfObject.push(object)
    }
    let sortedArr = arrOfObject.sort((a,b) => a.level - b.level)

    for(let i =0; i <sortedArr.length; i++){
        for(let [key,value] of Object.entries(sortedArr[i])){
            if(key !== "Hero"){
            console.log(`${key} => ${value}`)
            }else{
            console.log(`${key}: ${value}`)
            }
        }
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])