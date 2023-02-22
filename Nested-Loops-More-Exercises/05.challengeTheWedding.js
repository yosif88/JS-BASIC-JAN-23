function challengeTheWedding(args) {

    let male = Number(args[0]);
    let female = Number(args[1]);
    let tables = Number(args[2]);
    
    let result = '';
    let count = 0
    let isFull = false;
    
        for (let m = 1; m <= male; m++) {
            for (let f = 1; f <= female; f++) {
                if (tables === count){
                    isFull = true;
                    break;
                }
                result += `(${m} <-> ${f}) `
            
                count+= 1;
            }
            if(isFull){
                break;
            }
        }
    
    console.log(result);   
}

challengeTheWedding([
    5,
    8,
    40
])