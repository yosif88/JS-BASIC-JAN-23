function smallShop(args) {
    let product = args[0];
    let city = args[1];
    let quantity = Number(args[2]);
    let sum = 0;

    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee":
                    sum = quantity * 0.50;
                    break
                case "water":
                    sum = quantity * 0.80;
                    break;
                case "beer":
                    sum = quantity * 1.20;
                    break;
                case "sweets":
                    sum = quantity * 1.45;
                    break;
                case "peanuts":
                    sum = quantity * 1.60;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee":
                    sum = quantity * 0.40;
                    break;
                case "water":
                    sum = quantity * 0.70;
                    break;
                case "beer":
                    sum = quantity * 1.15;
                    break;
                case "sweets":
                    sum = quantity * 1.30;
                    break
                case "peanuts":
                    sum = quantity * 1.50;
                    break
            
                default:
                    break;
            }
            break;

        case "Varna":
             switch (product) {
                case "coffee":
                    sum = quantity * 0.45;
                    break;
                case "water":
                    sum = quantity * 0.7;
                    break;
                case "beer":
                    sum = quantity * 1.10;
                    break;
                case "sweets":
                    sum = quantity * 1.35;
                    break
                case "peanuts":
                    sum = quantity * 1.55
                    break;
             }
            break;
        
    }
    console.log(sum);
}
smallShop(["coffee",
"Varna",
"2"])
