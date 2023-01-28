function toyShop(args) {
    let excursionPrice = Number(args[0]);
    let countPuzzels = Number(args[1]);
    let countTalkingDolls = Number(args[2]);
    let countTeddyBears = Number(args[3]);
    let countMinions = Number(args[4]);
    let countTrucks = Number(args[5]);

    let pricePuzzels = countPuzzels * 2.60;
    let priceTalkingDolls = countTalkingDolls * 3;
    let priceTeddyBears = countTeddyBears * 4.10;
    let priceMinions = countMinions * 8.20;
    let priceTruks = countTrucks * 2;

    let countToys = countMinions + countPuzzels + countTalkingDolls + countTrucks + countTeddyBears
    let totalSum = priceMinions + pricePuzzels + priceTalkingDolls + priceTeddyBears + priceTruks;


    if (countToys >= 50) {
        totalSum *= 0.75;
    }
    totalSum *= 0.90;
    if (totalSum >= excursionPrice) {
        let sumLeft = totalSum - excursionPrice;

        console.log(`Yes! ${sumLeft.toFixed(2)} lv left.`);
    } else {
        let needed = excursionPrice - totalSum;
        console.log(`Not enough money! ${needed.toFixed(2)} lv needed.`);
    }


}

toyShop(["40.8", "20", "25", "30", "50", "10"])
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])