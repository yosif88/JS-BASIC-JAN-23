function bills(args) {
    let month = Number(args[0]);
    let priceWaterPerMonth = 20;
    let priceInternetPerMonth = 15;
    
    let priceElectricity = 0;
    let priceWater = 0;
    let priceInternet = 0;
    let otherPrice = 0;

    for (i = 1; i <= month; i++){
        let electricity = Number(args[i]);
        priceElectricity += electricity;
        priceInternet = priceInternetPerMonth * month;
        priceWater = priceWaterPerMonth * month;
        otherPrice =(priceElectricity + priceInternet + priceWater) * 1.20;
    }
 
    console.log(`Electricity: ${priceElectricity.toFixed(2)} lv`);
    console.log(`Water: ${priceWater.toFixed(2)} lv`);
    console.log(`Internet: ${priceInternet.toFixed(2)} lv`);
    console.log(`Other: ${otherPrice.toFixed(2)} lv`);
    
    let totalPrice = priceElectricity + priceInternet + priceWater + otherPrice;
    let avgPrice = totalPrice / month
    console.log(`Average: ${avgPrice.toFixed(2)} lv`);
}

bills([
    5,
68.63,
89.25,
132.5,
93.53,
63.22,
])