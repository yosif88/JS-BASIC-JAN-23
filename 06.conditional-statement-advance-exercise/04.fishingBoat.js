function fishingBoat(params) {
    let budget = Number(params[0]);
    let season = params[1];
    let numberOfFishermen = Number(params[2]);
    let rentPrice = 0;

    switch (season) {
        case "Spring":
            rentPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            rentPrice = 4200;
            break;
        case "Winter":
            rentPrice = 2600;
            break;
    }
    if (numberOfFishermen <= 6){
        rentPrice *=0.90;
    }else if (numberOfFishermen <= 11){
        rentPrice *= 0.85;
    }else{
        rentPrice *= 0.75;
    }

    if (season != "Autumn" && numberOfFishermen % 2 === 0){
        rentPrice *= 0.95;
    }
    if (budget >= rentPrice){
        let moneyLeft = budget - rentPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }else {
        let neededMoney = rentPrice - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }
}

fishingBoat(["2000",
"Winter",
"13"])
