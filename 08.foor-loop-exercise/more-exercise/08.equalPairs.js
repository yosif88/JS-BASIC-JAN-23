function equalPairs(args) {
    let n = Number(args[0]);
    let pair = 0;
    let diff = 0;

    for (let i = 1; i <= n * 2; i += 2) {
        let numsOne = Number(args[i]);
        let numsTwo = Number(args[i + 1]);
        let currentSum = numsOne + numsTwo;

        if (i > 1) {
            diff = Math.abs(pair - currentSum);
        }
        pair = currentSum;
    }
    if (diff === 0){
        console.log(`Yes, value=${pair}`);
    }else{
        console.log(`No, maxdiff=${diff}`);
    }


}


equalPairs([
    2,
   -1,
    0,
    0,
   -1,
    


])