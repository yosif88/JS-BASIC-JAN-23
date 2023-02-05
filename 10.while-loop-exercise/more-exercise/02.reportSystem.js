function reportSystem(args) {
    let index = 0;

    let expectsAmount = Number(args[index]);
    index++;

    let cmd = args[index];
    index++;
  
    let countTransaction = 0;
    
    let sumCash = 0;
    let sumCard = 0;
    
    let moneyCashCount = 0;
    let moneyCardCount = 0;
    
    
    let totalSum = 0;

    while (cmd !== 'End') {

        let money = Number(cmd);

        if (countTransaction % 2 == 0) {
            if (money > 100) {
                console.log("Error in transaction!");


            } else {
                console.log("Product sold!");
                sumCash += money;
                moneyCashCount++;
                totalSum += money;
            }
        } else {

            if (money <= 10) {
                console.log("Error in transaction!");

            } else {
                console.log("Product sold!");
                sumCard += money;
                moneyCardCount++;
                totalSum += money
            }
        }

        countTransaction++;
        cmd = args[index];
        index++;

        if (totalSum >= expectsAmount) {
            let avgCS = sumCash / moneyCashCount;
            let avgCC = sumCard / moneyCardCount;
            console.log(`Average CS: ${avgCS.toFixed(2)}`);
            console.log(`Average CC: ${avgCC.toFixed(2)}`);
            break;

        }
    }
    if (cmd === 'End') {
        console.log("Failed to collect required money for charity.");
    }



}
reportSystem([
    500,
    120,
    8,
    63,
    256,
    78,
    317,
])