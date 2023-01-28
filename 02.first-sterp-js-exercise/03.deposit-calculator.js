function solve(args){
    let amountDeposited = Number(args[0]);
    let termOfTheDeposit = Number(args[1]);
    let arp = Number(args[2])/100

    let deposit = amountDeposited + termOfTheDeposit *((amountDeposited *arp)/12)
    console.log(deposit);

}
solve(["200 ","3","5.7"])
solve(["2350","6 ","7 "])