function familyTrip(args){
    let budget = Number(args[0]);
    let nightCount = Number(args[1]);
    let nightPrice = Number(args[2]);
    let percentageForAdditionalCosts =Number(args[3]);
    
    let price = 0;

    if (nightCount > 7){
        price += nightPrice * 0.95 * nightCount;
    }else{

            price += nightCount * nightPrice;
    }

    let percentCostLeft = percentageForAdditionalCosts / 100 * budget;

    let totalSum = percentCostLeft + price;
    
    if (budget >= totalSum){
        let moneyLeft = budget - totalSum;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);

    }else{
        let moneyNeeded = totalSum - budget;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    }



}

familyTrip(["500",
"7",
"66",
"15"])