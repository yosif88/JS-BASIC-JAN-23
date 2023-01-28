function skiTrip(args){
    let day = Number(args[0]);
    let typeRoom = args[1];
    let grade = args[2];
    let price = 0;
    let countNight = day - 1;

    switch(typeRoom){
        case "room for one person":
            price = 18 * countNight;
            break;
        
        case "apartment":
            price = 25 * countNight;
            if (day < 10){
                price *= 0.70;
            }else if (day < 15){
                price *= 0.65;
            }else {
                price *= 0.50;
            }
            break;
        
        case "president apartment":
            price = 35 * countNight;
            if (day < 10){
                price *= 0.90;
            }else if (day < 15){
                price *= 0.85;
            }else {
                price *= 0.80;
            }
            break;
    }
    if (grade === 'positive'){
        price *= 1.25;
    }else {
        price *= 0.9;
    }

    console.log(price.toFixed(2));

}


skiTrip(["2",
"apartment",
"positive"])