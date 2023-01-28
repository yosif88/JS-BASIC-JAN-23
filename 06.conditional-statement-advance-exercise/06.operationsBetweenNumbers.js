function operatoionsBetweenNumbers(params){
    let nums1 = Number(params[0]);
    let nums2 = Number(params[1]);
    let operator = params[2];
    let res = 0;
    let evenOrOdd = '';

    switch (operator) {
        case "+":
            res = nums1 + nums2;
            if (res % 2 === 0){
                evenOrOdd = 'even';
            }else{
                evenOrOdd = 'odd'
            }
            console.log(`${nums1} ${operator} ${nums2} = ${res} - ${evenOrOdd}`);
            break;
        case '-':
            res = nums1 - nums2;
            if (res % 2 === 0){
                evenOrOdd = 'even';
            }else{
                evenOrOdd = 'odd'
            }
            console.log(`${nums1} ${operator} ${nums2} = ${res} - ${evenOrOdd}`);
            break;
        case '*':
            res = nums1 * nums2;
            if (res % 2 === 0){
                evenOrOdd = 'even';
            }else {
                evenOrOdd = 'odd'
            }
            console.log(`${nums1} ${operator} ${nums2} = ${res} - ${evenOrOdd}`);
            break;
        case '/':
            if (nums2 === 0){
                console.log(`Cannot divide ${nums2} by zero`);
                break;
            }
            res = nums1 / nums2;
            console.log(`${nums1} / ${nums2} = ${res.toFixed(2)}`);
            break;
        case '%':
            if (nums2 === 0){
                console.log(`Cannot divide ${nums2} by zero`);
                break
            }
            res = nums1 % nums2;
            console.log(`${nums1} % ${nums2} = ${res}`);

            break;

        default:
            break;
    }
    
}

operatoionsBetweenNumbers(["112",
"0",
"/"])
