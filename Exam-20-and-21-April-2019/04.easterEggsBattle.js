// function easterEggsBattles(args) {
//     let index = 0;

//     let playerOne = Number(args[index]);
//     index++;

//     let playerTwo = Number(args[index]);
//     index++;

//     let cmd = args[index];
//     index++;

//     while (cmd !== 'End') {
//         let eggs = cmd;

//         if (playerOne <= 0 || playerTwo <= 0) {
//             break;
//         }

//         switch (eggs) {
//             case 'one':
//                 playerTwo -= 1;
//                 break;

//             case 'two':
//                 playerOne -= 1;
//                 break;
//         }

//         cmd = args[index];
//         index++;
//     }

//     if (cmd === 'End'){
//         console.log(`Player one has ${playerOne} eggs left.`);
//         console.log(`Player two has ${playerTwo} eggs left.`);
//     }else{
//         if (playerOne <= 0){
//             console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
//         }else{
//             console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
//         }
//     }

    
// }


function easterEggsBattles(args) {
    let index = 0;

    let playerOne = Number(args[index]);
    index++;

    let playerTwo = Number(args[index]);
    index++;

    let cmd = args[index];
    index++;

    while (cmd !== 'End') {
        let eggs = cmd;

        if (playerOne <= 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
            break;
        }
        if (playerTwo <= 0){
            console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
            break;
        }

        switch (eggs) {
            case 'one':
                playerTwo -= 1;
                break;

            case 'two':
                playerOne -= 1;
                break;
        }

        cmd = args[index];
        index++;
    }

    if (cmd === 'End'){
        console.log(`Player one has ${playerOne} eggs left.`);
        console.log(`Player two has ${playerTwo} eggs left.`);

    }

    
}

easterEggsBattles([
'2',
'6',
'one',
'two',
'two',
])