//PB-5. Rosetta Stone

function stone(arr) {
    let templateLineLength = Number(arr.shift())
    let templateBlock = arr.splice(0, templateLineLength)
    let matrix = [];
    for (let line of arr) {
        matrix.push(line.split(' ').map(Number))
    }
    let index = 0;

    while (index !== templateLineLength) {
        let curTemplateLine = templateBlock[index].split(' ').map(Number)

        for (let i = index; i < matrix.length; i += templateLineLength) {
            let long = matrix[i].length
            for (let j = 0; j < matrix[0].length; j += curTemplateLine.length) {
                for (let k = 0; k < curTemplateLine.length; k++) {
                    matrix[i][j + k] += curTemplateLine[k]
                    long -= 1
                    if (long == 0) {
                        break;
                    }
                }

            }
        }
        index += 1
    }

    let codeWord = [];
    matrix.map(x => {
        x = x.map(e => e % 27 !== 0 ? e = String.fromCharCode(e % 27 + 64)
            : String.fromCharCode(e = 32));
        codeWord.push(x.join(''))
        return x;
    });

    console.log(codeWord.join(''));

}

stone([
    '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'
])

stone(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']
)

stone(['2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22'])
