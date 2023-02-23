function safePasswordGenerator(args) {
    let a = Number(args[0]);
    let b = Number(args[1]);
    let maxCount = Number(args[2]);

    let counter = 0;
    let flag = false;
    let res = ''

    for (let A = 35; A <= 55; A++) {
        for (let B = 64; B <= 96; B++) {
            for (let x = 1; x <=a+1 ; x++) {
                for (let y = 1; y <=b; y++) {
                    counter++;
                    
                    if (counter > maxCount) {
                        flag = true;
                        break;
                    }
                    

                    res += `${String.fromCharCode(A)}${String.fromCharCode(B)}${x}${y}${String.fromCharCode(B)}${String.fromCharCode(A)}|`
                   
                    if(x === a && y === b){
                        flag = true;
                        break;
                    }
                    A++;
                    if (A > 55) {
                        A = 35;
                    }

                    B++;
                    if (B > 96) {
                        B = 64;
                    }
                    if (counter >= maxCount) {
                        flag = true;
                        break;
                    }
                  
                }
                if (flag) {
                    break;
                }
            }
            if (flag) {
                break;
            }
            if (flag) {
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    console.log(res);
}

safePasswordGenerator([
    '2',
    '3',
    '10'
])