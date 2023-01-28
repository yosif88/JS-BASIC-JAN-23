function triangleArea(args){
    // area = a * h / 2
    let a = Number(args[0]);
    let h = Number(args[1]);

    let area = a *  h / 2;
    console.log(area.toFixed(2));


}



triangleArea(["20", "30"])