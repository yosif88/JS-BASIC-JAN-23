function wordSwimmingRecord(params) {
    let wordRecord = Number(params[0]);
    let distance = Number(params[1]);
    let timePerMeter = Number(params[2]);

    let timeDistance = distance * timePerMeter;
    let delayTime = Math.floor(distance / 15) * 12.5;
    let totalTime = timeDistance + delayTime;

    if (wordRecord > totalTime){
        console.log(` Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else{
        let neededTime = totalTime - wordRecord;
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`);
    }


}

wordSwimmingRecord(["55555.67",
"3017",
"5.03"])