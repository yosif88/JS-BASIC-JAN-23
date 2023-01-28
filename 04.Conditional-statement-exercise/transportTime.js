function transportTime(args){
    let kilometers =  Number(args[0]);
    let days = args[1];
    
    let taxiPrice = 0;
    let taxiStartingPrice = 0.70;
    
    let busPrice = 0.09;
    let trainPrice = 0.06;

    if (kilometers < 20){
        if (days === "day"){
            taxiPrice = taxiStartingPrice + kilometers * 0.79;
            console.log(taxiPrice.toFixed(2));
        }else{
            taxiPrice = taxiStartingPrice + kilometers * 0.90;
            console.log(taxiPrice.toFixed(2));
        }
    }else if (kilometers >= 20 && kilometers < 100){
        busPrice *= kilometers;
        console.log(busPrice.toFixed(2));
    }else {
        trainPrice *= kilometers;
        console.log(trainPrice.toFixed(2));
    }
}
transportTime(["180","day"])