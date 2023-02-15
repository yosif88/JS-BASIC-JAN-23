function fitnessCard(args) {
    let budget = Number(args[0]);
    let gender = args[1];
    let age = Number(args[2]);
    let sport = args[3];

    let price = 0;

    if (gender === 'm') {
        switch (sport) {
            case "Gym": price = 42; break;
            case "Boxing": price = 41; break;
            case "Yoga": price = 45; break;
            case "Zumba": price = 34; break;
            case "Dances": price = 51; break;
            case "Pilates": price = 39; break;

        }

    } else {
        switch (sport) {
            case "Gym": price = 35; break;
            case "Boxing": price = 37; break;
            case "Yoga": price = 42; break;
            case "Zumba": price = 31; break;
            case "Dances": price = 53; break;
            case "Pilates": price = 37; break;
        }
    }

    if (age <= 19){
        price *= 0.80;
    }

    if (budget >= price){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }else{
        let money = price - budget;
        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
    }

}

fitnessCard(["10",
"m",
"50",
"Pilates"])
