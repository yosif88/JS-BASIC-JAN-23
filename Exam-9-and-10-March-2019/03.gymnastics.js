function gymnastics(args){

    let country = args[0];
    let device = args[1];

    let maxPoints = 20;
    let points = 0;
    let  percent = 0;
    let pointLeft = 0;
    
    switch(device){
        case 'ribbon':
            switch(country){
                case "Russia":
                    points = 9.100 + 9.400;
                    pointLeft = maxPoints - points;
                    percent=(pointLeft / maxPoints) * 100;
                    break;

                case "Bulgaria":
                    points = 9.600 + 9.400;
                    pointLeft = maxPoints - points;
                    percent = (pointLeft / maxPoints) * 100;
                    break;
                
                case "Italy":
                    points = 9.200 + 9.500;
                    pointLeft = maxPoints - points;
                    percent = (pointLeft / maxPoints) * 100;
                    break;

            }
            break;
        
        case "hoop":
            switch(country){
                case "Russia":
                    points = 9.300 + 9.800;
                    pointLeft = maxPoints - points;
                    percent=(pointLeft / maxPoints) * 100;
                    break;

                case "Bulgaria":
                    points = 9.550 + 9.750;
                    pointLeft = maxPoints - points;
                    percent = (pointLeft / maxPoints) * 100;
                    break;
                
                case "Italy":
                    points = 9.450 + 9.350;
                    pointLeft = maxPoints - points;
                    percent = (pointLeft / maxPoints) * 100;
                    break;

            }
            break;
        
        case "rope":
            switch(country){
                case "Russia":
                    points = 9.600 + 9.000;
                    pointLeft = maxPoints - points;
                    percent=(pointLeft / maxPoints) * 100;
                    break;

                case "Bulgaria":
                    points = 9.500 + 9.400;
                    pointLeft = maxPoints - points;
                    percent = (pointLeft / maxPoints) * 100;
                    break;
                
                case "Italy":
                    points = 9.700 + 9.150;
                    pointLeft = maxPoints - points;
                    percent = (pointLeft / maxPoints) * 100;
                    break;

            }
            break;
    
        }

        console.log(`The team of ${country} get ${points.toFixed(3)} on ${device}.`);
        console.log(`${percent.toFixed(2)}%`);

}

gymnastics(["Italy",
"hoop"])