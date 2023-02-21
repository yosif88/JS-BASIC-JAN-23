function carNumbers(args){
    let start = Number(args[0]);
    let end = Number(args[1]);
    
    let result = '';

    for (let a = start; a <= end; a++){
        let sum = 0;
        for (let b = start; b <= end; b++){
            for (let c = start; c <= end; c++){
                for(let d = start; d <= end; d++){
                    sum  = b + c;
                    if ((a % 2 === 0 && d % 2 === 1) || (a % 2 === 1 && d % 2 === 0)){
                            if (a > d && sum % 2 === 0){
                                result+= `${a}${b}${c}${d} `
                            }
                    }
                }
            }
        }
    }
    console.log(result);

}

carNumbers([
    "3",
    "8"
])