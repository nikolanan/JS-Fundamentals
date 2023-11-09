function phone(text){
    let regexp = /\+359([ -])2\1\d{3}\1\d{4}\b/g
    let validPhones = []
    
    let validPhone
    while((validPhone = regexp.exec(text)) !== null){
        validPhones.push(validPhone[0])
    }
    console.log(validPhones.join(", "))

}
// function phone(input) {
//     let validNames = [];
//     let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g
//     while ((validName = pattern.exec(input)) !== null) {
//     validNames.push(validName[0]);
//     }
//     console.log(validNames.join(', '));
//     }
phone(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])