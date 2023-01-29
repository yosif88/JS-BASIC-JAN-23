function cleverLily(args) {
    let age = Number(args[0]);
    let washingMachinePrice = Number(args[1]);
    let pricePerToy = Number(args[2]);

    let savedMoney = 0;
    let moneyBirdWin = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedMoney += moneyBirdWin;
            moneyBirdWin += 10;
            savedMoney -= 1;
        } else {
            savedMoney += pricePerToy;
        }
    }

    
    if (money >= washingMachinePrice) {
        let moneyLeft = money - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washingMachinePrice - money;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }

}


cleverLily(["21",
"1570.98",
"3"])