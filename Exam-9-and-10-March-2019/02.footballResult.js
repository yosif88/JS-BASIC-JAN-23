function footballResult(args) {
    let resulttOfFirstMatch = args[0];
    let resulttOfSecondtMatch = args[1];
    let thirdMatchResult = args[2];

    let countWin = 0;
    let countLost = 0;
    let countDrawn = 0;

    if (Number(resulttOfFirstMatch[0]) >  Number(resulttOfFirstMatch[2])){
        countWin++;
    }else if (Number(resulttOfFirstMatch[0]) <  Number(resulttOfFirstMatch[2])){
        countLost++;
    }else{
        countDrawn++;
    }
    if (Number(resulttOfSecondtMatch[0]) > Number(resulttOfSecondtMatch[2])){
        countWin++;
    }else if (Number(resulttOfSecondtMatch[0]) < Number(resulttOfSecondtMatch[2])){
        countLost++;
    }else {
        countDrawn++;
    }

    if (Number(thirdMatchResult[0]) > Number(thirdMatchResult[2])){
        countWin++;
    }else if(Number(thirdMatchResult[0]) < Number(thirdMatchResult[2])){
        countLost++;
    }else{
        countDrawn++;
    }

    console.log(`Team won ${countWin} games.`);
    console.log(`Team lost ${countLost} games.`);
    console.log(`Drawn games: ${countDrawn}`);
}

footballResult(["0:2",
"0:1",
"3:3"])