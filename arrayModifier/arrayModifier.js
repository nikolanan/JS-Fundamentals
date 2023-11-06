function arrayModifier(data){
    let arrayOfNumbers = data[0].split(" ").map(Number)

    let counter = 1
    
    while(data[counter] !== "end"){
        let [command,index1,index2] = data[counter].split(" ")
        switch(command){
            case "swap":
            let temp = arrayOfNumbers[index1]
            arrayOfNumbers[index1] = arrayOfNumbers[index2]
            arrayOfNumbers[index2] = temp
            break;

            case "multiply":
            let result = arrayOfNumbers[index1]*arrayOfNumbers[index2]
            arrayOfNumbers[index1] = result
            break;

            case "decrease":
            arrayOfNumbers = arrayOfNumbers.map(x => x-1)
            break;
        }
        counter++
    }
    console.log(arrayOfNumbers.join(", "))
    
}
arrayModifier(['23 -2 321 87 42 90 -123',
            'swap 1 3',
            'swap 3 6',
            'swap 1 0',
            'multiply 1 2',
            'multiply 2 1',
            'decrease',
            'end'])