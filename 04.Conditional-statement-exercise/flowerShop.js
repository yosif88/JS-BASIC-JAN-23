function flowerShop(args){
    let numberOfMagnolias = Number(args[0]);
    let numberOfHyacinths = Number(args[1]);
    let numberOfRoses = Number(args[2]);
    let numberOfCactus = Number(args[3]);
    let giftPrice = Number(args[4]);

    let totalSum = 3.25 * numberOfMagnolias + 4 *numberOfHyacinths + 3.50 * numberOfRoses + 8 * numberOfCactus;
    let paymentofTaxes = totalSum *0.95;

    if (paymentofTaxes >= giftPrice) {
        sumLeft = paymentofTaxes - giftPrice
        console.log(`She is left with ${Math.floor(sumLeft)} leva.`);
    }else {
        sumLeft = Math.abs(paymentofTaxes - giftPrice)
        console.log(`She will have to borrow ${Math.ceil(sumLeft)} leva.`);
    }


}
flowerShop(["2","3","5","1","50"])
flowerShop(["15","7","5","10","100"])