function theMostPowerfulWord(args){
    let index = 0;
    
    let cmd = args[index];
    index++;
    
    let sum = 0;
    let maxWord ='';

    while(cmd !=='End of words'){
        let word = cmd;
        
        let currSum = 0;
        for (let i = 0; i < word.length; i++){
            currSum += word.charCodeAt(i);
            
        }
        //a', 'e', 'i', 'o', 'u', 'y' 
        let firstVowelChar = word.toLowerCase();
        if (firstVowelChar.charAt(0)  === 'a' || firstVowelChar.charAt(0) === 'e' ||
            firstVowelChar.charAt(0) === 'i' || firstVowelChar.charAt(0) === 'o' ||
            firstVowelChar.charAt(0) === 'u' || firstVowelChar.charAt(0) === 'y'){
                currSum *= word.length;
            }else{
                currSum = Math.floor(currSum / word.length);
            }

        if (currSum > sum){
            sum = currSum;
            maxWord = word;
        }
        cmd = args[index];
        index++;
    }
    console.log(`The most powerful word is ${maxWord} - ${sum}`);

}

theMostPowerfulWord(["The",
"Most",
"Powerful",
"Word",
"Is",
"Experience",
"End of words"])