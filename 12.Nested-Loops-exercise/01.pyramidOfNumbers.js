function pyramidOfNumbers(args) {
    let n = Number(args[0]);

    let current = 1;
    let isBigger = false;
   

    for (let row = 1; row <= n; row++) {
        let res = ""
        for (let col = 1; col <= row; col++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            res += current + ' '
            current++;
         

        }
        console.log(res)
        res = '';
        if(isBigger){
            break;
        }
       
    }
    


}

pyramidOfNumbers(["7"])