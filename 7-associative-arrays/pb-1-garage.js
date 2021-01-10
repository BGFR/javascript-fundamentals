//PB-1.  Garage

function garage(arr) {

    let garages = {}
    for (let line of arr) {
        let [garageNum, ...args] = line.split(' - ')
        if (!garages.hasOwnProperty(garageNum)) {
            garages[garageNum] = []
        }
        garages[garageNum].push(args)
    }

    for (let [garage, values] of Object.entries(garages)) {
        console.log(`Garage № ${garage}`);

        for (let i = 0; i < values.length; i++) {
            let carPrint = values[i][0]
            console.log(`--- ${carPrint.split(': ').join(' - ')}`);
        }
    }

}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])
