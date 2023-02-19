function easterBake(args) {
    let index = 0;

    let easterCake = Number(args[index]);
    index++;

    let maxFlour = 0;
    let maxSugar = 0;

    let sugar = 0;
    let flour = 0;

    let totalFlour = 0;
    let totalSugar = 0;

    for (let i = 0; i < easterCake; i++) {
        let sugar = Number(args[index]);
        index++;

        let flour = Number(args[index]);
        index++;

        if (sugar > maxSugar) {
            maxSugar = sugar;
        }
        if (flour > maxFlour) {
            maxFlour = flour;
        }
        totalFlour += flour;
        totalSugar += sugar;

    }

    flour = Math.ceil(totalFlour / 750);
    sugar = Math.ceil(totalSugar / 950);

    console.log(`Sugar: ${sugar}`);
    console.log(`Flour: ${flour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
    
}

easterBake
    (["3",
        "400",
        "350",
        "250",
        "300",
        "450",
        "380"])