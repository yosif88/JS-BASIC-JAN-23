function catFood(args) {
    let index = 0;

    let numberOfCat = Number(args[index]);
    index++;

    let totalFoodGrams = 0;
    
    let countGroupOne = 0;
    let countGroupTwo = 0;
    let countGroupThree = 0;

    for (let i = 0; i < numberOfCat; i++) {
        let currentFood = Number(args[index]);
        index++;
        totalFoodGrams += currentFood;

        if (currentFood >= 100 && currentFood < 200){
            countGroupOne ++;
        }else if(currentFood < 300){
            countGroupTwo++;
        }else{
            countGroupThree++;
        }

    }
    let foodInKilograms = totalFoodGrams / 1000;
    let sum = foodInKilograms * 12.45;

    console.log(`Group 1: ${countGroupOne} cats.`);
    console.log(`Group 2: ${countGroupTwo} cats.`);
    console.log(`Group 3: ${countGroupThree} cats.`);
    console.log(`Price for food per day: ${sum.toFixed(2)} lv.`);

}

catFood(["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])