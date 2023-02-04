function password(args){
    let index = 0;

    let userName = args[index];
    index++;

    let password = args[index];
    index++;

    while (true){
        let psswd = args[index];
        if (password === psswd){
            console.log(`Welcome ${userName}!`);
            break
        }
        index++;
    }
}

password(["Gosho",
"secret",
"secret"])