function vacation(group, type, day){

    let price = 0;
    switch(type){
        case "Students":
        if(day=="Friday"){
        price = 8.45;
        }else if(day == "Saturday"){
        price = 9.80;
        }else{
        price = 10.46;
        }
        ;break;

        case "Business":
        if(day == "Friday"){
        price = 10.90;
        }else if(day == "Saturday"){
        price = 15.60;
        }else{
        price = 16;
        }
        ;break;

        case "Regular":
        if(day == "Friday"){
            price = 15;
        }else if(day == "Saturday"){
            price = 20;
        }else{
            price = 22.50;
        }
        ;break;
    }

    let totalPrice = group*price;

    if(type == "Students" && group >=30){
        totalPrice = totalPrice - totalPrice*15/100;
    }
    if(type == "Business" && group >= 100){
        totalPrice = (group - 10)*price;
    }
    if(type == "Regular" && group >= 10 && group <= 20){
        totalPrice = totalPrice - totalPrice*5/100;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(40,"Regular","Saturday")