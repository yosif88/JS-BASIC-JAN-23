function passwordGenerator(args) {
    let n = Number(args[0]);
    let l = Number(args[1]);
    let res = '';
    let letter = 97 + l;

    for (let a = 1; a < n; a++) {
        for (let b = 1; b < n; b++) {
            for (let ch1 = 97; ch1 < letter; ch1++) {
                for (let ch2 = 97; ch2 < letter; ch2++) {
                    for (let c = 2; c <= n; c++) {
                        if (c > a && c > b) {
                            res += `${a}${b}${String.fromCharCode(ch1)}${String.fromCharCode(ch2)}${c} `


                        }

                    }
                }

            }
        }
    }
    console.log(res);
}

passwordGenerator([
    3,
    1
])