function tennisEquipment(args) {
    let tennisRocketPrice = Number(args[0]);
    let tennisRocketCount = Number(args[1]);
    let numberOfPairsSneakers = Number(args[2]);

    let sumRocket = tennisRocketPrice * tennisRocketCount;
    let priceSnikers = (tennisRocketPrice / 6) * numberOfPairsSneakers;

    let remainingEquipment = (sumRocket + priceSnikers) * 0.20;

    let totalSum = remainingEquipment + sumRocket + priceSnikers;
    let paidDjokovic = totalSum / 8;
    let paidSponsors = totalSum * 7 / 8;
    
    console.log(`Price to be paid by Djokovic ${Math.floor(paidDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(paidSponsors)}`);

}

tennisEquipment([
    850,
    4,
    2
])