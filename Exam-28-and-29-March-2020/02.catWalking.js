function catWalking(args) {
    let minWalking = Number(args[0]);
    let walkingCount = Number(args[1]);
    let caloriesConsumed = Number(args[2]);

    let caloriesLeft = caloriesConsumed * 0.50;

    let totalMin = minWalking * walkingCount;

    let caloriesBurned = totalMin * 5;

    if (caloriesBurned >= caloriesLeft){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }


}

catWalking(["40",
"2",
"300"])
