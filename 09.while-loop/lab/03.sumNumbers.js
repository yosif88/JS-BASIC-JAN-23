/**
 * 
 *  function sumNumbers(args){
    let index = 0;

    let number = Number(args[index]);
    index++;

    let sum = 0;
    while(true){
        
        let currentNum = Number(args[index]);
        if (sum >= number) {
            console.log(sum);
            break
        }
        sum += currentNum;
        
        index++;
    }
   

} 
 */


function sumNumbers(args) {
    let index = 0;

    let number = Number(args[index]);
    index++;
    
    let sum = 0;
    
    while (number > sum) {

        let currentNum = Number(args[index]);
        sum += currentNum;

        index++;
    }
    console.log(sum);


}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
