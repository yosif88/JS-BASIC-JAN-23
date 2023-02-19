function easterBakeery(args) {
    let priceMeal = Number(args[0]);
    let mealKg = Number(args[1]);
    let sugarKg = Number(args[2]);
    let eggsCount = Number(args[3]);
    let yeast = Number(args[4]);

    let sumMeals = mealKg * priceMeal;
    let sumSugar = priceMeal * 0.75;
    let sumEggs = priceMeal * 1.10;
    let sumYeast = sumSugar * 0.20;

    let totalSum = sumMeals + (sumSugar * sugarKg)  + (sumEggs * eggsCount) + (sumYeast * yeast);
    console.log(totalSum.toFixed(2));

}

easterBakeery([
    "50",
    "10",
    "3.5",
    "6",
    "1"])