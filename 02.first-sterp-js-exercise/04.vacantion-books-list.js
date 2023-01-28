function solve(input){
    let numberOfPages = Number(input[0]);
    let pagesPerOneHour = Number(input[1]);
    let numberOfDays = Number(input[2]);
    
    let result = (numberOfPages / pagesPerOneHour) / numberOfDays;
    console.log(result);
}



solve(["212","20","2"])
solve(["432 ","15 ","4 "])