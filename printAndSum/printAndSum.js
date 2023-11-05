function print(a,b){
    let sum = 0;

    let result =``;
    for(let i = a; b >= i; i++){
        sum += i;
        result +=`${i} `;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
print(0,26)