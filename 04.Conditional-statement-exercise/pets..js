function pets(params) {
    let numberOfDays = Number(params[0]);
    let foodLeftInKilograms = Number(params[1]);
    let foodPerDayDogInKg = Number(params[2]);
    let foodPerDayCatInKg = Number(params[3]);
    let foodPerDayTurtleGrams = Number(params[4]);

    let necessaryFoodForDog = numberOfDays * foodPerDayDogInKg;
    let necessaryFoodForCat = numberOfDays * foodPerDayCatInKg;
    let necessaryFoodForTurtle = (foodPerDayTurtleGrams * numberOfDays) / 1000;

    let totalFood = necessaryFoodForCat + necessaryFoodForDog + necessaryFoodForTurtle;
    
    if (totalFood <= foodLeftInKilograms) {
        kgLeft = foodLeftInKilograms - totalFood;
        console.log(`${Math.floor(kgLeft)} kilos of food left.`);
    }else {
        kgNeeded = totalFood - foodLeftInKilograms;
        console.log(`${Math.ceil(kgNeeded)} more kilos of food are needed.`);
    }

    
}
pets(["5","10","2.1","0.8","321"])