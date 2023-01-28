function invalidNumber(args) {
    let nums = Number(args[0]);
    let isValid = nums >= 100 && nums <= 200 || nums == 0;

    if (!isValid) {
        console.log("invalid");
    }
}


invalidNumber(["75"])