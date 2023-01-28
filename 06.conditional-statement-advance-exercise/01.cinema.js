function cinema(args){
    let projectionType = args[0];
    let rows = Number(args[1]);
    let cols = Number(args[2]);

    let totalPlaces = rows * cols;
    let price = 0;

    switch(projectionType){
        case "Premiere":
            price = totalPlaces * 12;
            break;

        case "Normal":
            price = totalPlaces * 7.50;
            break;
        
        case "Discount":
            price = totalPlaces * 5;
            break;
    }
    console.log(`${price.toFixed(2)} leva`);
}


cinema(["Premiere",
"10",
"12"])