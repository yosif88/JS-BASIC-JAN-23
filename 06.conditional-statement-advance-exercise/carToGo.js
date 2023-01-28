function carToGo(args){
    let budget = Number(args[0]);
    let season = args[1];

    let carType = "";
    let classType = "";
    let price = 0
    switch (season) {
        case "Summer":
            if (budget <= 100){
                classType = "Economy class";
                carType = "Cabrio";
                price = budget * 0.35;

            }else if (budget <= 500){
                classType = "Compact class";
                carType = "Cabrio";
                price = budget * 0.45;
            }else {
                classType = "Luxury class";
                carType = "Jeep";
                price = budget * 0.90;
            }
            
            break;
        
        case "Winter":
            if (budget <= 100){
                classType = "Economy class";
                carType = "Jeep";
                price = budget * 0.65;
            }else if (budget <= 500){
                classType = "Compact class";
                carType = "Jeep";
                price = budget * 0.80;
            }else {
                classType = "Luxury class";
                carType = "Jeep";
                price = budget * 0.90;
            }
            break;
    
    }
    console.log(classType);
    console.log(`${carType} - ${price.toFixed(2)}`);

}
carToGo(["70.50", "Winter"])