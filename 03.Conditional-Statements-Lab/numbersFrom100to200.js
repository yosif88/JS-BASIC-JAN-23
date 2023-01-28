function numbersBetween100And200(args){
    let nums = Number(args[0]);

    if (nums < 100) {
        console.log("Less than 100");
        
    }else if (nums >= 100 && nums <= 200) {
            console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
        
    }

}
// numbersBetween100And200(["95"])
// numbersBetween100And200(["120"])
numbersBetween100And200(["200"])