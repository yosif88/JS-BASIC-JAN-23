function sumPrimeNonPrime(args) {
    let index = 0;

    let command = args[index];
    index++;

    let sumPrime = 0;
    let sumNonPrime = 0;

    while(command !== 'stop'){
        let nums = Number(command);
        if (nums < 0){
            console.log("Number is negative.");
            command = args[index];
            index++;
            continue;
        }

        let isPrime = true;
        for (let i = 2; i < nums; i++){
            
            if (nums % i === 0){
                isPrime = false;
            
            }
        }
        if (isPrime){
            sumPrime+= nums;
        }else{
            sumNonPrime+= nums;
        }

        command = args[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}

sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])