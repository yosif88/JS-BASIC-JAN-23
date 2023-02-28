function darts(args) {
    let index = 0;
    let score = 301;

    let player = args[index];
    index++;

    let cmd = args[index];
    index++;

    let shots = 0;
    let failedShots = 0;

    while (cmd !== 'Retire') {
        let field = cmd;
        let point = Number(args[index]);
        index++;
        if (field === 'Single'){
            if (score < point){
                cmd = args[index];
                index++;
                failedShots++;
                continue;
            }
            score -= point
            shots++;
        }else if(field === 'Double'){
            p = point * 2;
            if (score < p){
                failedShots++;
                cmd = args[index];
                index++;
                continue;
            }
            score -= p;
            shots++;
        }else {
            p = point * 3;
            if (score < p){
                failedShots++;
                cmd = args[index];
                index++;
                continue;
            }
            score -= p;
            shots++;
        }
        if (score <= 0){
            console.log(`${player} won the leg with ${shots} shots.`);
            break;
        }
        cmd = args[index];
        index++;
    }
    if (cmd === 'Retire'){
        console.log(`${player} retired after ${failedShots} unsuccessful shots.`);
    }

}

darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])
