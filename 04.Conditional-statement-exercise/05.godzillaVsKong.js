function godzillVsKong(args) {
    let budget = Number(args[0]);
    let extraCount = Number(args[1]);
    let outfitOfExtra = Number(args[2]);

    let decor = budget * 0.1;
    let sumOfOutfit = extraCount * outfitOfExtra;
    if (extraCount > 150) {
        sumOfOutfit *= 0.9;
    }

    let totalSum = decor + sumOfOutfit;
    if (budget >= totalSum) {
        let priceLeft = budget - totalSum;
        console.log("Action!");
        console.log(`Wingard starts filming with ${priceLeft.toFixed(2)} leva left.`)
    } else {
        let neededPrice = totalSum - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededPrice.toFixed(2)} leva more.`);
    }


}


godzillVsKong(["9587.88",
"222",
"55.68"])