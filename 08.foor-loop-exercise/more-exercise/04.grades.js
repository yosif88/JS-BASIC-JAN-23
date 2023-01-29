function grades(args) {
    let studentsCount = Number(args[0]);

    let totalGrades = 0;
    let topStudentCount = 0;
    let between4And5 = 0;
    let between3And4 = 0;
    let failStudentCount = 0;

    for (i = 1; i <= studentsCount; i++) {
        let currentGrade = Number(args[i]);
        totalGrades += currentGrade;
        if (currentGrade <= 2.99) {
            failStudentCount++;
        } else if (currentGrade <= 3.99) {
            between3And4++;
        }else if (currentGrade <= 4.99){
            between4And5++;
        }else{
            topStudentCount++;
        }
    }

    let percentTopStudents = (topStudentCount / studentsCount) * 100;
    let percentGoodStudents = (between4And5 / studentsCount) * 100;
    let percecntMidStudents = (between3And4 / studentsCount) * 100;
    let percentFailStudents = (failStudentCount / studentsCount) * 100;

    console.log(`Top students: ${percentTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentGoodStudents.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percecntMidStudents.toFixed(2)}%`);
    console.log(`Fail: ${percentFailStudents.toFixed(2)}%`);

    let avgGrade = totalGrades / studentsCount;
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}

grades([
    10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5
])