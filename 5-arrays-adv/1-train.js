//1. Train 
function train(arr) {
    let waggons = arr.shift().split(' ')
    let max = Number(arr.shift())

    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i].split(' ')
        if (cur[0] === 'Add') {
            waggons.push(Number(cur[1]))
        } else {
            for (let j = 0; j < waggons.length; j++) {
                let isEnd = false;
                let passengers = Number(arr[i])
                if ((max - passengers) >= Number(waggons[j])) {
                    waggons.splice(Number(j), 1, (Number(arr[i]) + Number(waggons[j])))
                    isEnd = true;
                }
                if (isEnd) {
                    break;
                }
            }
        }
    }
    console.log(waggons.join(' '))
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])
