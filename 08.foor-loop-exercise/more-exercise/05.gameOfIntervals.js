function gameOfIntervals(args) {
    let move = Number(args[0]);

    let result = 0;

    let from0To9Count = 0;
    let from10To19Count = 0;
    let from20To29Count = 0;
    let from30To39Count = 0;
    let from40To50Count = 0;
    let invalidNums = 0

    for (let i = 1; i <= move; i++) {
        let currNum = Number(args[i]);
        if (currNum < 0 || currNum > 50) {
            invalidNums++;
            result /= 2;
        } else if (currNum <= 9) {
            result += currNum * 0.2;
            from0To9Count++;
        } else if (currNum <= 19) {
            result += currNum * 0.30;
            from10To19Count++;
        } else if (currNum <= 29) {
            from20To29Count++;
            result += currNum * 0.4;
        } else if (currNum <= 39) {
            from30To39Count++;
            result += 50;
        } else {
            from40To50Count++;
            result += 100;
        }
    }
    console.log(result.toFixed(2));
    let percentFro0To9= (from0To9Count / move) * 100;
    let percentFro10To19 = (from10To19Count / move) * 100;
    let percentFro20To29 = (from20To29Count / move) * 100;
    let percentFro30To39 = (from30To39Count / move) * 100;
    let percentFro40To50 = (from40To50Count / move) * 100;
    let percentInvalidNum = (invalidNums / move) * 100;

    console.log(`From 0 to 9: ${percentFro0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentFro10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentFro20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentFro30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentFro40To50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentInvalidNum.toFixed(2)}%`);
}
   


gameOfIntervals([
    3,
    12,
    -23,
    46,
])