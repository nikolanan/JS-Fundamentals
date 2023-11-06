function shopList(data){
    let list = data[0].split("!")

    let counter = 1
    while(data[counter] !== "Go Shopping!"){
        let allWords = data[counter].split(" ")
        let command = allWords[0]
        let item = allWords[1]
        let newItem = allWords[2]
        if(command === "Urgent"){
            if(!list.includes(item)){
                list.unshift(item)
            }
        }else if(command === "Unnecessary"){
            if(list.includes(item)){
                let index1 = list.indexOf(item)
                list.splice(index1,1)
            }
        }else if(command === "Correct"){
            if(list.includes(item)){
                let index2 = list.indexOf(item)
                list[index2] = newItem
            }
        }else{
            if(list.includes(item)){
                let index3 = list.indexOf(item)
                list.splice(index3,1)
                list.push(item)
            }
        }
        counter++
    }
    console.log(list.join(", "))
}
shopList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
)