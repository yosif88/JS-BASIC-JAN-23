function fruitShop(args) {
    let fruit = args[0];
    let day = args[1];
    let quantity = Number(args[2]);
    let sum = 0;

    if (day == 'Saturday' || day == 'Sunday') {

        switch (fruit) {
            case "banana": sum = quantity * 2.70; break;
            case "apple": sum = quantity * 1.25; break;
            case "orange": sum = quantity * 0.90; break;
            case "grapefruit": sum = quantity * 1.60; break;
            case "kiwi": sum = quantity * 3; break;
            case "pineapple": sum = quantity * 5.60; break;
            case "grapes": sum = quantity * 4.20; break;
            default:
                console.log("error");
                break;
        }

    } else if (day == 'Monday' || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch (fruit) {
            case "banana": sum = quantity * 2.50; break;
            case "apple": sum = quantity * 1.20; break;
            case "orange": sum = quantity * 0.85; break;
            case "grapefruit": sum = quantity * 1.45; break;
            case "kiwi": sum = quantity * 2.70; break;
            case "pineapple": sum = quantity * 5.50; break;
            case "grapes": sum = quantity * 3.85; break;
            default:
                console.log("error");
                break;
        }

    } else {
        console.log("error");
    }
    if (sum > 0) {
        console.log(sum.toFixed(2));
    }
}




fruitShop(["apple",
    "Workday",
    "2"])

