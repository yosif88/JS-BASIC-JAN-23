function easterLunch(args) {
    let easterCake = Number(args[0]);
    let eggs = Number(args[1]);
    let cookies = Number(args[2]);

    let priceCake = easterCake * 3.20;
    let priceEggs = eggs * 4.35;
    let priceCookies = cookies * 5.40;
    let pricePainEggs = eggs * 12 * 0.15;

    let totalPrice = priceCake + priceEggs + priceCookies + pricePainEggs;
    console.log(totalPrice.toFixed(2));
    


}

easterLunch([
    "3",
    "2",
    "3"])