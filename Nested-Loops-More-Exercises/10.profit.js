function profit(args){
    let coinsOneLv = Number(args[0]);
    let coinsTwoLv = Number(args[1]);
    let coinsFiveLv = Number(args[2]);
    let sum = Number(args[3]);

    for (let a = 0; a <= coinsOneLv; a ++){
        let currentSum = 0;
        for (let b = 0; b <= coinsTwoLv; b++){
            for (let c = 0; c <= coinsFiveLv; c++){
                currentSum = (a * 1) + (b * 2) + (c *5);
                if (currentSum === sum){
                    console.log(`${a} * 1 lv. + ${b} * 2 lv. + ${c} * 5 lv. = ${currentSum} lv.`);
                }
            }
        }
    }

}

profit([5,
    3,
    1,
    7])