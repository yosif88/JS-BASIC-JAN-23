function catLife(args){
    let kindCat = args[0];
    let genderCat =args[1];

    let catMonth = 0;
    let invalidKind = false;

    switch(genderCat){
        case "m":
            switch(kindCat){
                case 'British Shorthair':
                    humanMonth = 13 * 12;
                    catMonth = humanMonth / 6;
                    break;
                case 'Siamese':
                    catMonth = 15 * 12 / 6;
                    break;
                case "Persian":
                    catMonth = 14 * 12 / 6;
                    break;
                case "Ragdoll":
                    catMonth =  16 * 12 / 6;
                    break;
                case "American Shorthair":
                    catMonth = 12 * 12 / 6;
                    break;
                case "Siberian":
                    catMonth = 11 * 12 / 6;
                    break;
                default:
                    console.log(`${kindCat} is invalid cat!`);
                    invalidKind = true;
                    break;
            }
            break;
            
        case "f":
            switch(kindCat){
                case 'British Shorthair':
                    catMonth = 14 * 12 / 6;
                    break;
                case 'Siamese':
                    catMonth = 16 * 12 / 6;
                    break;
                case "Persian":
                    catMonth = 15 * 12 / 6;
                    break;
                case "Ragdoll":
                    catMonth = 17 * 12 / 6;
                    break;
                case "American Shorthair":
                    catMonth = 13 * 12 / 6;
                    break;
                case "Siberian":
                    catMonth = 12 * 12 / 6;
                    break;
                default:
                    console.log(`${kindCat} is invalid cat!`);
                    invalidKind = true;
                    break;
            }
            break;
    }
    if (!invalidKind){
        console.log(`${Math.floor(catMonth)} cat months`);
    }
}

catLife(["Tom",
"m"])