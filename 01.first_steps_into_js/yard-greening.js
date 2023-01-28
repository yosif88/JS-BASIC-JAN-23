function solve(args){
    let greening = Number(args[0]);
    let pricePerSquareMeter = 7.61;
    let currentSum = greening * pricePerSquareMeter;
    let discount = currentSum * 0.18;
    let total_sum = currentSum - discount;
    
    console.log(`The final price is: ${total_sum} lv.`);
     console.log(`The discount is: ${discount} lv.`);

}
solve(["550"])
solve(["150"])