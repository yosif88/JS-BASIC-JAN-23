function projectCreation(args){
    let name = args[0];
    let countProject = Number(args[1]);
    let preparationOfAProject = 3;
    let result = countProject * preparationOfAProject;

    console.log(`The architect ${name} will need ${result} hours to complete ${countProject} project/s.`);
}

projectCreation(["George ","4 "])
projectCreation(["Sanya ","9 "])