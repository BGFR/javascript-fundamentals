//PB-2. Bunny Kill 
function bunnyKill(input) {

    let field = [];
    let bombAndPower = input.pop().split(' ')
    let bunnyKills = 0;
    let damage = 0;

    for (let line of input) {
        field.push(line.split(' ').map(Number))
    }

    for (let order of bombAndPower) {
        let [row, col] = order.split(',').map(Number)
        if (field[row][col] === 0) {
            continue;
        }
        bunnyKills += 1;
        damage += field[row][col];

        if (isInFieldScope(field, row - 1, col - 1)) {
            field[row - 1][col - 1] -= field[row][col];
            field[row - 1][col - 1] < 0 ? field[row - 1][col - 1] = 0 : '';
        }
        if (isInFieldScope(field, row - 1, col)) {
            field[row - 1][col] -= field[row][col];
            field[row - 1][col] < 0 ? field[row - 1][col] = 0 : '';
        }
        if (isInFieldScope(field, row - 1, col + 1)) {
            field[row - 1][col + 1] -= field[row][col];
            field[row - 1][col + 1] < 0 ? field[row - 1][col + 1] = 0 : '';
        }
        if (isInFieldScope(field, row, col - 1)) {
            field[row][col - 1] -= field[row][col];
            field[row][col - 1] < 0 ? field[row][col - 1] = 0 : '';
        }
        if (isInFieldScope(field, row, col + 1)) {
            field[row][col + 1] -= field[row][col];
            field[row][col + 1] < 0 ? field[row][col + 1] = 0 : '';
        }
        if (isInFieldScope(field, row + 1, col - 1)) {
            field[row + 1][col - 1] -= field[row][col];
            field[row + 1][col - 1] < 0 ? field[row + 1][col - 1] = 0 : '';
        }
        if (isInFieldScope(field, row + 1, col)) {
            field[row + 1][col] -= field[row][col];
            field[row + 1][col] < 0 ? field[row + 1][col] = 0 : '';
        }
        if (isInFieldScope(field, row + 1, col + 1)) {
            field[row + 1][col + 1] -= field[row][col];
            field[row + 1][col + 1] < 0 ? field[row + 1][col + 1] = 0 : '';
        }

        field[row][col] = 0
    }

    for (let area of field) {
        damage += area.reduce((acc, curr) => {
            curr !== 0 ? bunnyKills++ : '';
            return acc + curr;
        }, 0)
    }

    console.log(damage);
    console.log(bunnyKills);

    function isInFieldScope(field, row, col) {
        isInField = true;
        if (row < 0 || col < 0 || row > field.length - 1 || col > field[0].length - 1) {
            isInField = false;
        }

        return isInField;
    }


}

bunnyKill(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0'])
bunnyKill(
    ['5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1'])
