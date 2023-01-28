function evenOrOdd(args) {
    let nums = Number(args[0]);

    if (nums % 2 === 0) {
        console.log('even');

    } else {
        console.log('odd');
    }

}
evenOrOdd(["2"])
evenOrOdd(["3"])
evenOrOdd(["25"])
evenOrOdd(["1024"])