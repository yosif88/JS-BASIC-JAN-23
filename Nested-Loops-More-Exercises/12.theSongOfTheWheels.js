function theSongOfTheWheels(args) {
    let controlValue = Number(args[0]);
    
    let psswd = '';
    let isrow = false;
    let isFindFour = false;
    let count = 0;
    let currentPassword = '';


    for (let a = 1; a <= 9; a++) {
        let res = 0;
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d) {
                        res = a * b + c * d;
                        if (res === controlValue) {
                            isrow = true;
                            count++;
                            currentPassword += `${a}${b}${c}${d} `
                            if (count === 4) {
                                isFindFour = true;
                                psswd += `${a}${b}${c}${d}`
                               
                    
                            }

                        }

                    }


                }

            }


        }
    
    }
    if (isrow) {
        console.log(currentPassword)
       
    } if (isFindFour) {

        console.log(`Password: ${psswd}`);
        
    }else {
        console.log("No!");
    }
}


theSongOfTheWheels([139])