function trekkingMania(args) {
    let index = 0;

    let numberOfGroups = Number(args[index]);
    index++;

    let totalPeople = 0;

    let peakMussala = 0;
    let peakMontBlanc = 0;
    let peakKilimanjaro = 0;
    let peakK2 = 0;
    let peakEverest = 0;

    for (let i = 0; i < numberOfGroups; i++) {
        let currnetGroup = Number(args[index]);
        index++;
        totalPeople += currnetGroup;

        if (currnetGroup <= 5) {
            peakMussala += currnetGroup;
        } else if (currnetGroup <= 12) {
            peakMontBlanc += currnetGroup;
        } else if (currnetGroup <= 25) {
            peakKilimanjaro += currnetGroup;
        } else if (currnetGroup <= 40) {
            peakK2 += currnetGroup;

        } else {
            peakEverest += currnetGroup;
        }

    }

    let percentageMusalaClimbers = (peakMussala / totalPeople) * 100;
    let percentageMontBlancClimbers = (peakMontBlanc / totalPeople) * 100;
    let percentageKilimanjaroClimbers = (peakKilimanjaro / totalPeople) * 100;
    let percentageK2Climbers = (peakK2 / totalPeople) * 100;
    let percentageEverestClimbers = (peakEverest / totalPeople) * 100;
    
    console.log(`${percentageMusalaClimbers.toFixed(2)}%`);
    console.log(`${percentageMontBlancClimbers.toFixed(2)}%`);
    console.log(`${percentageKilimanjaroClimbers.toFixed(2)}%`);
    console.log(`${percentageK2Climbers.toFixed(2)}%`);
    console.log(`${percentageEverestClimbers.toFixed(2)}%`);
    
}

trekkingMania([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
