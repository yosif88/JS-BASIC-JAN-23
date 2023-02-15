function birthdayParty(args){

    let hallRent = Number(args);
    let priceCake = hallRent * 0.20;
    let priceDrinks = priceCake * 0.55;
    let priceAnimator = hallRent / 3;

    let totalPrice =hallRent+ priceCake + priceDrinks + priceAnimator;
    console.log(totalPrice);

}


birthdayParty(["3720"])