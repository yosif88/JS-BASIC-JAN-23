// function numbersEndingIn7(){
//     for (let i = 1; i <= 1000; i++){
//         if (i % 10 === 7){
//             console.log(i);
//         }
//     }
// }


// function numbersEndingIn7(){
//     for (let i = 7; i <= 997; i++){
//         if (i % 10 === 7){
//             console.log(i);
//         }
//     }
// }

function numbersEndingIn7(){
    for (let i = 7; i <= 997; i+= 10){
        if (i % 10 === 7){
            console.log(i);
        }
    }
}
numbersEndingIn7();