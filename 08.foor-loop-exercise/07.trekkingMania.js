function trekkingMania(args) {
    let nums = Number(args[0]);

    let totalPeople = 0;
    let countMusalla = 0;
    let countMontBlanc = 0;
    let countKilimanjaro = 0;
    let countK2 = 0;
    let countEverest = 0;

    for (i = 1; i <= nums; i++) {
        let currentNums = Number(args[i]);
        totalPeople += currentNums;
        if (currentNums <= 5) {
            countMusalla += currentNums;
        } else if (currentNums <= 12) {
            countMontBlanc+= currentNums;
        }else if (currentNums <= 25){
            countKilimanjaro+= currentNums;
        }else if (currentNums <= 40){
            countK2+= currentNums;
        }else{
            countEverest+= currentNums;
        }

    }
    let percentClimbersMusalla = (countMusalla / totalPeople) * 100;
    let percentClimbersMontBlanc = (countMontBlanc / totalPeople) * 100;
    let percentClimbersKilimanjaro = (countKilimanjaro / totalPeople) * 100;
    let percentClimbersK2 = (countK2 / totalPeople) * 100;
    let percentClimbersEverest = (countEverest / totalPeople) * 100;

    console.log(`${percentClimbersMusalla.toFixed(2)}%`);
    console.log(`${percentClimbersMontBlanc.toFixed(2)}%`);
    console.log(`${percentClimbersKilimanjaro.toFixed(2)}%`);
    console.log(`${percentClimbersK2.toFixed(2)}%`);
    console.log(`${percentClimbersEverest.toFixed(2)}%`);

}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])