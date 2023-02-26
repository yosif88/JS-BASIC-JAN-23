function beerAndChips(args) {
    let name = args[0];
    let budget = Number(args[1]);
    let numberOfBeerBottles = Number(args[2]);
    let numberOfChipsPackets = Number(args[3]);

    let priceBeer = numberOfBeerBottles * 1.20;
    let priceChips =Math.ceil((priceBeer * 0.45) * numberOfChipsPackets);

    let totalPrice = priceBeer + priceChips;

    if (totalPrice <= budget){
        let moneyLeft = budget - totalPrice;
        console.log(`${name} bought a snack and has ${moneyLeft.toFixed(2)} leva left.`);
    }else{
        let moneyNeeded = totalPrice - budget;
        console.log(`${name} needs ${moneyNeeded.toFixed(2)} more leva!`);
    }



}

beerAndChips([
    "George",
    "10",
    "2",
    "3"])