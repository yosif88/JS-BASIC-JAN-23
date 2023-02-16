// function pcGameShop(args){
//     let index = 0;
    
//     let n = Number(args[index]);
//     index++;
    
//     let hearthstoneCount = 0;
//     let forniteCount = 0;
//     let overwatch = 0;
//     let othersCount = 0;

//     for (let i = 0; i < n; i++){
//         let nameGame = args[index];
//         index++;
//         switch(nameGame){
//             case "Hearthstone":hearthstoneCount++;break;
//             case "Fornite":forniteCount++;break;
//             case "Overwatch": overwatch++;break;
//             default:othersCount++;break;
//         }
    
//     }
//     let totalPercent = 100 / n;
//     let percentHearthstone =totalPercent * hearthstoneCount;
//     let percentFornite = totalPercent * forniteCount;
//     let percentOverwatch = totalPercent* overwatch;
//     let percentOthers = totalPercent * othersCount;

//     console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
//     console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
//     console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
//     console.log(`Others - ${percentOthers.toFixed(2)}%`);


// }

function pcGameShop(args){
    let index = 0;
    
    let n = Number(args[index]);
    index++;
    
    let hearthstoneCount = 0;
    let forniteCount = 0;
    let overwatch = 0;
    let othersCount = 0;

    for (let i = 0; i < n; i++){
        let nameGame = args[index];
        index++;
        switch(nameGame){
            case "Hearthstone":hearthstoneCount++;break;
            case "Fornite":forniteCount++;break;
            case "Overwatch": overwatch++;break;
            default:othersCount++;break;
        }
    
    }
    
    let percentHearthstone = hearthstoneCount / n * 100;
    let percentFornite = forniteCount / n * 100;
    let percentOverwatch = overwatch / n * 100;
    let percentOthers = othersCount / n * 100;

    console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentOthers.toFixed(2)}%`);


}
pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])