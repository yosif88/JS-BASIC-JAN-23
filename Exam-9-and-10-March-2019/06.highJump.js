function highJump(args) {
    let index = 0;

    let targetBarHeight = Number(args[index]);
    index++;
    let barHeight = targetBarHeight - 30;
    let failJump = 0;
    let failed = false;
    let jumbCount = 0;
   

    while (!failed) {
        let currentBarHeigth = Number(args[index]);
        index++;
        jumbCount++;
      
        if (currentBarHeigth <= barHeight) {
            failJump++;
            if (failJump === 3) {
                failed = true;
               
            }
            
        }else {
            if(barHeight >= targetBarHeight){
                break;
            }
            failJump = 0;
            barHeight += 5;

        }
       


    }

    if (!failed) {
        console.log(`Tihomir succeeded, he jumped over ${targetBarHeight}cm after ${jumbCount} jumps.`);
    }else{
        console.log(`Tihomir failed at ${barHeight}cm after ${jumbCount} jumps.`);
    }


}

highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])