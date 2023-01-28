function bikeRace(args){
    let juniorBikes = Number(args[0]);
    let seniorBikes = Number(args[1]);
    let routeType = args[2];

    let juniorPrice = 0;
    let seniorrPrice = 0;
    let totalRacer = juniorBikes + seniorBikes;

    switch(routeType){
        case "trail":
            juniorPrice = 5.50 * juniorBikes;
            seniorrPrice = 7 * seniorBikes;
            break;
    
            case "cross-country":
                juniorPrice = 8 * juniorBikes;
                seniorrPrice = 9.50 * seniorBikes;
                if (totalRacer >= 50){
                    juniorPrice *= 0.75;
                    seniorrPrice *= 0.75;
                }
                break;
            
            case "downhill":
                juniorPrice = 12.25 * juniorBikes;
                seniorrPrice = 13.75 * seniorBikes;
                break;
            
            case "road":
                juniorPrice = 20 * juniorBikes;
                seniorrPrice = 21.50 * seniorBikes;
                break;
    }
    let totalSum = juniorPrice + seniorrPrice;
    totalSum *= 0.95;
    console.log(totalSum.toFixed(2));  
}

bikeRace(["3","40","road"])