function logistics(args) {
    let loadsCount = Number(args[0]);

    let totalLoads = 0;
    let price = 0;
    let countMicrobus = 0;
    let countTruck = 0;
    let countTrain = 0;

    for (let i = 1; i < args.length; i++){
        let load = Number(args[i]);
        totalLoads+= load;
        if (load <= 3){
            price += load * 200;
            countMicrobus += load;

        }else if (load <= 11){
            price += load * 175;
            countTruck += load;
        }else {
            price += load * 120;
            countTrain += load;
        }
    }
    let avgPrice = price / totalLoads
    console.log(avgPrice.toFixed(2));

    let percentMicrobus = (countMicrobus / totalLoads) * 100;
    let percentTruck = (countTruck / totalLoads) * 100;
    let percentTrain = (countTrain / totalLoads) * 100;

    console.log(`${percentMicrobus.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);

}

logistics([
    4,
    1,
    5,
    16,
    3
])