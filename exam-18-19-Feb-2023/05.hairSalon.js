function hairSalon(args) {
    let index = 0;

    let goalForDay = Number(args[index]);
    index++;

    let cmd = args[index];
    index++;

    let price = 0;

    while (cmd !== 'closed') {
        let services = cmd;
     

        if (services === 'haircut') {
            let haircutType = args[index];
            switch (haircutType) {
                case "mens": price += 15; break;
                case "ladies": price += 20; break;
                case "kids": price += 10; break;
            }
            index++;
        } else {
            let haircutType = args[index];
            switch (haircutType) {
                case "touch up": price += 20; break;
                case "full color": price += 30; break;

            }
            index++;
        }
        if (price >= goalForDay){
            break;
        }

        cmd = args[index];
        index++;
    }
    if (price >= goalForDay){
        console.log("You have reached your target for the day!" );
    }else{
        let moneyNeeded = goalForDay- price;
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
    }
    console.log(`Earned money: ${price}lv.`);

}

hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])