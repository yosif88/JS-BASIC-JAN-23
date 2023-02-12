function aluminumJoinery(args) {
    let joineryCount = Number(args[0]);
    let typeJoinery = args[1];
    let delivery = args[2];
    let price = 0;


    if (joineryCount <= 10) {
        console.log('Invalid order');

    } else {
        switch (typeJoinery) {
            case "90X130":
                if (joineryCount > 60) {
                    price = joineryCount * 110 * 0.92;

                } else if (joineryCount > 30) {
                    price = joineryCount * 110 * 0.95;
                } else {
                    price = joineryCount * 110;
                }
                break;
            case "100X150":
                if (joineryCount > 80) {
                    price = joineryCount * 140 * 0.90;

                } else if (joineryCount > 40) {
                    price = joineryCount * 140 * 0.94;
                } else {
                    price = joineryCount * 140;
                }
                break;
            case "130X180":
                if (joineryCount > 50) {
                    price = joineryCount * 190 * 0.88;

                } else if (joineryCount > 20) {
                    price = joineryCount * 190 * 0.93;
                } else {
                    price = joineryCount * 190;
                }
                break;
            case "200X300":
                if (joineryCount > 50) {
                    price = joineryCount * 250 * 0.86;

                } else if (joineryCount > 25) {
                    price = joineryCount * 250 * 0.91;
                } else {
                    price = joineryCount * 250;
                }
                break;

        }

        if (delivery === "With delivery") {
            price += 60;
        }
        if (joineryCount > 99) {
            price *= 0.96;
        }

        console.log(`${price.toFixed(2)} BGN`);
    }

}

aluminumJoinery([
    11,
    "100X150",
    "With delivery"
])