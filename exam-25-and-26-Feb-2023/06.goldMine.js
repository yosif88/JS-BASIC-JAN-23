function goldMine(args) {
    let index = 0;
    let locations = Number(args[index]);
    index++;

    for (let i = 0; i < locations; i++) {
        let goldYeild = Number(args[index])
        let averageYeild = 0;
        index++;
        let days = Number(args[index]);
        index++;
        for (let j = 0; j < days; j++) {
            gold = Number(args[index]);
            index++;
            averageYeild += gold;

        }
        averageYeild /= days;
        if (goldYeild <= averageYeild) {
            console.log(`Good job! Average gold per day: ${averageYeild.toFixed(2)}.`);
        } else {
            let neededGold = goldYeild - averageYeild;
            console.log(`You need ${neededGold.toFixed(2)} gold.`);
        }
    }

   
}

goldMine(["1",
"5",
"3",
"10",
"1",
"3"])
