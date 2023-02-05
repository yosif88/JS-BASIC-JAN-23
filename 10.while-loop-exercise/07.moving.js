// function moving(args){
//     let index = 0;

//     let width = Number(args[index]);
//     index++;

//     let length = Number(args[index]);
//     index++;

//     let height = Number(args[index]);
//     index++;

//     let roomVolume = width * length * height;
//     let freeSumRoom = 0;

//     let cmd = args[index];
//     index++;

//     while (cmd !== 'Done'){
//         let currenBox = Number(cmd);
//         freeSumRoom+= currenBox;
//         if (roomVolume < freeSumRoom){
//             let diff = freeSumRoom - roomVolume;
//             console.log(`No more free space! You need ${diff} Cubic meters more.`);
//             break;
//         }
//         cmd = args[index];
//         index++;
//     }
//     if (cmd === 'Done'){
//         let volumeLeft = roomVolume - freeSumRoom;
//         console.log(`${volumeLeft} Cubic meters left.`);
//     }

// }

function moving(args){
    let index = 0;

    let width = Number(args[index]);
    index++;

    let length = Number(args[index]);
    index++;

    let height = Number(args[index]);
    index++;

    let roomVolume = width * length * height;
    let freeSumRoom = 0;

    let cmd = args[index];
    index++;

    while (cmd !== 'Done'){
        let currenBox = Number(cmd);
        roomVolume-= currenBox;
        if (roomVolume <= 0){
            console.log(`No more free space! You need ${Math.abs(roomVolume)} Cubic meters more.`);
            break;
        }
        cmd = args[index];
        index++;
    }
    if (cmd === 'Done'){
        let volumeLeft = roomVolume - freeSumRoom;
        console.log(`${volumeLeft} Cubic meters left.`);
    }

}

moving(["10",
"1",
"2",
"4",
"6",
"Done"])