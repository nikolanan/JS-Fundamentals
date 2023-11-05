function division(number){

    let statement1 = false;
    let statement2 = false;
    let statement3 = false;
    let statement4 = false;
    let statement5 = false;

    if(number %2 == 0){
        statement1 = true;
    }
    if(number % 3 ==0){
        statement2 = true;
    }
    if(number % 6 == 0){
        statement3 = true;
    }
    if(number % 7 == 0){
        statement4 = true;
    }
    if(number % 10 == 0){
        statement5 = true;
    }

    if(statement5 == true){
        console.log("The number is divisible by 10");
    }else if(statement4 == true){
        console.log("The number is divisible by 7");
    }else if(statement3 == true){
        console.log("The number is divisible by 6");
    }else if(statement2 == true){
        console.log("The number is divisible by 3");
    }else if(statement1 == true){
        console.log("The number is divisible by 2");
    }else{
        console.log("Not divisible")
    }
}
division(30)