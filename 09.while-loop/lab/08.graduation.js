function graduation(args){
    let index = 0;
    let name = args[index];
    index++;
    
    let grades = Number(args[index]);
    index++;

    let completedClass = 1;
    let countFaild = 0;
    let isExcluded = false;
    
    let sumOfGrades = 0;

    while (completedClass <= 12){
        if (grades < 4){
            countFaild++;
            if(countFaild === 2){
                isExcluded = true;
                break;
            }
            grades = Number(args[index])
            index++;
            continue;
        
        }
        completedClass ++;
        sumOfGrades+= grades;
        
        grades = Number(args[index])
        index++;
        
    }

    if (!isExcluded){
        let avrGrade = sumOfGrades / 12;
        console.log(`${name} graduated. Average grade: ${avrGrade.toFixed(2)}`);
    }else{
        console.log(`${name} has been excluded at ${completedClass} grade`);
    }

}

graduation(["Mimi",

"2",
"3"])
