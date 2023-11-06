function employees(arrNames){
    arrObjects = []
    for(let i =0 ;i < arrNames.length; i++){
        let object = {

        }
        let key = arrNames[i]
        let value = arrNames[i].length
        object[key] = value
        
        for(let [first, second] of Object.entries(object)){
            console.log(`Name: ${first} -- Personal Number: ${second}`)
        }
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )