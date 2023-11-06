function wordsTracker(data){
    let object = {}
    let arrOfSearchedWords = data.shift(data[0]).split(" ")
    
    for(let el of arrOfSearchedWords){
        object[el] = 0
    }
    for(let [key,value] of Object.entries(object)){
        for(let word of data){
            if(key === word){
                value++
                object[key] = value
            }
        }
    }
    let sortedArr = []
    for(let entry of Object.entries(object)){
        sortedArr.push(entry)
    }
    sortedArr.sort((a,b) => b[1]-a[1])
    
    
    for(let el of sortedArr){
        console.log(`${el[0]} - ${el[1]}`)
    }
}
wordsTracker([ 'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task' ]
    )