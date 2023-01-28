function sleepyTomCat(arr){
    let numbersOfHolydays = Number(arr[0]);
    let minutesPerYear = 30000;
    
    let workingDays = numbersOfHolydays * 127;
    let holydays = (365 - numbersOfHolydays ) * 63;
    let sumMinutes = workingDays + holydays;
    let totalMinutes = Math.abs(minutesPerYear - sumMinutes);

    let hour = Math.floor(totalMinutes / 60);
    let mins = totalMinutes % 60;
    
    if (minutesPerYear > sumMinutes){
        console.log('Tom sleeps well');
        console.log(`${hour} hours and ${mins} minutes less for play`);
        
    } else {
        console.log('Tom will run away');
        console.log(`${hour} hours and ${mins} minutes more for play`);
    }
}
sleepyTomCat(["113"])
