function newHouse(params){
    let flowerType = params[0];
    let numberOfFlowers = Number(params[1]);
    let budget = Number(params[2]);
    let price = 0;

    
    switch (flowerType) {
        case "Roses":
            price = numberOfFlowers * 5;
            break;
        case "Dahlias":
            price = numberOfFlowers * 3.80;
            break;
        case "Tulips":
            price = numberOfFlowers * 2.80;
            break;
        case "Narcissus":
            price = numberOfFlowers * 3;
            break;
        case "Gladiolus":
            price = numberOfFlowers * 2.50;
            break;
    
        default:
            break;
    }

    if (flowerType === "Roses" && numberOfFlowers > 80){
        price *= 0.90;
    }else if (flowerType === "Dahlias" && numberOfFlowers > 90){
        price *= 0.85;
    }else if (flowerType === "Tulips" && numberOfFlowers > 80){
        price *= 0.85;
    }else if (flowerType === "Narcissus" && numberOfFlowers < 120){
        price *= 1.15;
    }else if (flowerType === "Gladiolus" && numberOfFlowers < 80){
        price *= 1.2;
    }

    if (budget >= price){
        let moneyLeft = budget - price;
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    }else{
        let neededMoney = price - budget;
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
    }
}


newHouse(["Narcissus",
"119",
"360"])