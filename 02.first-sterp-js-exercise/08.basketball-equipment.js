function solve(arg){    
   
    let feeForOneYear = Number(arg[0]); 
    
    let basketballSneakers = feeForOneYear * 0.60;
    let basketballOutfit = basketballSneakers * 0.80;
    let basketball = 1 /4 * basketballOutfit;
    let basketballAccessories = 1 / 5 * basketball;

    let totalSum = feeForOneYear + basketballSneakers + basketballOutfit + basketball + basketballAccessories;


    console.log(totalSum);
}

solve(["550"])