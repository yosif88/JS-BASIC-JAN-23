function fishTank(args){
    let length = Number(args[0]);
    let width = Number(args[1]);
    let height = Number(args[2]);
    let percent = Number(args[3]) / 100;

    let totalVolume = (length * width * height) / 1000;
    let neededFillTheAquarium = totalVolume - (totalVolume * percent);


    console.log(neededFillTheAquarium);
}


fishTank(["85 ","75 ","47 ","17"])