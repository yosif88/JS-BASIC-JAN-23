function primePairs(args) {

    let startFirstPair = Number(args[0]);
    let startSecondPair = Number(args[1]);
    let endFirsPair = Number(args[2]);
    let endSecondPair = Number(args[3]);

    let res = '';



    for (let a = startFirstPair; a <= startFirstPair + endFirsPair; a++) {
        for (let b = startSecondPair; b <= startSecondPair + endSecondPair; b++) {
            let isPrimeOne = true;
            let isPrimeTwo = true;

            if (a < 2) {
                isPrimeOne = false;
            }
            if (b < 2) {
                isPrimeTwo = false;
            }

            let first1 = Math.floor(Math.sqrt(a));
            let first2 =Math.floor(Math.sqrt(b));

            for (let first = 2; first <= first1; first++) {
                if (a % first === 0) {
                    isPrimeOne = false;
                    break;
                }

            }
            for (let second = 2; second <= first2; second++) {
                if (b % second === 0) {
                    isPrimeTwo = false;
                    break;
                }
            }

            if (isPrimeOne && isPrimeTwo) {
                console.log(`${a}${b}`);
            }

        }
    }

}

primePairs([
    10,
    20,
    5,
    5
])
