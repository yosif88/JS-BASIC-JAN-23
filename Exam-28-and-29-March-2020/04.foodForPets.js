function foodForPets(args) {
    let index = 0;

    let daysCount = Number(args[index]);
    index++;

    let totalAmountFood = Number(args[index]);
    index++;

    let totalFoodEaten = 0;
    let eatinDog = 0;
    let eatinCat = 0;
    let biscuits = 0;

    for (let i = 1; i <=  daysCount; i++) {
        let foodDog = Number(args[index]);
        index++;

        let foodCat = Number(args[index]);
        index++;
        if ( i  % 3 === 0) {
            let current_biscuits = (foodCat + foodDog) * 0.10;
            biscuits += current_biscuits;
        }
        eatinDog += foodDog;
        eatinCat += foodCat;
        
    }
    totalFoodEaten = eatinCat + eatinDog;
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);

    let percentTotalEatingFood = (totalFoodEaten / totalAmountFood) * 100;
    console.log(`${percentTotalEatingFood.toFixed(2)}% of the food has been eaten.`);
    
    let percentTotalEatingDog = (eatinDog / totalFoodEaten) * 100;
    console.log(`${percentTotalEatingDog.toFixed(2)}% eaten from the dog.`);

    let percentTotalEatingCat = (eatinCat / totalFoodEaten) * 100;
    console.log(`${percentTotalEatingCat.toFixed(2)}% eaten from the cat.`);


}

foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])