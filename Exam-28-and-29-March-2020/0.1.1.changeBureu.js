function changeBureu(args) {
    let bitcoin = Number(args[0]);
    let chineseYuan = Number(args[1]);
    let commission = Number(args[2]);

    let bitcoinSum = bitcoin * 1168;
    let changeDollars = chineseYuan *  0.15;
    let changeToLeve = changeDollars * 1.76

    let totalSum = (bitcoinSum + changeToLeve) / 1.95
    let commissionLeft = (totalSum * commission)/100
        totalSum -= commissionLeft;
    
        console.log(totalSum.toFixed(2));
}

changeBureu([
    "1",
    "5",
    "5"])