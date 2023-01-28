function solve(args){
    let priceVegetables = Number(args[0]);
    let priceFruits = Number(args[1]);
    let totalKgVegetables = Number(args[2]);
    let totalKgFruits = Number(args[3]);

    let sumOfVegetables = priceVegetables * totalKgVegetables;
    let sumOfFruits = priceFruits * totalKgFruits;
    let totalSum = sumOfVegetables + sumOfFruits;
    let convertInEvro = totalSum / 1.94

    console.log(convertInEvro.toFixed(2));

}

solve(["0.194","19.4","10","10"])