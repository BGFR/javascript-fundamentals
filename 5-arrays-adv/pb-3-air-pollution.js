//PB-3. Air Pollution

function airPollution(input1, input2) {

    let maps = []
    let newMaps = []
    let inputMod = input2.slice(0, 100)

    for (let i = 0; i < 5; i++) {
        maps.push(input1[i].split(' ').slice(0, 5).map(Number))
    }

    for (let command of inputMod) {
        let [force, power] = command.split(' ')
        power = Number(power)

        if (force == 'breeze') {
            for (let i = 0; i < 5; i++) {
                power < 0 ? power = 0 : '';
                power > 4 ? power = 4 : '';
                maps[power][i] -= 15
                maps[power][i] < 0 ? maps[power][i] = 0 : '';
            }
        } else if (force == 'gale') {
            power < 0 ? power = 0 : '';
            power > 4 ? power = 4 : '';
            for (let i = 0; i < 5; i++) {
                maps[i][power] -= 20
                maps[i][power] < 0 ? maps[i][power] = 0 : '';
            }
        } else if (force == 'smog') {
            power < 0 ? power = 0 : '';
            power > 100 ? power = 100 : '';
            for (let area of maps) {
                newMaps.push(area.map(x => {
                    x += power
                    x > 1000 ? x = 1000 : '';
                    return x
                }))
            }

            maps = newMaps

        } else {
            continue;
        }
    }

    let pollutedAreas = []

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (maps[i][j] > 50) {
                pollutedAreas.push(`[${[i]}-${[j]}]`)
            }
        }
    }
    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log(`No polluted areas`);
    }
}

airPollution(["5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24"],
    ["breeze 1", "gale 2", "smog 25"])

airPollution(["5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24"],
    ["smog 11", "gale 3", "bree 1", "smog 2"])
