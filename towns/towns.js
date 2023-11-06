function town(arr){
    let arrOfObjects = []
    for(let i =0; i < arr.length;i++){
        let [town,latitude,longitude]= arr[i].split(" | ")
        
        let object = {

        }
        object.town = town
        object.latitude = Number(latitude).toFixed(2)
        object.longitude = Number(longitude).toFixed(2)

        arrOfObjects.push(object)
    }
    for(let el of arrOfObjects){
        console.log(el)
    }
}
town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])