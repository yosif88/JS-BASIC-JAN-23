function petShop(args){
    let countPackagingDog = Number(args[0])
    let countPackagingCat = Number(args[1])
    let dogPrice = 2.50
    let catPrace = 4
    let total_sum = (countPackagingDog * dogPrice) +(countPackagingCat*catPrace)
    console.log(`${total_sum} lv.`);

}

petShop(["5 ","4 "])
petShop(["13","9"])