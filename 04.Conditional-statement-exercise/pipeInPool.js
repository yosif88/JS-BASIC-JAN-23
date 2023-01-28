function pipeInPool(arr){
    let poolVolume = Number(arr[0]);
    let pipeOne = Number(arr[1]);
    let pipeTwo = Number(arr[2]);
    let hours =  Number(arr[3]);

    let pipeOneFull = pipeOne * hours;
    let pipeTwoFull = pipeTwo * hours;
    
    let totalFull = pipeOneFull + pipeTwoFull;
    let firsPipe = (pipeOneFull / totalFull) * 100;
    let secondPipe = (pipeTwoFull / totalFull) * 100;

    if (totalFull <= poolVolume){
        let percentFilled =totalFull /(poolVolume/100);
    
        console.log(`The pool is ${percentFilled}% full. Pipe 1: ${firsPipe.toFixed(2)}%. Pipe 2: ${secondPipe.toFixed(2)}%.`);
    } else {
        let diff = totalFull - poolVolume;
        console.log(`For ${hours} hours the pool overflows with ${diff} liters.`);
    }
}
pipeInPool(["100","100","100","2.5"])