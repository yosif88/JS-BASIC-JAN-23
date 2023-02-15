function careOfPuppy(args) {
    let index = 0;
    
    let foodQuantityKg = Number(args[index]);
    let foodQuantityToGrams = foodQuantityKg * 1000;
    index++;

    let command = args[index];
    index++;

    let totalFood = 0;

    while(command !== 'Adopted'){
        let currentFood = Number(command);
        
        totalFood+= currentFood;

        command = args[index];
        index++;
    }

    if (foodQuantityToGrams >= totalFood){
        let foodLeft =foodQuantityToGrams - totalFood;
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);
    }else{
        let foodNeeded = Math.abs(foodQuantityToGrams - totalFood);
        console.log(`Food is not enough. You need ${foodNeeded} grams more.`);
    }


}

careOfPuppy(["3",
"1000",
"1000",
"1000",
"Adopted"])
