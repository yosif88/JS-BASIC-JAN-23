function tennisRanklist(args){

    let numberOfTournaments= Number(args[0]);
    let startingPoints = Number(args[1]);

    let points = 0;
    let countWin = 0;

    for (i = 2; i <= numberOfTournaments + 1; i++){
        let currentTournament = args[i];
        
        switch(currentTournament){
            case "W": points += 2000; countWin++;break;
            case "F": points += 1200;break;
            case "SF": points += 720; break;
        }
    }
    let totalPoint = points + startingPoints;
    console.log(`Final points: ${totalPoint}`);

    let avgPoints = Math.floor(points/numberOfTournaments);
    console.log(`Average points: ${avgPoints}`);

    let percentWin = (countWin / numberOfTournaments)* 100;
    console.log(`${percentWin.toFixed(2)}%`);
} 

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])