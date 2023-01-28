function matchTickets(args){
    let budget = Number(args[0]);
    let ticketType =  args[1];
    let numberOfPeople = Number(args[2]);

    let vip = 499.99;
    let normal = 249.99;
    let sumOfTicket = 0
    

    switch(ticketType){
        case "Normal":
            sumOfTicket = normal * numberOfPeople;
            break;
        case "VIP":
            sumOfTicket =  vip * numberOfPeople;

        }      

    if(numberOfPeople < 5){
        budget *= 0.25;
    }else if ( numberOfPeople < 10){
        budget *= 0.40;
    }else if (numberOfPeople < 25){
        budget *= 0.50;

    }else if (numberOfPeople < 50){
        budget *= 0.60;
    }else{
        budget *= 0.75;
    }

    if (budget >= sumOfTicket){
        let sumLeft = budget - sumOfTicket;
        console.log(`Yes! You have ${sumLeft.toFixed(2)} leva left.`);
    }else{
        let neededSum = sumOfTicket - budget;
        console.log(`Not enough money! You need ${neededSum.toFixed(2)} leva.`);
    }
}
matchTickets(["30000","VIP","49"])