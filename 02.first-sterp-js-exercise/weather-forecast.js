function weather(args){
    let command = args[0];
    if (command === 'sunny'){
        console.log("It's warm outside!");
    }else{
        console.log("It's cold outside!");
    }
}

weather(["sunny"])
weather(["cloudy"])