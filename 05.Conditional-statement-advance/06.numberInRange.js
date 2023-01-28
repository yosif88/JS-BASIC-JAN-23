function numberInRange(args){
    let nums = Number(args[0]);

    if (nums >= -100 && nums <= 100 && nums !== 0) {
        console.log("Yes");
    }else {
        console.log('No');
    }

}
numberInRange(["-101"])
