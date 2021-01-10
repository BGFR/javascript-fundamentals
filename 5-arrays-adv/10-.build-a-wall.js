//10 .Build a Wall 

function buildWall(arr) {
    let newArr = arr.sort()
    let output = []
    let concreteCounter = 0;

    for (let i = 0; i < (30 - newArr[0]); i++) {
        output.push(0)
    }

    for (let j = 0; j < arr.length; i = j++) {
        let start = Number(arr[j])
        let insert = 0;
        while (start !== 30) {
            let newValue = output[insert]
            newValue += 195;
            output.splice(insert++, 1, newValue)
            start++
            concreteCounter += 195;
        }
    }
    console.log(output.join(', '));
    console.log(`${concreteCounter * 1900} pesos`);
}

buildWall([21, 25, 28])
buildWall([17])
buildWall([17, 22, 17, 19, 17])
