function footballTournament(args) {
    let index = 0;

    let footballTeam = args[index];
    index++;

    let countMatches = Number(args[index]);
    index++;

    let winCount = 0;
    let doubleCount = 0;
    let lostCount = 0;

    for (let i = 0; i < countMatches; i++) {
        let cmd = args[index];
        index++;

        switch (cmd) {
            case "W": winCount++; break;
            case "D": doubleCount++; break;
            case "L": lostCount++; break;
        }
    }
    let winPoints = winCount * 3;
    let doublePoints = doubleCount * 1;
    let totalPoints = winPoints + doublePoints;
    let percentWinGames = winCount / countMatches * 100;
    
    if (countMatches === 0) {
        console.log(`${footballTeam} hasn't played any games during this season.`);
    } else {
        console.log(`${footballTeam} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${winCount}`);
        console.log(`## D: ${doubleCount}`);
        console.log(`## L: ${lostCount}`);
        console.log(`Win rate: ${percentWinGames.toFixed(2)}%`);
    }


}

footballTournament(["Chelsea",
"0"])