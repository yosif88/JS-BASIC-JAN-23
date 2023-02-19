function easterDecoration(input) {
    let index = 0;
 
    let clientsCount = Number(input[index]);
    index++;
 
    let toCalculateAVG = 0;
 
 
    for (let currClient = 1; currClient <= clientsCount; currClient++) {
        let command = input[index];
        index++;
        let itemCount = 0;
        let price = 0;
 
        while (command !== "Finish") {
            let item = command;
            itemCount++;
            
            if (item === "basket") {
                price += 1.50;
            } else if (item === "wreath") {
                price += 3.80;
            } else {
                price += 7;
            }
            
            command = input[index];
            index++;
        }
        if (itemCount % 2 == 0){
            price *= 0.80
        }
 
        toCalculateAVG += price;
        console.log(`You purchased ${itemCount} items for ${price.toFixed(2)} leva.`);
    }
    let avgBill = toCalculateAVG / clientsCount;
    console.log(`Average bill per client is: ${avgBill.toFixed(2)} leva.`);
}