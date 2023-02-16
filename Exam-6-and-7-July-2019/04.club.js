function club(args) {
    let index = 0;
    
    let desiredProfit = Number(args[index]);
    index++;

    let cmd = args[index];
    index++;
    let sum = 0;
    let isTargetAcquired = false;

    while (cmd !== 'Party!'){
        let nameCocktail = cmd;
     
        let cocktailCount = Number(args[index]);
        index++;

        let currentSum = 0;
        
        let cocktailLength = nameCocktail.length;

        currentSum += cocktailCount * cocktailLength;
        if (currentSum % 2 != 0){
            currentSum *= 0.75;
            sum += currentSum;
        }else{
            sum+= currentSum;
        }

        if (sum >= desiredProfit){
            isTargetAcquired = true;
            break;
        }

        cmd = args[index];
        index++;

    }
    if (isTargetAcquired){
        console.log('Target acquired.');
    }else{
        let moneyNeeded = desiredProfit - sum;
        console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${sum.toFixed(2)} leva.`);

}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])