function mountainRun(args) {
    let recordSecond = Number(args[0]);
    let distanceMeters = Number(args[1]);
    let secontTime = Number(args[2]);

    let totalDistance = distanceMeters * secontTime;

    let delay = Math.floor(distanceMeters/ 50) * 30;
    totalDistance += delay;
    
    if (totalDistance >= recordSecond){
        let neededSecond =totalDistance - recordSecond;
        console.log(`No! He was ${neededSecond.toFixed(2)} seconds slower.`);
    }else{
        console.log(` Yes! The new record is ${totalDistance.toFixed(2)} seconds.`);

    }

}

mountainRun(["1377",
"389",
"3"])