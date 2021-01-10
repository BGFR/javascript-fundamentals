//6. Bomb Numbers 
function bomb(arr1, arr2) {
    let bombNum = arr2[0];
    let power = arr2[1];

    let bombIndex = arr1.indexOf(bombNum)

    while (bombIndex !== -1) {
        arr1.splice(Math.max((bombIndex - power), 0), Math.min(power, bombIndex))
        bombIndex = arr1.indexOf(bombNum)
        arr1.splice(bombIndex, (Math.max(power + 1)))
        bombIndex = arr1.indexOf(bombNum)

    }

    console.log(calculateSum(arr1))

    function calculateSum(arr) {
        let sum = 0
        for (let n of arr) {
            sum += n;
        }

        return sum;
    }

}

bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);
bomb([1, 4, 4, 2, 8, 9, 1],
    [9, 3])
bomb([1, 7, 7, 1, 2, 3],
    [7, 1])
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])
