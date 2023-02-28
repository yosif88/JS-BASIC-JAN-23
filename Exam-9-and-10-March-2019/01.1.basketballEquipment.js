function backetballEquipment(args){

    let yearlyFee = Number(args[0]);
    
    let basketballSneakers = yearlyFee * 0.60;
    let basketballTeam = basketballSneakers * 0.80;
    let backetball = basketballTeam / 4;
    let backetballAccessories = backetball / 5;

    let totalSum =yearlyFee+ basketballSneakers + basketballTeam + backetball +backetballAccessories;


    console.log(totalSum.toFixed(2));

}

backetballEquipment(["320"])