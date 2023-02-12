function balls(args) {
    let index = 0;

    let ballsCount = Number(args[index]);
    index++;

    let command = args[index];
    index++;

    let score = 0;
    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let blackCount = 0;
    let otherCount = 0;

    for (let i = 0; i < ballsCount; i++) {
        switch (command) {
            case "red": score += 5; redCount++; break;
            case "orange": score += 10; orangeCount++; break;
            case "yellow": score += 15; yellowCount++; break;
            case "white": score += 20; whiteCount++; break;
            case "black": score=Math.floor(score / 2); blackCount++; break;
            default: otherCount++; break;

        }
        command = args[index];
        index++;
    }
    console.log(`Total points: ${score}`);
    console.log(`Red balls: ${redCount}`);
    console.log(`Orange balls: ${orangeCount}`);
    console.log(`Yellow balls: ${yellowCount}`);
    console.log(`White balls: ${whiteCount}`);
    console.log(`Other colors picked: ${otherCount}`);
    console.log(`Divides from black balls: ${blackCount}`);



}

balls([
    "10",
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black"])