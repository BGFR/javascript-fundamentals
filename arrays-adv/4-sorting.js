//4. Sorting 

function sorting(arr) {
    let ascArr = arr.map(Number)
    let descArr = arr.map(Number)

    let asc = ascArr.sort((a, b) => a - b)
    let desc = descArr.sort((a, b) => b - a)
    let print = []

    for (let i = 0; i < Math.ceil((arr.length) / 2); i++) {
        print.push(desc[i])
        print.push(asc[i])
    }
    console.log(print.join(' '))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 105])
