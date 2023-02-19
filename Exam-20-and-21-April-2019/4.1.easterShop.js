function easterShop(args) {
    let index = 0;

    let quantityEggs = Number(args[index]);
    index++;

    let params = args[index];
    index++;

    let soldEggs = 0;

    while(params!== 'Close'){
        let cmd = params;
     
        let eggs = Number(args[index]);
        index++;
       
        if (cmd === 'Buy' && quantityEggs < eggs){
            console.log('Not enough eggs in store!');
            console.log(`You can buy only ${quantityEggs}.`);
            break;
        }

        if (cmd === 'Buy'){
             quantityEggs -= eggs;
             soldEggs += eggs;
        }else {
            quantityEggs += eggs;
        }
     
      


        params = args[index];
        index++;
    }

    if (params === 'Close'){
        console.log('Store is closed!');
        console.log(`${soldEggs} eggs sold.`);
    }

}

easterShop(["13",
"Buy",
"8",
"Fill",
"3",
"Buy",
"10"])