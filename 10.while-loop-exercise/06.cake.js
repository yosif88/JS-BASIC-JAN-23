function cake(args) {
    let index = 0;

    let width = Number(args[index]);
    index++;

    let length = Number(args[index]);
    index++;
    let totalCake = width * length;

    let command = args[index];
    index++;

    while (command !== 'STOP') {
        let pieces = Number(command);
        totalCake -= pieces;
        if (totalCake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(totalCake)} pieces more.`);
            break;
        }

        command = args[index];
        index++;
    }
    if (command === 'STOP') {
        console.log(`${totalCake} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
