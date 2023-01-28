function flowers(args){
    let countChrysanthemums = Number(args[0]);
    let countRoses = Number(args[1]);
    let countTulips = Number(args[2]);
    let season = args[3];
    let dayIsHolyday = args[4];

    let price = 0;
    let totalFlowers = countChrysanthemums + countRoses + countTulips;

    switch (season) {
        case "Spring":
        case "Summer":
            price = countChrysanthemums * 2 + countRoses * 4.10 + countTulips * 2.50;
            break;
        case "Autumn":
        case "Winter":
            price = countChrysanthemums * 3.75 + countRoses * 4.50 + countTulips * 4.15;
            break;
    }
    
    if (dayIsHolyday === 'Y'){
        price *= 1.15;
    }

    if (countTulips > 7 && season === "Spring"){
        price *= 0.95;
    }else if (countRoses >= 10 && season === "Winter"){
        price *= 0.90;

    } 
    if (totalFlowers > 20){
        price *= 0.80;
    }
    price += 2;
    console.log(price.toFixed(2));
}
flowers(["10","10","10","Autumn","N"])