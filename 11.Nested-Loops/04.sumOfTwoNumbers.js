function sumOfTwoNumbers(args) {
    let start = Number(args[0]);
    let end = Number(args[1]);
    let magicNumber = Number(args[2]);

    let counter = 0;
    let isMagic = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let result = x + y;
            counter++;
            if (result === magicNumber) {
                isMagic = true;
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                break;
            }

        }
        if (isMagic) {
            break;
        }

    }
    if (!isMagic) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["88",
"888",
"2000"])