function easterParty(args) {
    let numberOfGuests = Number(args[0]);
    let priceEnvelopePerPerson = Number(args[1]);
    let budget = Number(args[2]);
    
    let priceCake = budget * 0.10;

    let price = 0;
    
   

    if ( 10 <= numberOfGuests && numberOfGuests <= 15){
        price = numberOfGuests * (priceEnvelopePerPerson * 0.85);
       
    }else if (15 <= numberOfGuests && numberOfGuests <= 20){
        price = numberOfGuests *(priceEnvelopePerPerson * 0.80);
        
    }else if (20 <= numberOfGuests && numberOfGuests > 25){
        price =numberOfGuests * (priceEnvelopePerPerson * 0.75);
    }else{
        price = numberOfGuests * priceEnvelopePerPerson;
    }
    price +=  priceCake;
    

   if(budget < price){
        let moneyNeeded = price - budget;
        console.log(`No party! ${moneyNeeded.toFixed(2)} leva needed.`);
   }else{
    let moneyLeft = budget - price;
    console.log(`It is party time! ${moneyLeft.toFixed(2)} leva left.`);
   }
   
}

easterParty
(["18",
"30",
"450"])