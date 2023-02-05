function examPreparatiom(args) {
    let index = 0;

    let poorGrade = Number(args[index]);
    index++;

    let taskName = args[index];
    index++;

    let poorGradeCount = 0;
    let sumGrade = 0;
    let gradeCount = 0;
    let lastTask = ''
    let isTaken = true;

    while (taskName !== 'Enough') {
        let grade = Number(args[index]);
        lastTask = taskName;
        index++;

        if (grade <= 4) {
            poorGradeCount++;
            if (poorGradeCount === poorGrade) {
                isTaken = false;
                break;
            }

        }
        sumGrade += grade;
        taskName = args[index];
        index++;
        gradeCount++;

    }
    
    if (isTaken) {
        let avgGrade = sumGrade / gradeCount;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastTask}`);
    }else{
        console.log(`You need a break, ${poorGradeCount} poor grades.`);
    }
}

examPreparatiom(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
