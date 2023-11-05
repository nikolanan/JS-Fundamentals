function triangle(n){
    
    let result = ``
    for(let i = 1; n >= i; i++){
        for(let g = 1; g <=i; g++){
            result+= `${i} `;
        }
        console.log(result);
        result =``;
    }
    
}
triangle(5)