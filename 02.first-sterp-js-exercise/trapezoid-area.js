function trapezoidArea(args){
        //  (b1 + b2) * h / 2
    let b1 = Number(args[0]);
    let b2 = Number(args[1]);
    let h = Number(args[2]);

    let area = (b1 + b2) * h / 2;
    console.log(area.toFixed(2));
}




trapezoidArea(["100","200","300"])