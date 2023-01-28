function hotelRoom(params){
    let month = params[0];
    let countNight = Number(params[1]);
    let priceApartment = 0;
    let priceStudio = 0;

    if (month === 'May' || month == 'October'){
            priceStudio = 50 * countNight;
            priceApartment = 65 * countNight;
            if (countNight > 14 ){
                priceStudio *= 0.7 
                priceApartment *=0.9 ;
            }else if ( countNight > 7) {
                priceStudio *= 0.95
            }
    }else if (month === 'June' || month === 'September'){
            priceApartment = 68.70 * countNight;
            priceStudio = 75.20 * countNight;
            
            if (countNight > 14){
                priceApartment *= 0.90;
                priceStudio *= 0.80;
            }


    }else if (month === 'July' || month === 'August'){
            priceApartment = 77 * countNight;
            priceStudio = 76 * countNight;

            if (countNight > 14){
                priceApartment *= 0.90;
            }
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
  
hotelRoom(["August",
"20"])