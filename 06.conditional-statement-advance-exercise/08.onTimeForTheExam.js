function onTimeForTheExam(params) {
    let examHour = Number(params[0]);
    let examMin = Number(params[1]);
    let hourOfArrival = Number(params[2]);
    let minOfArrival = Number(params[3]);

    let examMinutes = (examHour * 60) + examMin;
    let arrivalMinutes = (hourOfArrival * 60) + minOfArrival;
    let totalMinDiff = Math.abs(arrivalMinutes - examMinutes);

    let hour = 0;
    let min = 0;
    
    if (arrivalMinutes > examMinutes) {
        console.log('Late');
        if (totalMinDiff < 60) {
            console.log(`${totalMinDiff} minutes after the start`);
        } else {
            hour = Math.floor(totalMinDiff / 60);
            min = totalMinDiff % 60;
            if (min < 10) {
                console.log(`${hour}:0${min} hours after the start`);
            } else {
                console.log(`${hour}:${min} hours after the start`);
            }
        }
    } else if (arrivalMinutes < examMinutes - 30) {
        console.log('Early');
        if (totalMinDiff < 60) {
            console.log(`${totalMinDiff} minutes before the start`);
        } else {
            hour = Math.floor(totalMinDiff / 60);
            min = totalMinDiff % 60;
            if (min < 10) {
                console.log(`${hour}:0${min} hours before the start`);
            } else {
                console.log(`${hour}:${min} hours before the start`);
            }
        }

    } else {
        console.log('On time');
        console.log(`${totalMinDiff} minutes before the start`);
    }
}

onTimeForTheExam(["14",
"00",
"13",
"55"])