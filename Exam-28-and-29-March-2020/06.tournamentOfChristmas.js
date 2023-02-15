function tournamentOfChristmas(args) {
    let index = 0;
    let n = Number(args[index]);
    index++;


    let winCountTournament = 0;
    let loseCountTournament = 0;
    let totalMoney = 0;

    for (let i = 0; i < n; i++) {

        let moneyWin = 0;
        let moneyLost = 0;
        let countWinPerDay = 0;
        let countLosePerDay = 0;

        cmd = args[index];
        index++;
        while (cmd !== 'Finish') {


            let winOrlose = args[index];
            index++;

            if (winOrlose === 'win') {
                moneyWin += 20;
                winCountTournament++;
                countWinPerDay++;
            } else {
                moneyLost += 0;
                loseCountTournament++;
                countLosePerDay++;
            }

            cmd = args[index];
            index++;
        }

        if (countWinPerDay > countLosePerDay) {
            moneyWin *= 1.10;


        }
        totalMoney += moneyWin;
    }
    if (winCountTournament > loseCountTournament) {
        totalMoney *= 1.20;
    }

    if (winCountTournament > loseCountTournament){
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }



}


tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])


