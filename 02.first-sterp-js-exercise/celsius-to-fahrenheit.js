function convertor(args){

    // °C × 1,8 + 32

    let celsius = Number(args[0]);
    let fahrenheit = celsius * 1.8 + 32;
    console.log(fahrenheit.toFixed(2));
}

convertor(["0"])