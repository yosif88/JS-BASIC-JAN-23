function oscars(args) {
    let actorName = args[0];
    let academyPoints = Number(args[1]);
    let numberOfAssessors = Number(args[2]);
    let points = academyPoints;
    let isNomination = false;

    for (i = 3; i <= numberOfAssessors * 2 + 1; i+=2) {
        let score = 0;
        let nameLength = args[i].length;
        if (args[i + 1]){
            score = Number(args[i + 1]);
        }
        // ((11 * 45) / 2)
        points += ((nameLength * score) / 2)
        if (points > 1250.5) {
            isNomination = true;
            break;
        }
        
    }
    if (isNomination) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
    }else{
        let pointNeeded = 1250.5 - points;
        console.log(`Sorry, ${actorName} you need ${pointNeeded.toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
