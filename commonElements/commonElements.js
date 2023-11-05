function common(arr1,arr2){
    arr1Length = arr1.length
    arr2Length = arr2.length

    for(let i=0;i < arr1Length; i++){
        for(let j=0;j< arr2Length;j++){
            if(arr1[i] === arr2[j]){
                console.log(arr1[i])
            }
        }
    }
}
common(['o','t', 'U', 'g', 'r', 'p'],
['s', 'o', 'c', 'i', 'a', 'l']
)