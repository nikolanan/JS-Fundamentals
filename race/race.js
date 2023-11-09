function race(data){
    let arrOfNames = data.shift().split(", ")

    let object ={}
    for(let name of arrOfNames){
        object[name] = 0
    }

    let regexName = /[A-Za-z]/g
    let regexDigits = /\d/g

    for(let el of data){
        if(el === "end of race"){
            break;
        }
        let currentName = el.match(regexName).join("")
        let sum = 0
        let arrDigits = el.match(regexDigits)
        arrDigits.map(d => sum += Number(d))
    
        if(object.hasOwnProperty(currentName)){
            object[currentName] += sum 
        }

    }

    let sortedArr = []

    for(let [key, value] of Object.entries(object)){
        sortedArr.push([key,value])
    }
    sortedArr.sort((a,b) => b[1] - a[1])
    
    let place = 1;
    for(let i =0;i<=2;i++){
        
        let placeLetters =""
        switch(place){
            case 1: placeLetters ="st";break;
            case 2: placeLetters = "nd";break;
            case 3: placeLetters = "rd";break;
        }
        
        console.log(`${place}${placeLetters} place: ${sortedArr[i][0]}`)
        place ++
    }

}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])