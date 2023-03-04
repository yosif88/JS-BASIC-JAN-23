function fitnessCenter(args){
    let index = 0;
    
    let visitors = Number(args[index]);
    index++;
    
    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let proteinShakeCount = 0;
    let proteinBarCount = 0;

    for(let i= 0; i < visitors; i++){
        let fitnessActivity = args[index];
        index++;
        switch(fitnessActivity){
            case "Back":
                backCount++;
                break;
            case "Chest":
                chestCount++;
                break;
            case "Legs":
                legsCount++;
                break;
            case 'Abs':
                absCount++;
                break;
            case "Protein shake":
                proteinShakeCount++;
                break;
            case "Protein bar":
                proteinBarCount++;
                break;
        }

    }
    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${proteinShakeCount} - protein shake`);
    console.log(`${proteinBarCount} - protein bar`);

    let percentWorkOut = (backCount + chestCount + legsCount + absCount)/ visitors * 100;
    console.log(`${percentWorkOut.toFixed(2)}% - work out`);

    let percentProtein= (proteinBarCount + proteinShakeCount) / visitors * 100;
    console.log(`${percentProtein.toFixed(2)}% - protein`);
}

fitnessCenter(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])