function maxNumber(args){
    let index = 0;
    let maxNums = Number.MIN_SAFE_INTEGER;
    let command = args[index];
    index++;

    while(command !== 'Stop'){
        let nums = Number(command);
        
        if (nums > maxNums){
            maxNums = nums;
        }
        command = args[index];
        index++;
    }
    console.log(maxNums);

}

maxNumber(["-1",
"-2",
"Stop"])
