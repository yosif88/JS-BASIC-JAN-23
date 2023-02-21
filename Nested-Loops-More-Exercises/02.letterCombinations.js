function letterCombinations(args) {
    let start = args[0].charCodeAt(0);
    let end = args[1].charCodeAt(0);
    let invalid = args[2].charCodeAt(0);
    
    let counter = 0;
    let result = '';

    for (let a = start; a <= end; a++) {

        for (let b = start; b <= end; b++) {

            for (let c = start; c <= end; c++) {

                if (invalid !== a && invalid !== b && invalid !== c) {
                    result += `${String.fromCharCode(a)}${String.fromCharCode(b)}${String.fromCharCode(c)} `
                    counter++;

                }

            }

        }

    }
    console.log(`${result}${counter}`);
}

letterCombinations([
    "a",
    "c",
    "z"
])