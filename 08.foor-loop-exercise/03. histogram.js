function histogram(args) {
    let n = Number(args[0]);

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for (let i = 1; i <= n; i++) {
        let currNuns = Number(args[i]);

        if (currNuns < 200) {
            p1Count++;
        } else if (currNuns <= 399) {
            p2Count++;
        } else if (currNuns <= 599) {
            p3Count++;
        } else if (currNuns <= 799) {
            p4Count++;
        }else{
            p5Count++;
        }
    }
    
    let p1Percent = (p1Count / n) * 100;
    let p2Percent = (p2Count / n) * 100;
    let p3Percent = (p3Count / n) * 100;
    let p4Percent = (p4Count / n) * 100;
    let p5Percent = (p5Count / n) * 100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);
}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])