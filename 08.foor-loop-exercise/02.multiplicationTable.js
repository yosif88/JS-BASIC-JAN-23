function multiplicationTable(args){
    let nums = Number(args[0]);

    for (let i = 1; i <= 10; i++){
        let res = i * nums;
        console.log(`${i} * ${nums} = ${res}`);
    }

}
multiplicationTable(["5"])