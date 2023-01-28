function areaOfFigures(args){
    let shape = args[0];
    let result = 0;

    if (shape === 'square'){
        let side = Number(args[1]);
        result = side * side
        console.log(result.toFixed(3));

    } else if (shape === 'rectangle') {
        let sideA = Number(args[1]);
        let sideB = Number(args[2]);

        result = sideA * sideB;
        console.log(result.toFixed(3));
        
    } else if (shape === 'circle'){
        let radius = Number(args[1]);

        result = Math.PI *Math.pow(radius,2);
        console.log(result.toFixed(3));
    }else {
        let side = Number(args[1]);
        let height = Number(args[2]);

        result = side * height / 2;
        console.log(result.toFixed(3));
    }

}

areaOfFigures(["square", "5"])
areaOfFigures(["rectangle","7","2.5"])
areaOfFigures(["circle","6"])
areaOfFigures(["triangle","4.5","20"])


