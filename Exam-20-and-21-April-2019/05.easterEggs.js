function easterEggs(args) {
    let index = 0;

    let eggsCount = Number(args[index]);
    index++;

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxEggs = 0;
    let color = '';

    for (let i = 0; i < eggsCount; i++) {
        let eggs = args[index];
        index++;
        switch (eggs) {
            case 'red': red++; break;
            case 'blue': blue++; break;
            case 'orange': orange++;break;
            case 'green': green++; break;
        }
    }
    if(red > green && red > blue && red > orange){
        maxEggs = red;
        color = 'red';
    }else if (blue > red && blue > orange && blue > green){
        maxEggs = blue;
        color = 'blue';
    }else if (orange > red && orange > green && orange > blue){
        maxEggs = orange;
        color = 'orange';
    }else{
        maxEggs= green;
        color = 'green';
    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${color}`);
}

easterEggs(["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"])