function income(input){
    let regex = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+\.*\d*)\$/
    let i = 0
    let totalIncome = 0
    while(input[i] !== "end of shift"){
        let match = input[i].match(regex)
        if(match === null){
            i++
            continue;
        }
        let name = match.groups.name
        let product = match.groups.product
        let count = Number(match.groups.count)
        let price = Number(match.groups.price)
        let totalCountPerCustomer = count*price
        totalIncome += totalCountPerCustomer
        console.log(`${name}: ${product} - ${totalCountPerCustomer.toFixed(2)}`)
        i++
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
income(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])