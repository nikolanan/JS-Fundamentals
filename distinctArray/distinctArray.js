function distinctArray(array){
    let newArray = []
    for(let i =0; i<array.length;i++){
        currentElement = array[i]
        if(!newArray.includes(currentElement)){
            newArray.push(currentElement)
        }
    }
    console.log(newArray.join(" "))
}
distinctArray([7, 8, 9, 7, 2, 3,
4, 1, 2])