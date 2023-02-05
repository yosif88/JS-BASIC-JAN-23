function walking(args){
    let index = 0;
    
    let step = args[index];
    index++;

    let totalStep = 0;

    while (totalStep < 10000){
       
        if (step === 'Going home'){
            step = Number(args[index]);
            totalStep+= step;
            break
        }else{
            totalStep+= Number(step);
            step = args[index];
            index++;
        }
    }
    if (totalStep >= 10000){
        let stepLeft = totalStep - 10000;

        console.log("Goal reached! Good job!");
        console.log(`${stepLeft} steps over the goal!`);
    }else{
        let diff = 10000 - totalStep;
        console.log(`${diff} more steps to reach goal.`);
    }

}

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])