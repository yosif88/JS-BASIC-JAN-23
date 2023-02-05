function averageNumber(args){
    let index = 0;
    let n = Number(args[index]);
    index++;
    
    let sum = 0;

    for (let i = 0; i < n; i++){
        let num =  Number(args[index]);
        index++;

        sum+= num

    }

    let avgSum = sum / n;
    console.log(avgSum.toFixed(2));

} 
averageNumber([
4,
3,
2,
4,
2,
])