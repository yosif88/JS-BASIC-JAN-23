function excursion(args) {
    let numberOfPeople = Number(args[0]);
    let numberOfNight = Number(args[1]);
    let numberOfCardForTransport = Number(args[2]);
    let ticketsCount = Number(args[3]);
	
    let nightPrice = numberOfNight * 20;
    let cardPrice = numberOfCardForTransport * 1.60;
    let priceTicket = ticketsCount * 6;

    let totalSum = nightPrice + cardPrice + priceTicket;
    let sumAllPeople = (totalSum * numberOfPeople) * 1.25;
   
    console.log(sumAllPeople.toFixed(2));


}

excursion(["20",
    "14",
    "30",
    "6"])