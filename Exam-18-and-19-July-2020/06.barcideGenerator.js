function barcodeGenerator(args) {
    let start = Number(args[0]);
    let end = Number(args[1]);

    let startDigit1 = Math.trunc(start / 1000);
    let startDigit2 = Math.trunc((start / 100) % 10);
    let startDigit3 = Math.trunc((start / 10) % 10);
    let startDigit4 = start % 10;

    let endDigit1 = Math.trunc(end / 1000);
    let endDigit2 = Math.trunc((end / 100) % 10);
    let endDigit3 = Math.trunc((end / 10) % 10);
    let endDigit4 = end % 10;

    let result = '';

    for (let a = startDigit1; a <= endDigit1; a++){
        for (let b = startDigit2; b <= endDigit2; b++){
            for (let c = startDigit3; c <= endDigit3; c++){
                for (let d = startDigit4; d <= endDigit4; d++){
                    if(a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
                        result += `${a}${b}${c}${d} `
                    }
                }
            }
        }
    }
    console.log(result);


}



barcideGenerator(["2345",
    "6789"])
