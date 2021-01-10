//PB-05. Sequences 

function sequences(arr) {
    arr = arr.map(x => JSON.parse(x))
    arr.forEach(el =>
        el.sort((a, b) => {
            return b - a
        })
    )

    let printArr = []

    for (let i = 0; i < arr.length; i++) {
        let curArr = arr[i]
        let isNotUnique = false;
        for (let j = 0; j < printArr.length; j++) {
            let nextArr = printArr[j]
            if (JSON.stringify(curArr) == JSON.stringify(nextArr)) {
                isNotUnique = true;
            }
        }

        !isNotUnique ? printArr.push(curArr) : ''
    }

    printArr = printArr.sort((a, b) => a.length - b.length)
    printArr.forEach(x => console.log(`[${x.join(', ')}]`))
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])

sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"])
