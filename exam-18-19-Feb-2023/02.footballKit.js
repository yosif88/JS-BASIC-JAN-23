function footballKit(args) {
    let priceTshirt = Number(args[0]);
    let amountToReach = Number(args[1]);

    let priceShort = priceTshirt * 0.75;
    let priceSocks = priceShort * 0.20;
    let priceButtons = (priceShort + priceTshirt ) * 2;

    let totalSum =( priceButtons + priceShort + priceSocks + priceTshirt) * 0.85;
    
    if (totalSum >= amountToReach){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);
    }else{
        let moneyNeeded = amountToReach - totalSum;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`);
    }

}

footballKit(["59.99",
"500"])