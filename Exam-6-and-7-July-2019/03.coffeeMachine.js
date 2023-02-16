function coffeeMachine(args) {
    let drinkType = args[0];
    let sugar = args[1];
    let drinkCount = Number(args[2]);

    let price = 0;
    switch (drinkType) {
        case "Espresso":
            switch (sugar) {
                case "Without":
                    price = drinkCount * 0.90 * 0.65;
                    break;
                case "Normal":
                    price = drinkCount * 1 ;
                    break;
                case "Extra":
                    price = drinkCount * 1.20;
                    break;
            }
            break;

        case "Cappuccino":

            switch (sugar) {
                case "Without":
                    price = drinkCount * 1 * 0.65;
                    break;
                case "Normal":
                    price = drinkCount * 1.20;
                    break;
                case "Extra":
                    price = drinkCount * 1.60;
                    break;
            }
            break;
        
        case "Tea":
            switch (sugar) {
                case "Without":
                    price = drinkCount * 0.50 * 0.65;
                    break;
                case "Normal":
                    price = drinkCount * 0.60;
                    break;
                case "Extra":
                    price = drinkCount * 0.70;
                    break;
            }
            break;
    }

    if (drinkType === 'Espresso' && drinkCount > 5){
        price *= 0.75;
    }

    if (price > 15){
        price *= 0.80;
    }

    console.log(`You bought ${drinkCount} cups of ${drinkType} for ${price.toFixed(2)} lv.`);


}



coffeeMachine(["Tea",
"Extra",
"3"])