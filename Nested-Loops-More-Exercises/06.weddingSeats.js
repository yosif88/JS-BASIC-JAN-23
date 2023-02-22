function weddingSeats(args) {
    let sectors = args[0];
    let rows = Number(args[1]);
    let rowOdd = Number(args[2]);
    let index = 0;
    let count  = 0;
    let convertToASCII = sectors.charCodeAt(sectors)
    let res = '';

    for (let a = 65; a <= convertToASCII; a++) {
        if (a > 65) {
            rows += 1
        }
        currSec = String.fromCharCode(a);
        for (let row = 1; row <= rows; row++) {
            if (row % 2 === 1) {
                for (let odd = 1; odd <= rowOdd; odd++) {
                    ch = 97 + index;
                    index++;
                     res += `${currSec}${row}${String.fromCharCode(ch)}\n`  
                     count++;             
                }
            } else {
                for (let odd = 1; odd <= rowOdd + 2; odd++) {
                    ch = 97 + index;
                    res += `${currSec}${row}${String.fromCharCode(ch)}\n`
                    index++;
                    count++;
                }
            }
           
           index = 0;
        }
        

    }
    console.log(res.trim());
    console.log(count);
}
weddingSeats([
    'B',
    '3',
    '2'
])