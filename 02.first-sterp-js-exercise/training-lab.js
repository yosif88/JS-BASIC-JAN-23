function training(args){

    let w = Number(args[0])*100;
    let h = Number(args[1])* 100;
    
    let widthNoCorridor = h - 100;
    let desksInARow = widthNoCorridor / 70;
    let lengthRow =  w  / 120;
    let res = Math.floor(desksInARow)* Math.floor(lengthRow) - 3


    console.log(res);
    

}
training(["8.4", "5.2"])