function sumSecond(args) {
    let firstTime = Number(args[0]);
    let secondTime = Number(args[1]);
    let thirdTime = Number(args[2]);

    let totalTime = firstTime + secondTime + thirdTime;
    let minute = Math.floor(totalTime / 60);
    let second = totalTime % 60;


    if (second < 10) {
        console.log(` ${minute}:0${second}`);
    } else {
        console.log(` ${minute}:${second}`);
    }
}
sumSecond(["35", "45", "44"])
sumSecond(["22", "7", "34"])

