function nameGame(args) {
    let index = 0;

    let cmd = args[index];
    index++;
    let pointPlayer = 0;
    let winner = '';


    while (cmd !== 'Stop') {
        let name = cmd;
        let currentSum = 0;
        for (let i = 0; i < name.length; i++) {
            let nums = Number(args[index]);
            let currentChar = name.charCodeAt(i);

            if (currentChar === nums) {
                currentSum += 10;
            } else {
                currentSum += 2;
            }
            index++;
        }

        if (currentSum >= pointPlayer) {
            pointPlayer = currentSum;
            winner = name;
        }
        cmd = args[index];
        index++;
    }
   
    console.log(`The winner is ${winner} with ${pointPlayer} points!`);    

}

nameGame
(["Ivan",
"73",
"20",
"98",
"110",
"Ivo",
"80",
"65",
"87",
"Stop"])