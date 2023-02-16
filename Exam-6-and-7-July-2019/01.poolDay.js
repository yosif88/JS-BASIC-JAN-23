function poolDay(params) {

    let numberOfPeople = Number(params[0]);
    let gateMoney = Number(params[1]);
    let priceOnePerSunLounger = Number(params[2]);
    let priceForOneUmbrella = Number(params[3]);

    let sumOfAllPeople = numberOfPeople * gateMoney;
    let sumOfSunLonger = Math.ceil(numberOfPeople * 0.75) * priceOnePerSunLounger;
    let sumOfUmbrella = Math.ceil(numberOfPeople * 0.5) * priceForOneUmbrella;

    let totalSum = sumOfAllPeople + sumOfSunLonger + sumOfUmbrella;

    console.log(`${totalSum.toFixed(2)} lv.`);

}

poolDay(["100",
"8",
"6",
"4"])