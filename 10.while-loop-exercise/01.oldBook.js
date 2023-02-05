function oldBook(args){
    let index = 0;
    
    let searchBook = args[index];
    index++;
    
    let books = args[index];
    index++;
    
    let isFound = false;
    let count = 0;

    while (books !== 'No More Books'){
        if (books === searchBook){
            isFound = true;
            break;
        }
        books = args[index];
        index++;

        count++;
    }
    if (isFound){
        console.log(`You checked ${count} books and found it.`);
    }else{
        console.log("The book you search is not here!");
        console.log(`You checked ${count} books.`);
    }
    
}

oldBook(["Troy",
"Stronger",
"Life Style",
"Troy"])