function shopping(args){
    let budget = Number(args[0]);
    let vgaCount = Number(args[1]);
    let cpuCount = Number(args[2]);
    let ramCount = Number(args[3]);

    let vgaPrice = vgaCount * 250;
    let cpuPrice = cpuCount * (vgaPrice * 0.35);
    let ramPrice = ramCount * (vgaPrice * 0.10);

    let totalSum = vgaPrice + cpuPrice + ramPrice;
   
    if (vgaCount > cpuCount){
        totalSum *= 0.85;
    }

    if (budget >= totalSum){
        let budgetLeft = budget - totalSum
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`);
    }else{
        let neededMoney = Math.abs(budget - totalSum);
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
    }
}
shopping(["920.45",
"3",
"1",
"1"])