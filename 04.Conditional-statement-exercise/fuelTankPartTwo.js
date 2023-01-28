function fuelTank(args) {
    let typeFuel = args[0];
    let amountFuel = Number(args[1]);
    let clubCard = args[2];

    let priceGas = 0.93;
    let priceDiesel = 2.33;
    let priceGasoline = 2.22;

    if (typeFuel == 'Gas') {
        if (clubCard == 'Yes') {
            priceGas -= 0.08;
        }
        if (amountFuel >= 20 && amountFuel <= 25) {
            priceGas *= 0.92 * amountFuel;
        } else if (amountFuel > 25) {
            priceGas *= 0.9 * amountFuel;
        } else {
            priceGas *= amountFuel
        }
        console.log(`${priceGas.toFixed(2)} lv.`);


    } else if (typeFuel === 'Diesel') {
        if (clubCard == 'Yes') {
            priceDiesel -= 0.12;
        }
        if (amountFuel >= 20 && amountFuel <= 25) {
            priceDiesel *= 0.92 * amountFuel;
        } else if (amountFuel > 25) {
            priceDiesel *= 0.9 * amountFuel;
        } else {
            priceDiesel *= amountFuel
        }
        console.log(`${priceDiesel.toFixed(2)} lv.`);
    } else {
        if (clubCard == 'Yes') {
            priceGasoline -= 0.18;
        }
        if (amountFuel >= 20 && amountFuel <= 25) {
            priceGasoline *= 0.92 * amountFuel;
        } else if (amountFuel > 25) {
            priceGasoline *= 0.9 * amountFuel;
        } else {
            priceGasoline *= amountFuel;
        }
        console.log(`${priceGasoline.toFixed(2)} lv.`);
    }

}


fuelTank(["Gasoline", "25", "No"])