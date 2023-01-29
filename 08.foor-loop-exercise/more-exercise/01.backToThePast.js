function backToThePast(args){
    let inheritedMoney = Number(args[0]);
    let yearsToLives = Number(args[1]);
    let age = 18;

    for (let i = 1800; i <= yearsToLives; i++){
        if (i % 2 === 0){
            inheritedMoney -= 12000;
        }else{
            inheritedMoney -= 12000 + age*50;
        }
        age ++;
    }
    if (inheritedMoney >= 0){
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`);
    }else{
        console.log(`He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`);
    }
}


backToThePast(["100000.15","1808"])