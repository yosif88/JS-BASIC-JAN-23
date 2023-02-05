function dishwasher(args){
    let index = 0;

    let bottlesCount = Number(args[index]);
    let totalMillilitersBottles = bottlesCount * 750;
    index++;

    let command = args[index];
    index++;
    
    let sumPlates = 0;
    let sumPots = 0;
    let count = 0;
    while (command !== 'End'){
            count++;
            let sum = 0
            let dashed = Number(command);
            if (totalMillilitersBottles < sum){
                let neededDetergent = sum - totalMillilitersBottles;
                console.log(`Not enough detergent, ${neededDetergent} ml. more necessary!`);
                break;
            }

            if (count % 3 === 0){
                sum = dashed * 15;
                sumPots += dashed;
                totalMillilitersBottles -= sum;

            }else{
                sum = dashed * 5;
                sumPlates += dashed;
                totalMillilitersBottles -= sum;
            }
           
            
            command = args[index];
            index++;
    }
    if (command === 'End'){
        console.log("Detergent was enough!");
        console.log(`${sumPlates} dishes and ${sumPots} pots were washed.`);
        console.log(`Leftover detergent ${totalMillilitersBottles} ml.`);
    }

}

dishwasher([
     1,
    10,
    15,
    10,
    12,
    13,
    30,
])