// function personalTitles(args){
//     let age = Number(args[0]);
//     let gender = args[1];

//     if (gender == "m") {
//         if (age >= 16){
//             console.log("Mr.");
//         }else {
//             console.log("Master");
//         }
//     }else {
//         if (age >= 16){
//             console.log("Ms.");
//         }else {
//             console.log('Miss');
//         }
//     }

// }

function personalTitles(args){
    let age = Number(args[0]);
    let gender = args[1];

    switch(gender){
        case "m":
            if (age >= 16){
                console.log("Mr.");
            }else {
                console.log("Master");
            }
            break;
        case "f":
            if (age >= 16){
                console.log("Ms.");
            } else {
                console.log("Miss");
            }
            break;
    }   

}
personalTitles(["15.9"
    ,"m"])
