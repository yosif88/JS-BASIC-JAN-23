function worldSnookerChampionship(args){
    let championship = args[0];
    let ticketType = args[1];
    let ticketCount = Number(args[2]);
    let photoWithTheTrophy = args[3];

    let price = 0;
    let isPhoto = false;

    switch(ticketType){
        case "Standard":
            switch(championship){
                case "Quarter final":
                    price = 55.50;
                    break;
                case "Semi final":
                    price = 75.88;
                    break;
                case "Final":
                    price = 110.10;
                    break;
            }
            break;
        
        case "Premium":
            switch(championship){
                case "Quarter final":
                    price = 105.20;
                    break;
                case "Semi final":
                    price = 125.22;
                    break;
                case "Final":
                    price = 160.66;
                    break;
            }
            break;
        
        case "VIP":
            switch(championship){
                case "Quarter final":
                    price = 118.90;
                    break;
                case "Semi final":
                    price = 300.40;
                    break;
                case "Final":
                    price = 400;
                    break;
            }
            break;
    }
    price *= ticketCount;
    
    if (price  > 4000 ){
        isPhoto = true;
        price *= 0.75;

    }else if (price  > 2500){
        price *=  0.9;
    }
    if (photoWithTheTrophy === 'Y' ) {
        let sum = 40 * ticketCount;
        price += sum;
        if (isPhoto){
            price -= sum;
        }
    }   

   console.log(price.toFixed(2));


}
worldSnookerChampionship(["Quarter final",
"Standard",
"11",
"N"])