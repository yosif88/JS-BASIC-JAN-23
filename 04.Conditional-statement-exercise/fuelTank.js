function fuelTank(args){
    let typeFuel = args[0];
    let fuelLiters = Number(args[1]);
    
    if (typeFuel === 'Diesel'){
        if (fuelLiters >= 25){
        console.log('You have enough diesel.');
        }else {
            console.log('Fill your tank with diesel!');
        }   
    }else if (typeFuel === 'Gasoline'){
        if (fuelLiters >= 25){
            console.log(`You have enough gasoline.`);
            }else {
                console.log('Fill your tank with gasoline!');
            }   
    }else if (typeFuel === 'Gas'){
        if (fuelLiters >= 25){
            console.log('You have enough gas.');
            }else {
                console.log('Fill your tank with gas!');
            }   
    }else {
        console.log("Invalid fuel!");
    }

}
fuelTank(["Gasoline","40"])