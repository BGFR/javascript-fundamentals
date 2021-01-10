//PB-1. Equal Neighbors 
function eqNei(arr) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        let curArr = arr[i]
        let compareArr = arr[i + 1]
        for (let j = 0; j < curArr.length; j++) {
            let curValue = curArr[j]
            let curArrCompare = curArr[j + 1];
            if (i !== arr.length - 1) {
                let compareValue = compareArr[j]
                if (curValue == compareValue) {
                    counter++
                }
            }
            if (curValue == curArrCompare) {
                counter++
            }
        }
    }

    console.log(counter);
}

eqNei([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])

eqNei([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])

eqNei([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']])
