//PB-4. Jan's Notation 
function solve(arr) {
    let operands = []
    let operandCounter = 0;
    let operatorCounter = 0;

    for (let line of arr) {
        if (typeof line == 'number') {
            operands.push(line)
            operandCounter++;
        } else {
            operatorCounter++;
            if (line == '+') {
                operands[operands.length - 2] += operands[operands.length - 1]
                operands.pop()
            } else if (line == '-') {
                operands[operands.length - 2] -= operands[operands.length - 1]
                operands.pop()
            } else if (line == '*') {
                operands[operands.length - 2] *= operands[operands.length - 1]
                operands.pop()
            } else if (line == '/') {
                operands[operands.length - 2] /= operands[operands.length - 1]
                operands.pop()
            }
        }
    }

    if (operandCounter - operatorCounter > 1) {
        console.log(`Error: too many operands!`);
    } else if (operandCounter - operatorCounter < 1) {
        console.log(`Error: not enough operands!`);
    } else {
        console.log(operands.join());
    }
}

solve([5, 3, 4, '*', '-'])
solve([7, 33, 8, '-'])
solve([15, '/'])
