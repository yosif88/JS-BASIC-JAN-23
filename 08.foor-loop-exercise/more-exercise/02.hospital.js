function hospital(args) {
    let period = Number(args[0]);

    let treatedPatients = 0;
    let untreatedpatients = 0;
    let doctors = 7;

    for (let i = 1; i <= period; i++) {
        let currPatients = Number(args[i]);
        if (i % 3 === 0) {
            if (untreatedpatients > treatedPatients) {
                doctors++;
            }
        }
        if (doctors >= currPatients) {
            treatedPatients += currPatients;
        } else {
            untreatedpatients += currPatients - doctors;
            treatedPatients += doctors

        }

    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedpatients}.`);
}

hospital(["6", "25", "25", "25", "25", "25", "1"])
hospital([3, 7, 7, 7])

