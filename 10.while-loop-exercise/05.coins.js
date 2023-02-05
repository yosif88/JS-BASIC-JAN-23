function coins(args) {
    let totalCoin = Number(args[0]);
    let coin = Math.round(totalCoin * 100)

    let count = 0;

    while (coin > 0) {
        if (coin  >= 200) {
            coin -= 200;
            count++;
        } else if (coin >= 100) {
            coin -= 100;
            count++;
        } else if (coin >= 50) {
            coin -= 50;
            count++;
        } else if (coin >= 20) {
            coin -= 20;
            count++;
        }else if (coin >= 10){
            coin -= 10;
            count++;

        }else if (coin >= 5) {
            coin -= 5;
            count++;

        }else if (coin >= 2){
            coin -= 2;
            count++;

        }else if (coin >= 1){
            coin -= 1;
            count++;

        }
    }
    console.log(count);
}

coins(["1.23"])