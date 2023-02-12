function cinemaTickets(args) {
    let index = 0;
    let command = args[index];
    index++;

    let ticketStandard = 0;
    let ticketStudent = 0;
    let ticketKid = 0;

   
    let totalTicket = 0;

    while (command !== 'Finish') {
        let movieName = command;
      
        let freePlaces = Number(args[index]);
        index++;

        let cmd = args[index];
        index++;

        let spacesTaken = 0;
        while (cmd !== 'End') {
            let ticketType = cmd;

            switch (ticketType) {
                case "standard": ticketStandard++; break;
                case "kid": ticketKid++; break;
                case "student": ticketStudent++; break;
            }
            spacesTaken++;

            if (spacesTaken === freePlaces) {
                break;

            }
            cmd = args[index];
            index++;

        }
        let percent = spacesTaken / freePlaces * 100
        console.log(`${movieName} - ${percent.toFixed(2)}% full.`);
        
        command = args[index];
        index++;
    }

    totalTicket = ticketKid + ticketStandard + ticketStudent;

    let percentStandard = ticketStandard / totalTicket * 100;
    let percentStudent = ticketStudent / totalTicket * 100;
    let percentKid = ticketKid / totalTicket * 100;
    
    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${percentStudent.toFixed(2)}% student tickets.`);
    console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentKid.toFixed(2)}% kids tickets.`);

}

cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
