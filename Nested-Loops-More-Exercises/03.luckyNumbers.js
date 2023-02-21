function luckyNumbers(args) {
    let n = Number(args[0]);
    let result = '';

    for (let a = 1; a <= 9; a++) {
        let sumOne = 0;
        let sumTwo = 0;
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    sumOne = a + b;
                    sumTwo = c + d;
                    if (n % sumOne === 0 && n % sumTwo === 0 && sumOne === sumTwo) {
                        result += `${a}${b}${c}${d} `

                    }
                }
            }
        }

    }
    console.log(result);
}


luckyNumbers([
    "24"
])