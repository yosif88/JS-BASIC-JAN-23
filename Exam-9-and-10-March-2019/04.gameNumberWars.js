function gameNumberWars(args) {
    let index = 0;

    let playerOne = args[index];
    index++;

    let playerTwo = args[1];
    index++;

    let cmd = args[index];
    index++;
    let playerOnePoints = 0;
    let playerTwoPoints = 0;


    while (cmd !== 'End of game') {
        let cardOne = Number(cmd);
        let cardTwo = Number(args[index]);
        index++;

        if (cardOne > cardTwo) {
            playerOnePoints += cardOne - cardTwo;
        } else {
            playerTwoPoints += cardTwo - cardOne;
        }
        if (cardOne === cardTwo) {
            console.log('Number wars!');
            let newCardOne = Number(args[index]);
            index++;
            let newCardTwo = Number(args[index]);
            index++;
            if (newCardOne > newCardTwo) {
                playerOnePoints += cardOne - cardTwo;
                console.log(`${playerOne} is winner with ${playerOnePoints} points`);
                break;
            } else {

                playerTwoPoints += cardTwo - cardOne;
                console.log(`${playerTwo} is winner with ${playerTwoPoints} points`);
                break;
            }
        }

        cmd = args[index];
        index++;
    }

    if (cmd === 'End of game') {
        console.log(`${playerOne} has ${playerOnePoints} points`);

        console.log(`${playerTwo} has ${playerTwoPoints} points`);

    }
}

gameNumberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"])