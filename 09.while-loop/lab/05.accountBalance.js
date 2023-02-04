function accountBalance(args){
    let index = 0;

    let command = args[index];
    index++;

    let totalSum = 0;

    while(command !== 'NoMoreMoney'){
        let money = Number(command);
        
        if (money < 0){
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`);

        totalSum += money;
        command = args[index];
        index ++;
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);

}

accountBalance(["5.51",
"69.42",
"100",
"NoMoreMoney"])