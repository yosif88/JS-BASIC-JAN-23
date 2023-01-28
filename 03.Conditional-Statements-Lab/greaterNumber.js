function greaterNumber(args) {
    let numberOne = Number(args[0]);
    let numberTwo = Number(args[1]);

    if (numberOne > numberTwo) {
        console.log(numberOne);

    } else {
        console.log(numberTwo);
    }

}
greaterNumber(["5", "3"])
greaterNumber(["3", "5"])
greaterNumber(["10", "10"])
greaterNumber(["-5", "5"])