function travelAgency(args) {
    let destination = args[0];
    let packageType = args[1];
    let vipDiscount = args[2];
    let daysToStay = Number(args[3]);

    let price = 0;

    if (daysToStay > 7) {
        daysToStay--;
    }
    if (daysToStay <= 0) {
        console.log('Days must be positive number!');
    } else {

        switch (destination) {
            case "Bansko":
            case "Borovets":
                switch (packageType) {
                    case "noEquipment":
                        price = daysToStay * 80;
                        if (vipDiscount === 'yes') {
                            price *= 0.95;
                        }
                        break;
                    case "withEquipment":
                        price = daysToStay * 100;
                        if (vipDiscount === 'yes') {
                            price *= 0.90;
                        }
                        break;
                    default:
                        console.log('Invalid input!');
                        break;
                }
                break;

            case "Varna":
            case "Burgas":
                switch (packageType) {

                    case "withBreakfast":
                        price = daysToStay * 130;
                        if (vipDiscount === 'yes') {
                            price *= 0.88;
                        }
                        break;

                    case "noBreakfast":
                        price = daysToStay * 100;
                        if (vipDiscount === 'yes') {
                            price *= 0.93;
                        }
                        break;
                    default:
                        console.log('Invalid input!');
                        break;
                }
                break;
            default:
                console.log('Invalid input!');
                break;
        }
        
    }
    if (price > 0){
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }

    


}


travelAgency(["Varna",
"withBreakfast",
"no",
"0"])