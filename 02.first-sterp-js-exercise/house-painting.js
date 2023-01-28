function solve(args){
    let heightHouse = Number(args[0]);
    let lengthWall = Number(args[1]);
    let heightTriangle = Number(args[2]);

    let areaDoor = 1.2 * 2
    let areaSmallSideWall = heightHouse * heightHouse;
    let areaWithoutDoor = 2 * areaSmallSideWall - areaDoor;

    let areaWindow = 1.5 * 1.5;
    let areaLengthWall = lengthWall * heightHouse;
    let areaWithoutWindow = 2 * areaLengthWall - 2 *areaWindow;
    
    let totalArea = areaWithoutWindow + areaWithoutDoor;
    let greenPain = totalArea / 3.4;
    console.log(greenPain.toFixed(2));

    let  twoRectanglesroof = 2 *(heightHouse * lengthWall);
    // 2 * (6*5.2 / 2) = 2 * 15.6 = 31.2
    let twoTriangle = 2 *(heightHouse * heightTriangle / 2);
    let totaRoofArea =  twoRectanglesroof + twoTriangle;
    let redPain = totaRoofArea / 4.3;


    console.log(redPain.toFixed(2));
}


solve(["6","10","5.2"])