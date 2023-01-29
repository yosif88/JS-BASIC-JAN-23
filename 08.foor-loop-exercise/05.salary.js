function salary(args){
    let openTabsCount = Number(args[0]);
    let salary = Number(args[1]);
    
    for (i = 2; i <= openTabsCount + 1; i++){
        let tabs = args[i];

        switch(tabs){
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }
    }
    if (salary <= 0){
        console.log("You have lost your salary.");
    }else{
        console.log(salary);
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])