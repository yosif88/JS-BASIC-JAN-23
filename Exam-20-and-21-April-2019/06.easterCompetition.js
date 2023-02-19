function easterCompetition(args){
    let index = 0;
    
    let easterCakeCount = Number(args[index]);
    index++;
    
    let maxPoint = 0;
    let winner = '';
    let point = 0;
    let isWin = false;
    let name = ''

    for (let i = 0; i < easterCakeCount; i++){
        let cmd = args[index];
        index++;
        currName = cmd;
        let currentSum = 0;
        while(cmd !== 'Stop'){
            
            let point = Number(args[index]);
            index++;
            currentSum+= point;
            cmd = args[index];
           
        }
       
        console.log(`${currName} has ${currentSum} points.`);
        if (currentSum > maxPoint){
            maxPoint = currentSum;
            winner = currName; 
            console.log(`${winner} is the new number 1!`);
        }else{
            point = currentSum
            name = currName;
        }
        index++;
    }
    
        console.log(`${winner} won competition with ${maxPoint} points!`);
    

}
easterCompetition([
"3",
"Chef Manchev", 
"10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])
