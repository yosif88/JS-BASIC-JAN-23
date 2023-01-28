// function solve(input){
    
//     let packetsOfPens = Number(input[0]);
//     let packetsOfMarkers = Number(input[1]);
//     let cleanerBoard = Number(input[2]);
//     let percentage  =(100 -Number(input[3]))/100;

//     let sum = ((packetsOfPens * 5.80) + (packetsOfMarkers * 7.20) + (cleanerBoard * 1.20))*percentage;
//     console.log(sum);
// }

function solve(input){
    
    let packetsOfPens = Number(input[0]) * 5.80;
    let packetsOfMarkers = Number(input[1]) * 7.20;
    let cleanerBoard = Number(input[2]) * 1.20;
    let percentage  =(100 -Number(input[3]))/100;

let sum = (packetsOfPens + packetsOfMarkers + cleanerBoard) * percentage;
    console.log(sum);

}


solve(["2 ","3 ","4 ","25 "])
solve(["4 ","2 ","5 ","13 "])