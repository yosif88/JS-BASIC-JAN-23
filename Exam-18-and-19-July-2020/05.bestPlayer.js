// function bestPalyer(args) {
//     let index = 0;

//     let command = args[index];
//     index++;

//     let bestGoals = 0;
//     let isHatrick = false;
//     let name = ""

//     while (command !== 'END') {
//         let playerName = command;
//         let goals = Number(args[index]);
//         index++;

//         if (goals > bestGoals) {
//             bestGoals = goals;
//             name = playerName;
//         }
//         if (bestGoals >= 10) {
//             console.log(`${playerName} is the best player!`);
//             console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
//             isHatrick = false;
//             break;
//         } else if (bestGoals >= 3) {
//             isHatrick = true;
//         }

//         command = args[index];
//         index++;
//     }
//     if (isHatrick) {
//         console.log(`${name} is the best player!`);
//         console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
//     } else if (command === "END") {
//         console.log(`${name} is the best player!`);
//         console.log(`He has scored ${bestGoals} goals.`);
//     }

// }


function bestPalyer(args) {
    let index = 0;

    let command = args[index];
    index++;

    let bestGoals = 0;
    let name = ""

    while (command !== 'END') {
        let playerName = command;
        let goals = Number(args[index]);
        index++;

        if (goals > bestGoals) {
            bestGoals = goals;
            name = playerName;
        }
        if (bestGoals >= 10) {
            break;
        } 

        command = args[index];
        index++;
    }
    if (bestGoals >= 3) {
        console.log(`${name} is the best player!`);
        console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    } else  {
        console.log(`${name} is the best player!`);
        console.log(`He has scored ${bestGoals} goals.`);
    }

}
bestPalyer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"])
