function sumOfTwoNumbers(args) {
    let index = 0;
    let start = (Number(args[index]));
    index++;

    let end = Number(args[index]);
    index++;

    let magicNumber = Number(args[index]);
    index++;
    let count = 0;
    let isMagic = false;

    for (let a = start; a <= end; a++){
        let sum = 0;
        for (let b = start; b <= end; b++){
            let firstNum = a;
            let secondNum = b;
            sum = firstNum + secondNum;
            count++; 
            if (sum === magicNumber){
                console.log(`Combination N:${count} (${firstNum} + ${secondNum} = ${magicNumber})`);
                isMagic = true;
                break;
            }
           
           
        }
        if(isMagic){
            break;
        }  

    }
    if(!isMagic){
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }

}

sumOfTwoNumbers([
    1,
    10,
    5,
])