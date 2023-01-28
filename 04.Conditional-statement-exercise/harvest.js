function harvest(arr){
    let vineyard = Number(arr[0]);
    let grapesForOneSquareMeter = Number(arr[1]);
    let litersOfWineNeeded = Number(arr[2]);
    let numberOfWorkers = Number(arr[3]);

    let totalGrapes = vineyard * grapesForOneSquareMeter;
    let wineProduction = totalGrapes * 0.4 / 2.5;

    if (wineProduction >= litersOfWineNeeded){
        let wineLeft = wineProduction - litersOfWineNeeded;
        let wineForOneWorker = wineLeft / numberOfWorkers;

        console.log(`Good harvest this year! Total wine: ${Math.floor(wineProduction)} liters.`);
        console.log(`${Math.round(wineLeft)} liters left -> ${Math.ceil(wineForOneWorker)} liters per person.`);
    } else {
        let wineNeeded = litersOfWineNeeded - wineProduction;
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded)} liters wine needed.`);
    }
   

}


harvest(["650","2","175","3"])