// function solve(args) {
//     let hour = Number(args[0]);
//     let minute = Number(args[1]);
//     let nextMinute = 15;
    
//     minute += nextMinute;

//     if (minute > 59) {
//         minute = (minute % 60);
//         hour += 1;
//     }

//     if (hour > 23) {
//         hour = 0;
//     }

//     if (minute < 10) {
//         console.log(`${hour}:0${minute}`);
//     } else {
//         console.log(`${hour}:${minute}`);
//     }

// }
// // solve((["1", "46"]))
// solve(["11", "08"])

function solve(args) {
    let hour = Number(args[0]);
    let minute = Number(args[1]);
    let nextMinute = 15;

    let totalMin = hour * 60 + minute + nextMinute;

    let finalHour = Math.floor(totalMin / 60);

    let finalMin = totalMin % 60;

    if (finalHour === 24) {
        finalHour = 0;
    }
    if (finalMin < 10) {
        console.log(`${finalHour}:0${finalMin}`);
    }else {
        console.log(`${finalHour}:${finalMin}`)
    }
}

solve(["23", "59"])
