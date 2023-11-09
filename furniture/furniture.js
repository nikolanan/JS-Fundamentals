function furniture(arr){

    let regexp = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+.?\d*)!(?<quantity>\d+)/
    let totalSum = 0

    console.log("Bought furniture:")
    for(let el of arr){
        let currentReg = el.match(regexp)
        if(currentReg){
            console.log(currentReg.groups.name)
            totalSum += Number(currentReg.groups.price) * Number(currentReg.groups.quantity)
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)