function suitcasesLoad(args) {
    let index = 0;
    
    let trunkCapacity = Number(args[index]);
    index++;

    let command = args[index];
    index++;
    
    let counterCheckedBaggage = 0;
  

    while (command !== 'End'){
        let valueSuitcase = Number(command);

        
        if ((counterCheckedBaggage + 1) % 3 === 0){
            valueSuitcase = valueSuitcase* 1.10;

        }
       
        if (trunkCapacity  < valueSuitcase){
            console.log('No more space!');
            console.log(`Statistic: ${counterCheckedBaggage} suitcases loaded.`);
         
            break;
        }
       
        
        counterCheckedBaggage++;
        trunkCapacity -= valueSuitcase; 
       
        command = args[index];
        index++;
    }
    if (command === 'End'){
        console.log('Congratulations! All suitcases are loaded!');
        console.log(`Statistic: ${counterCheckedBaggage} suitcases loaded.`);
    }
   
}

suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])