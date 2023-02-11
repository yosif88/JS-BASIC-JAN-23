function building(args) {
    let floorCount = Number(args[0]);
    let roomsCount = Number(args[1]);

    for (let floor = floorCount; floor > 0; floor--) {
        let res = ""
        for (let rooms = 0; rooms < roomsCount; rooms++) {
            if (floor === floorCount) {
                res += "L" + floor + rooms + " ";
                
            }else if (floor % 2 !== 0){
                res += "A" + floor + rooms + " ";
            }else{
                res += "O" + floor + rooms + " ";
            }
            
        }
        console.log(res);
    }


}

building(["9", "5"])