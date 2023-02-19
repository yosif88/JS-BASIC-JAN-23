function easterGuests(args) {
    let guests = Number(args[0]);
    let budget = Number(args[1]);

    let countCake = Math.ceil(guests / 3);
    let priceCake = countCake * 4;
    let priceEggs = guests * 2 * 0.45;

    let sum = priceCake + priceEggs;

    if (sum <= budget){
        let moneyLeft = budget - sum;
        console.log(`Lyubo bought ${countCake} Easter bread and ${guests * 2} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    }else{
        let moneyNeeded = sum - budget;
        console.log('Lyubo doesn\'t have enough money.');
        console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`);
    }

   
}

easterGuests(["9",
"12"])