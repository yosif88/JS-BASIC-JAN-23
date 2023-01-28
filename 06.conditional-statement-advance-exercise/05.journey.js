function journey(params){
    let budget = Number(params[0]);
    let season = params[1];

    let destination = '';
    let vacationType = '';
    let price = 0;

   if (budget <= 100){
        destination = 'Bulgaria';
        switch(season){
            case "summer":
                vacationType = "Camp";
                price = budget * 0.3;
                break;
            case 'winter':
                vacationType = "Hotel";
                price = budget * 0.70;
                break

        }
   }else if (budget <= 1000){
        destination = 'Balkans';
        switch(season){
            case "summer":
                price = budget * 0.4;
                vacationType = 'Camp';
                break;
           case 'winter':
                price = budget  * 0.8;
                vacationType = 'Hotel'; 
                break
   
            }
   }else {
        destination = "Europe";
        vacationType = "Hotel";
        price = budget * 0.9;
   }
   console.log(`Somewhere in ${destination}`);
   console.log(`${vacationType} - ${price.toFixed(2)}`);
    
}
journey(["1500", "summer"])

