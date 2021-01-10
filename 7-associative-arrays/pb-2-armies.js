//PB-2.  Armies 
function armies(arr) {

    let leaders = {}

    for (let line of arr) {
        if (line.includes('arrives')) {
            let leader = line.split(' arrives')
            leaders[leader[0]] = {}
        }
    }

    for (let line of arr) {
        if (line.includes(':')) {
            let [leader, args] = line.split(': ')
            let [army, armyNum] = args.split(', ')
            if (leaders.hasOwnProperty(leader)) {
                leaders[leader][army] = Number(armyNum)
            }
        } else if (line.includes('+')) {
            let [army, extraArmy] = line.split(' + ')
            for (let line of Object.keys(leaders)) {
                if (leaders[line].hasOwnProperty(army)) {
                    leaders[line][army] += Number(extraArmy)
                }
            }
        } else if (line.includes('defeated')) {
            let name = line.split(' defeated')
            delete leaders[name[0]]
        }
    }

    let armyCounts = {}
    for (let line of Object.keys(leaders)) {
        let sum = Object.values(leaders[line])
            .reduce((a, b) => a + b)
        armyCounts[line] = Number(sum)
    }

    let sorted = Object.entries(armyCounts).sort(([keyA, valueA], [keyB, valueB]) =>
        valueB - valueA)

    for (let line of sorted) {
        console.log(`${line[0]}: ${line[1]}`);
        let armySort = Object.entries(leaders[line[0]])
        armySort.sort(([keyA, valueA], [keyB, valueB]) =>
            valueB - valueA
        )
        for (let print of armySort) {
            console.log(`>>> ${print[0]} - ${print[1]}`);
        }
    }

}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]
)
