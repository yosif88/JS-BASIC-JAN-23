function energyBooster(args) {
    let fruitType = args[0];
    let sizeSet = args[1];
    let orderedCount = Number(args[2]);

    let price = 0;

    switch(sizeSet){
        case 'big':
            switch(fruitType){
                case 'Watermelon':
                    price = 5 * 28.70 * orderedCount;
                    break;
                case 'Mango':
                    price = 5 *19.60 * orderedCount;
                    break;
                case 'Pineapple':
                    price = 5 * 24.80 * orderedCount;
                    break;
                case 'Raspberry':
                    price = 5 * 15.20 * orderedCount;
                    break;
            }
            break;
    
        case 'small':
            switch(fruitType){
            case 'Watermelon':
                    price = 2 * 56 * orderedCount;
                    break;
                case 'Mango':
                    price = 2 *36.66 * orderedCount;
                    break;
                case 'Pineapple':
                    price = 2 * 42.10 * orderedCount;
                    break;
                case 'Raspberry':
                    price = 2 * 20 * orderedCount;
                    break;
            }
            break;
          
    }

    if (400 <= price && price <= 1000){
        price *= 0.85;
    }else if (price > 1000){
        price *= 0.50;
    }

    console.log(`${price.toFixed(2)} lv.`);

}

energyBooster(["Raspberry",
"small",
"50"])