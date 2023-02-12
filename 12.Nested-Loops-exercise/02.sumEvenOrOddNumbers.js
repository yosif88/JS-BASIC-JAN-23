function sumEvenOrOddNumbers(args) {
    let start = Number(args[0]);
    let end = Number(args[1]);
    let res = '';

    for (let x = start; x <= end; x++) {
        let currentNum = x.toString();
        let sumEven = 0;
        let sumOdd = 0;
        for (let i = 0; i < currentNum.length; i++) {
            let currentDigit = Number(currentNum[i]);
            let position = i + 1;

            if (position % 2 === 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if (sumEven === sumOdd) {
            res += currentNum + ' '
        }
    }
    console.log(res);
}




sumEvenOrOddNumbers(["100115",
"100120"])
