function dungeon(text){
    text = String(text)
    let arr = text.split("|")

    let health = 100;
    let coins = 0;
    let rooms = 0;
    let statement = true

    for(let i = 0; i < arr.length;i++){
        let element = arr[i]
        
        let newArr = arr[i].split(" ")
        let subElement = newArr[0]
        let numberFromArray = (Number(newArr[1]))
        
        if(subElement === "potion"){
            if(health + numberFromArray >= 100){
                console.log(`You healed for ${100 - health} hp.`)
                console.log(`Current health: 100 hp.`)
                health = 100
            }else{
                health += numberFromArray
                console.log(`You healed for ${numberFromArray} hp.`)
                console.log(`Current health: ${health} hp.`)
            }
            rooms++
        }

        if(subElement === "chest"){
            console.log(`You found ${numberFromArray} coins.`)
            coins += numberFromArray
            rooms++
        }

        if(subElement !== "potion" && subElement !== "chest"){
            rooms++
            if(health - numberFromArray > 0){
                console.log(`You slayed ${subElement}.`)
                health -= numberFromArray
            }else{
                console.log(`You died! Killed by ${subElement}.`)
                console.log(`Best room: ${rooms}`)
                statement = false
                break;
            } 
        }   
    }
    if(statement === true){
    console.log("You've made it!")
    console.log(`Coins: ${coins}`)
    console.log(`Health: ${health}`)
    }
    //console.log(arr[0].match(/\d+/g))
    //console.log(arr[0].split(" "))



}
dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])