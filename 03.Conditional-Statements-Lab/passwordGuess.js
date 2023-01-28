function passwordGuess(args) {
    let data = "s3cr3t!P@ssw0rd";
    let passwd = args[0];

    if (data === passwd) {
        console.log('Welcome');

    } else {
        console.log('Wrong password!');
    }

}
passwordGuess(["qwerty"])
passwordGuess(["s3cr3t!P@ssw0rd"])
passwordGuess(["s3cr3t!p@ss"])