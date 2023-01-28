function concatenateData(args){
    let firstName = args[0]
    let lastName = args[1]
    let age = Number(args[2])
    let town = args[3]

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);

}
