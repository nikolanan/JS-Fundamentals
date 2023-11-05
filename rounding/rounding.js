function rounding(number,n){
    if(n >15){
        number = number.toFixed(15);
        console.log(parseFloat(number))
    }else{
        number = number.toFixed(n);
        console.log(parseFloat(number))
    }
}
rounding(10.5,3)