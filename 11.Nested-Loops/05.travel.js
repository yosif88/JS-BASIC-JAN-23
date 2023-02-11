function travel(args) {
    let index = 0;

    let command = args[index];
    index++;

    while (command !== 'End') {
        let destination = command;
        let budget = Number(args[index]);
        index++;

        let sum = 0;

        while(sum < budget){
            let money = Number(args[index]);
            index++;
            sum+= money;
        }
        console.log(`Going to ${destination}!`);
        command = args[index];
        index++;
    }


}

travel(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

