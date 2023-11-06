function storeProv(arr1, arr2){
    let provisions = {

    }
    let length1 = arr1.length

    for(let i = 0; i < length1; i +=2){
        let product = arr1[i]
        let quantity = Number(arr1[i+1])

        provisions[product] = quantity
    }

    let length2 = arr2.length

    for(let i =0;i < length2; i +=2){
        let product2 = arr2[i]
        let quantity2 = Number(arr2[i+1])

        if(provisions.hasOwnProperty(product2)){
            provisions[product2] += quantity2
        }else{
            provisions[product2] = quantity2
        }

    }

    for(let [key,value] of Object.entries(provisions)){
        console.log(`${key} -> ${value}`)
    }

}
storeProv([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])