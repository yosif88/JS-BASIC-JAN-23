function puppyCare(args) {
    let index = 0;

    let foodKg = Number(args[index]);
    let foodGrams = foodKg * 1000;
    index++;

    let cmd = args[index];
    index++;

    let totalFoodEaten = 0;

    while (cmd !== 'Adopted') {
        food = Number(cmd);
        totalFoodEaten += food;
        cmd = args[index];
        index++;
    }
    if (foodGrams >= totalFoodEaten) {
        let foodLeft = foodGrams - totalFoodEaten;
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);
    }else{
        let foodNeeded = totalFoodEaten - foodGrams;
        console.log(`Food is not enough. You need ${foodNeeded} grams more.`);
    }
}
puppyCare([
    "4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])