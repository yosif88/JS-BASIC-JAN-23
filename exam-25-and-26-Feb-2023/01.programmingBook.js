function programmingBook(args) {

    let costPrintOnePage = Number(args[0]);
    let costPrintOneCover = Number(args[1]);
    let percentDiscountPrintingPaper = Number(args[2]);
    let sumPaidToDesinger = Number(args[3]);
    let percentTotalSum = Number(args[4]);

    let money = (costPrintOnePage * 899) +(costPrintOneCover* 2 )
     money -= (money * percentDiscountPrintingPaper/ 100);
    money += sumPaidToDesinger;
    money -= (money * percentTotalSum / 100)
    
    console.log(`Avtonom should pay ${money.toFixed(2)} BGN.`);


}
programmingBook(([
    "0.01",
    "1",
    "10",
    "20",
    "20"]))