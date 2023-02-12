function agencyProfit(args){
    let airlineName = args[0];
    let numberOfTicketsAdults = Number(args[1]);
    let numberOfChildrenTicket = Number(args[2]);
    let netPricePerAdultTicket = Number(args[3]);
    let priceOfServiceCharge = Number(args[4]);

    let netPriceKids = netPricePerAdultTicket * 0.30;
    let priceAdultAndNetPrice = netPricePerAdultTicket + priceOfServiceCharge;
    let childTicketPriceService = netPriceKids + priceOfServiceCharge;
    
    let totalPriceOfAllTickets =(numberOfTicketsAdults * priceAdultAndNetPrice) + (childTicketPriceService * numberOfChildrenTicket);
    totalPriceOfAllTickets *= 0.20;
    
    console.log(`The profit of your agency from ${airlineName} tickets is ${totalPriceOfAllTickets.toFixed(2)} lv.`);
    
    
}
agencyProfit([
    "WizzAir",
 15,
  5,
120,
 40,
])