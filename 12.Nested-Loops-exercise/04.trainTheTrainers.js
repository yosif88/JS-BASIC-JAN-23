function trainTheTrainers(args){
    let index = 0;

    let n = Number(args[index]);
    index++;

    let command = args[index];
    index++;
    let totalGrade = 0;
    let totalCount = 0;

    while (command !== 'Finish'){
        let namePresentation = command;
        let gradesSum = 0;
        let countGrades = 0;

        for (let i = 0; i < n; i++){
            let grade = Number(args[index]);
            index++;
            gradesSum += grade;
            countGrades++;
            totalCount++;
        
        }

        command = args[index];
        index++;

        totalGrade += gradesSum;
        let avgGrade = gradesSum / countGrades;
        console.log(`${namePresentation} - ${avgGrade.toFixed(2)}.`);

       
    }
    let avgTotalGrade = totalGrade/totalCount
    console.log(`Student's final assessment is ${avgTotalGrade.toFixed(2)}.`);

}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


