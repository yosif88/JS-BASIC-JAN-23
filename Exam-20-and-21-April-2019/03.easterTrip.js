function easterTrip(args) {
    let destination = args[0];
    let dates = args[1];
    let nightCount = Number(args[2]);

    let price = 0;

    switch(destination){
        case "France":
            switch(dates){
                case "21-23":
                    price= 30;
                    break
                case '24-27':
                    price = 35;
                    break;
                case '28-31':
                    price = 40;
                    break;
            }
            break;
        case "Italy":
            switch(dates){
                case "21-23":
                    price= 28;
                    break
                case '24-27':
                    price = 32;
                    break;
                case '28-31':
                    price = 39;
                    break;
            }
            break;
        case "Germany":
            switch(dates){
                case "21-23":
                    price= 32;
                    break
                case '24-27':
                    price = 37;
                    break;
                case '28-31':
                    price = 43;
                    break;
            }
            break;
        
        }
    price *= nightCount;

    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}


easterTrip(["France",
"28-31",
"8"])