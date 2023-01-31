function footballLeague(args) {
    let capacityStadium = Number(args[0]);
    let fensCount = Number(args[1]);

    let sectorACount = 0;
    let sectorBCount = 0;
    let sectorVCount = 0;
    let sectorGCount = 0;

    for (let i = 2; i <= fensCount + 1; i ++){
        let currentSector = args[i];

        switch(currentSector){
            case "A": sectorACount++; break;
            case "B": sectorBCount++; break;
            case "V": sectorVCount++; break;
            case "G": sectorGCount++; break;
        }
    }
    let percentSectorA = (sectorACount / fensCount) * 100;
    let percentSectorB = (sectorBCount / fensCount) * 100;
    let percentSectorV = (sectorVCount / fensCount) * 100;
    let percentSectorG = (sectorGCount / fensCount) * 100;
    let percentTotalFen = (fensCount / capacityStadium) * 100;
    
    console.log(`${percentSectorA.toFixed(2)}%`);
    console.log(`${percentSectorB.toFixed(2)}%`);
    console.log(`${percentSectorV.toFixed(2)}%`);
    console.log(`${percentSectorG.toFixed(2)}%`);
    console.log(`${percentTotalFen.toFixed(2)}%`);

}


footballLeague([
    "76", 
    "10", 
    "A", 
    "V", 
    "V", 
    "V", 
    "G", 
    "B", 
    "A", 
    "V", 
    "B", 
    "B"])