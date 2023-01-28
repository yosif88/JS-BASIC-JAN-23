function lunchBreak(args){
    let movieName = args[0];
    let movieLength = Number(args[1]);
    let durationOfBreak = Number(args[2]);

    let timeForLunch = durationOfBreak / 8;
    let timeToRelax = durationOfBreak / 4;
    
    let timeLeft = durationOfBreak - timeForLunch - timeToRelax;
    
    if (timeLeft >= movieLength){
        let diff = Math.ceil(timeLeft - movieLength);
        console.log(`You have enough time to watch ${movieName} and left with ${diff} minutes free time.`);
    }else{
        let timeNeeded = Math.ceil(movieLength - timeLeft)
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`);
    }
}



lunchBreak(["Teen Wolf",
"48",
"60"])