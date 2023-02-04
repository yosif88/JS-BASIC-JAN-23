function readText(args){
    let index = 0;
    
    let text = args[index];
    index++;

    while(text !== 'Stop'){
        console.log(text);
        
        text = args[index];
        index++;
    }
}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])