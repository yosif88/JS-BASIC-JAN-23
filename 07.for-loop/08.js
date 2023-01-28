function solve (params){
    let numsStart = Number(params[0]);
    let numsEnd = Number(params[1]);

    let sum = 0;
    let outerNums = '';

    for (let i = numsStart; i <= numsEnd; i++){
        if (i % 9 == 0){
            sum += i;
            outerNums += i +'\n';
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outerNums);

}

solve(["100", "200"])