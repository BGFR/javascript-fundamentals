//PB-02. Flight Schedule 

function flightSchedule(arr) {
    let flights = {}
    for (let i of arr[0]) {
        let [num] = i.split(' ')
        let index = i.indexOf(' ')
        let dest = i.substring(index).trim()
        flights[num] = []
        flights[num].push(dest)
    }

    for (let j of arr[1]) {
        let [num, status] = j.split(' ')
        for (let key of Object.keys(flights)) {
            num == key ?
                flights[num].push(status) : '';
        }
    }

    if (arr[2][0] === 'Cancelled') {
        Object.keys(flights).forEach(x => {
            flights[x].includes('Cancelled') ?
                console.log(`{ Destination: '${flights[x][0]}', Status: '${flights[x][1]}' }`) : '';
        });
    } else {
        Object.keys(flights).forEach(x => {
            (!flights[x].includes('Cancelled')) ?
                console.log(`{ Destination: '${flights[x][0]}', Status: '${arr[2][0]}' }`) : '';
        });
    }


}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
)


flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
])
