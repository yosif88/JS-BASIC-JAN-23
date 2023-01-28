function solve(input){
    let amountOfNylon = Number(input[0]);
    let amountOfPain = Number(input[1]);
    let amountOfDiluent  = Number(input[2]); 
    let hours = Number(input[3]);

    let sumOfNylon = (amountOfNylon +2) * 1.50;
    let sumOfPain = (amountOfPain + amountOfPain * 0.10)*14.5;
    let sumOfDiluent = amountOfDiluent * 5;

    let sumOfMaterials = sumOfNylon + sumOfPain + sumOfDiluent + 0.40;
    let sumOfMasters = (sumOfMaterials * 0.30) * hours;
    let totalSum = sumOfMasters + sumOfMaterials;

    console.log(totalSum);        


}
solve(["10","11 ","4","8"])
solve(["5 ","10 ","10 ","1 "])