function happyCatParking(args) {

    let index = 0;
    let daysCount = Number(args[index]);
    index++;

    let hours = Number(args[index]);
    index++;
    let totalPrice = 0;


    for (let day = 1; day <= daysCount; day++) {
        let price = 0;
        for (let hour = 1; hour <= hours; hour++) {

            if (day % 2 === 0 && hour % 2 === 1) {
                price += 2.50
            } else if (day % 2 === 1 && hour % 2 === 0) {
                price += 1.25;
            } else {
                price += 1;
            }
        }
        totalPrice += price;
        console.log(`Day: ${day} - ${price.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}

happyCatParking([
    2,
    5
])