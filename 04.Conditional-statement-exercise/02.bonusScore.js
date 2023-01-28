function bonusScore(args) {
    let nums = Number(args[0]);
    let score = 0;

    if (nums <= 100) {
        score = 5;

    } else if (nums > 1000) {
        score = nums * 1.1;
    } else {
        score = nums * 1.2;
    }

    if (nums % 2 == 0) {
        score += 1
    } else if (nums % 10 == 5) {
        score += 2


    }

    totalSum = nums + score;
    console.log(score);
    console.log(totalSum)

}
bonusScore(["20"])