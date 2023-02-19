function painingEggs(args){
    let sizeEgg = args[0];
    let colorEgg = args[1];
    let numberOfLots = Number(args[2]);

    let price = 0;

    switch(sizeEgg){
        case "Large":
            switch(colorEgg){
                case "Red":
                    price = 16 * numberOfLots;
                    break;
                case "Green":
                    price = 12 * numberOfLots;
                    break;
                case "Yellow":
                    price = 9 * numberOfLots;
                    break;
            }
            break;
        case "Medium":
            switch(colorEgg){
                case "Red":
                    price = 13 * numberOfLots;
                    break;
                case "Green":
                    price = 9 * numberOfLots;
                    break;
                case "Yellow":
                    price = 7 * numberOfLots;
                    break;
            }
            break;
        case "Small":
            switch(colorEgg){
                case "Red":
                    price = 9 * numberOfLots;
                    break;
                case "Green":
                    price = 8 * numberOfLots;
                    break;
                case "Yellow":
                    price = 5 * numberOfLots;
                    break;
            }
            break;
    }
    price *= 0.65;
    console.log(`${price.toFixed(2)} leva.`);

}
painingEggs(["Large",
"Red",
"7"])