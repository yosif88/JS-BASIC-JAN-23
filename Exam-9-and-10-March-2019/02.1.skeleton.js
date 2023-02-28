function skeleton(args){

    let minutesOfControl = Number(args[0]);
    let secondOfControl = Number(args[1]);
    let lengthOfChuteInMeters = Number(args[2]);
    let secondsToWalk100Meters = Number(args[3]);

    let calculateControlToSecond = 60 * minutesOfControl + secondOfControl;
    let calculateTimeDecreased = lengthOfChuteInMeters / 120;
    let totalTimeDecreased = calculateTimeDecreased * 2.5;

    let timePlayer = (lengthOfChuteInMeters / 100) * secondsToWalk100Meters - totalTimeDecreased;

    if (timePlayer <= calculateControlToSecond){
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timePlayer.toFixed(3)}.`);
    }else{
        let secondNeeded = timePlayer - calculateControlToSecond;
        console.log(`No, Marin failed! He was ${secondNeeded.toFixed(3)} second slower.`);
    }

}

skeleton(["1",
"20",
"1546",
"12"])