function equalSum(arr){
let arrLength = arr.length;
let leftSum =0;
let rightSum =0;

let statement = false;

let counter =0;
if(arrLength !== 1){
    for(let i =0; i < arrLength -1 ; i++){
        let currentNumber = arr[i+1];

        for(let j =0; j < i+1;j++){
            leftSum += arr[j];
        }

        for(let g= i+2;g < arrLength; g++){
            rightSum += arr[g];
        }

        if(leftSum === rightSum){
            statement = true;
            console.log(i+1)
            break;
        }
    leftSum =0;
    rightSum =0;
}
if(statement === false){
    console.log("no")
}
}else{
    console.log(0)
}
}
equalSum([10, 5, 5, 99,
    3, 4, 2, 5, 1,
    1, 4]     )