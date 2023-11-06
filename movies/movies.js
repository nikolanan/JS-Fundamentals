function movies(data){
    let arrOfObject = []
    let dataLength = data.length
    for(let i = 0; i < dataLength; i++){
        let object = {

        }
        let movieName = data[i].split("addMovie ")[1]
        let command = data[i].split("addMovie")[0]
        
        if( command === ""){
            object["name"] = movieName 
            arrOfObject.push(object)
        }    
    }
    // for(let f=0 ; f < arrOfObject.length;f++){
    //     for(let [a,value] of Object.entries(arrOfObject[f])){
    //         for(let j = 0; j < dataLength; j++){
    //             let [nameMovie,date] = data[j].split(" onDate ")
    //             if(value === nameMovie){
    //             let element = arrOfObject[f]
    //             element["date"] = date
    //             }
    //         }
    //     }
    // }

    for(let f=0 ; f < arrOfObject.length;f++){
        for(let [a,value] of Object.entries(arrOfObject[f])){
            for(let j = 0; j < dataLength; j++){
                let [nameMovie,director] = data[j].split(" directedBy ")
                let [nameMovie2,date] = data[j].split(" onDate ")
                if(value === nameMovie){
                let element = arrOfObject[f]
                element["director"] = director
                }
                if(value === nameMovie2){
                let element = arrOfObject[f]
                element["date"] = date
                }
            }
        }
    }
    for(let i =0; i < arrOfObject.length; i++){
        let sum = 0
        for(let [key,value] of Object.entries(arrOfObject[i])){
            if(key === "name" || key === "director" || key === "date"){
                sum ++
            }
        }
        if(sum === 3){
            console.log(JSON.stringify(arrOfObject[i]))
        }
    }

    
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])