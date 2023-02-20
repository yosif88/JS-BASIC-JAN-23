function santasHoliday(args) {
    let daysToStay = Number(args[0]);
    let roomType = args[1];
    let grade = args[2];

    let numberOfNights = daysToStay - 1;
    let price = 0
    switch (roomType) {
        case "room for one person":
            price = numberOfNights * 18;
            break;
        case "apartment":

            price = 25 * numberOfNights;
            if (daysToStay <= 10) {
                price *= 0.70;
            } else if (daysToStay <= 15) {
                price *= 0.65;
            } else {
                price *= 0.50;
            }
            break;
        case "president apartment":
            price = 35 * numberOfNights;
            if (daysToStay <= 10) {
                price *= 0.90;
            }else if (daysToStay <= 15){
                price *= 0.85;
            }else{
                price *= 0.80;
            }
            break;

    }

    if (grade === 'positive'){
        price *= 1.25;
    }else{
        price *= 0.90;
    }
    console.log(price.toFixed(2));

}

santasHoliday(["2",
"apartment",
"positive"])