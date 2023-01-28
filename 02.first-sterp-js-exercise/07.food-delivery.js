function solve(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegetable = Number(input[2]);
    
    let sumChicken = chicken * 10.35;
    let sumFish = fish * 12.40;
    let sumVegetable = vegetable * 8.15;
    let sumOfMenus = sumChicken + sumFish + sumVegetable;
    let desert = sumOfMenus * 0.20;
    let totalSum = sumOfMenus + desert + 2.50;

    console.log(totalSum);
}

solve(["2","4","3"])
solve(["9 ","2 ","6 "])