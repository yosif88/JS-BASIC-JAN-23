function grandpaStavri(args){
    let index = 0;
    
    let daysCount = Number(args[index]);
    index++;
    let totalLiters = 0;
    let totalDegrees = 0;

    for (let i = 0; i < daysCount; i++){
        let quantityBrandy = Number(args[index]);
        index++;
        let degreeDrink = Number(args[index]);
        index++;
        totalLiters += quantityBrandy;
        totalDegrees += quantityBrandy * degreeDrink;
       
    }
    let avgDegrees = totalDegrees / totalLiters;

    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${avgDegrees.toFixed(2)}`);
    if (avgDegrees < 38){
        console.log("Not good, you should baking!");
    }else if ( avgDegrees <= 42){
        console.log("Super!");
    }else{
        console.log('Dilution with distilled water!');
    }
} 

grandpaStavri(["2",
"200",
"43",
"200",
"40"])

