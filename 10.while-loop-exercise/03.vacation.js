function vacation(args) {
    let index = 0;

    let moneyTour = Number(args[index]);
    index++;

    let jesseMoney = Number(args[index]);
    index++;
    let command = args[index];
    index++;

    let dayCount = 0;
    let isSave = true;
    let spendingCount = 0;

    while (jesseMoney < moneyTour) {
    
        if (command === 'spend') {
            spendingCount++;
            command = args[index];
            index++;
            let money = Number(command);
            jesseMoney -= money;
            if (jesseMoney < 0) {
                jesseMoney = 0;
            }
        } else {
            command = args[index];
            index++;
            let money = Number(command);
            jesseMoney += money;
            spendingCount = 0;
           
        }
        dayCount++;
        if (spendingCount === 5){
            isSave = false;
            break
        }
        command = args[index];
        index++;
       
     
    }
    if (isSave) {
        console.log(`You saved the money for ${dayCount} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(`${dayCount}`);


    }
}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])