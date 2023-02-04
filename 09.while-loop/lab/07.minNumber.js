function minNumber(args){
    let index = 0;
    let minNums = Number.MAX_SAFE_INTEGER;

    let command = args[index];
    index++;

    while (command !== 'Stop'){
        let nums = Number(command);

        if (nums < minNums){
            minNums = nums
        }

        command = args[index];
        index++;

    }
    console.log(minNums);
}

minNumber(["-10",
"20",
"-30",
"Stop"])