function addBags(args) {
    let priceOfLuggageOver20Kg = Number(args[0]);
    let kilogramsOfBaggage = Number(args[1]);
    let DaysOfTravel = Number(args[2]);
    let baggageCount = Number(args[3]);
    let totalPrice = 0;

    if (kilogramsOfBaggage < 10) {
        priceOfLuggageOver20Kg *= 0.2;
    } else if (kilogramsOfBaggage <= 20) {
        priceOfLuggageOver20Kg *= 0.50;

    }

    if (DaysOfTravel < 7) {
        priceOfLuggageOver20Kg *= 1.40;
    } else if (DaysOfTravel <= 30) {
        priceOfLuggageOver20Kg *= 1.15;
    } else {
        priceOfLuggageOver20Kg *= 1.10;
    }

    totalPrice = priceOfLuggageOver20Kg * baggageCount;

    console.log(` The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}
addBags([
    25.50,
    5,
    36,
    6,

])