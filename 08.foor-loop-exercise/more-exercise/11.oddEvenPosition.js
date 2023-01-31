function oddEvenPosition(args) {
    let n = Number(args[0]);

    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n; i++) {
        let nums = Number(args[i]);
        if (i % 2 == 0) {
            evenSum += nums;
            if (nums > evenMax) {
                evenMax = nums;
            } 
            if (evenMin > nums){
                evenMin = nums
            }

        } else {
            oddSum += nums;
            if (nums > oddMax) {
                oddMax = nums;
            } 
            if (oddMin > nums){
                oddMin = nums
            }
        }
    }
    if (oddSum === 0){
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log("OddMin=No,");
        console.log("OddMax=No,");
    }else{
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    if (evenSum === 0){
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log("EvenMin=No,");
        console.log("EvenMax=No");

    }else{
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
       console.log(`EvenMin=${evenMin.toFixed(2)},`);
       console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}


oddEvenPosition([
6,
2,
3,
5,
4,
2,
1,
])