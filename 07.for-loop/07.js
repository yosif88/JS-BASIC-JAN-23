function solve(params) {
    let text = params[0];

    let sum = 0;
    
    for (let i = 0; i < text.length; i++) {
        let currentNum = Number(text[i]);
        sum += currentNum;
    }
    console.log(`The sum of the digits is:${sum}`);
}

solve(["564891"])