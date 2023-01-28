function tradeCommissions(args) {
    let city = args[0];
    let salesVolume = Number(args[1]);
    let sum = 0;
    
    if (salesVolume > 0) {
        
        switch (city) {
            case "Sofia":
                if (0 <= salesVolume && salesVolume <= 500) {
                    sum = salesVolume * 0.05;
                } else if (salesVolume <= 1000) {
                    sum = salesVolume * 0.07;
                } else if (salesVolume <= 10000) {
                    sum = salesVolume * 0.08;
                } else {
                    sum = salesVolume * 0.12;
                }
                break;
            case "Varna":
                if (0 <= salesVolume && salesVolume <= 500) {
                    sum = salesVolume * 0.045;
                } else if (salesVolume <= 1000) {
                    sum = salesVolume * 0.075;
                } else if (salesVolume <= 10000) {
                    sum = salesVolume * 0.10;
                } else {
                    sum = salesVolume * 0.13;
                }
                break;
            case "Plovdiv":           
                    if (0 <= salesVolume && salesVolume <= 500) {
                        sum = salesVolume * 0.055;
                    } else if (salesVolume <= 1000) {
                        sum = salesVolume * 0.08;
                    } else if (salesVolume <= 10000) {
                        sum = salesVolume * 0.12;
                    } else {
                        sum = salesVolume * 0.145;
                    }        
                break;
            default:
                console.log("error");
        }
    
    } else {
        console.log("error");
    }
    if (sum) {
        console.log(sum.toFixed(2));
    }
  
}






// function tradeCommissions(args) {
//     let city = args[0];
//     let salesVolume = Number(args[1]);
//     let sum = 0;
//     switch (city) {
//         case "Sofia":
//             if (salesVolume < 0) {
//                 console.log('error');
//             } else {

//                 if (0 <= salesVolume && salesVolume <= 500) {
//                     sum = salesVolume * 0.05;

//                 } else if (salesVolume > 500 && salesVolume <= 1000) {
//                     sum = salesVolume * 0.07;
//                 } else if (salesVolume > 1000 && salesVolume <= 10000) {
//                     sum = salesVolume * 0.08;
//                 } else {
//                     sum = salesVolume * 0.12;
//                 }
//             } break;
//         case "Varna":
//             if (salesVolume < 0) {
//                 console.log('error');
//             } else {

//                 if (0 <= salesVolume && salesVolume <= 500) {
//                     sum = salesVolume * 0.045;

//                 } else if (salesVolume > 500 && salesVolume <= 1000) {
//                     sum = salesVolume * 0.075;
//                 } else if (salesVolume > 1000 && salesVolume <= 10000) {
//                     sum = salesVolume * 0.10;
//                 } else {
//                     sum = salesVolume * 0.13;
//                 }
//             } break;

//         case "Plovdiv":
//             if (salesVolume < 0) {
//                 console.log('error');
//             } else {

//                 if (0 <= salesVolume && salesVolume <= 500) {
//                     sum = salesVolume * 0.055;

//                 } else if (salesVolume > 500 && salesVolume <= 1000) {
//                     sum = salesVolume * 0.08;
//                 } else if (salesVolume > 1000 && salesVolume <= 10000) {
//                     sum = salesVolume * 0.12;
//                 } else {
//                     sum = salesVolume * 0.145;
//                 }
//             }
//             break;
//         default:
//             console.log("error");
//     }
//     if (sum) {
//         console.log(sum.toFixed(2));
//     }
// }



tradeCommissions(["Plovdiv",
    "10000.01"])
