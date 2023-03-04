function basket(input) {
    let index =0;
    let cmd = input[index];
    index++;

 
    let countWon = 0;
    let countLost = 0;
    
    let percentWon = 0
    let percentLost = 0;
    let totalCounter= 0;

    while (cmd !== "End of tournaments") {
        let nameTournment = cmd;
       
        let countMatch = Number(input[index]);
        index++;
       
        let countGames = 0;

        for (let a = 0; a < countMatch ; a++) {
           
            countGames++;
            let countDesiTeamPoints = Number(input[index]);
            index++;

            let countOtherTeamPoints = Number(input[index]);
            

            if (countDesiTeamPoints > countOtherTeamPoints) {
                let diff = countDesiTeamPoints - countOtherTeamPoints;
                countWon++;
                flag = true;
                console.log(`Game ${countGames} of tournament ${nameTournment}: win with ${(diff)} points.`);
            }

            else {
                flag = false; 
                countLost++;
                console.log(`Game ${countGames} of tournament ${nameTournment}: lost with ${(countOtherTeamPoints - countDesiTeamPoints)} points.`);
            }
            index++;
            totalCounter++;
        }
        cmd = input[index];
        index++;
         percentWon = countWon /totalCounter * 100;
         percentLost = countLost/totalCounter * 100;
    }
    if (cmd === "End of tournaments") {
        console.log(`${percentWon.toFixed(2)}% matches win`);
        console.log(`${percentLost.toFixed(2)}% matches lost`);
    }

  

}