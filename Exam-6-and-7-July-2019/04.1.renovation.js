function renovation(args) {
    let index = 0;

    let heigth = Number(args[index]);
    index++;

    let width = Number(args[index]);
    index++;

    let percentageOfTotalArea = Number(args[index]) / 100;
    index++;
    

    let area = width * heigth * 4 * 1;
    let totalPainArea = Math.ceil(area - (area * percentageOfTotalArea));

    let cmd = args[index];
    index++;

    let isPain = false;

    while (cmd !== 'Tired!') {
        let pain = Number(cmd);

        totalPainArea -= pain;
        if (totalPainArea <= 0) {
            break;
        }
        
        cmd = args[index];
        index++;
    }
    if (totalPainArea === 0) {
        console.log('All walls are painted! Great job, Pesho!');
        
    }else if (totalPainArea > 0) {
        console.log(`${totalPainArea} quadratic m left.`);
    } else {
        let painLeft = Math.abs(totalPainArea);
        console.log(`All walls are painted and you have ${painLeft} l paint left!`);
    }
}

renovation(["3",
"5",
"10",
"2",
"3",
"4",
"Tired!"])