//8. Array Manipulator

function manipulator(arr1, arr2) {
    let index = 0;
    let command = arr2[index].split(' ');
    let move = command.shift()
    while (move !== 'print') {
        let firstNum = Number(command.shift())
        switch (move) {
            case 'add': {
                arr1.splice(firstNum, 0, Number(command[0]))
                break;
            }
            case 'addMany': {
                arr1.splice(firstNum, 0, ...command.map(x => +x))
                break;
            }
            case 'contains': {
                let ind = arr1.indexOf(firstNum)
                if (ind < 0) {
                    console.log(-1);
                } else {
                    console.log(ind);
                }
                break;
            }
            case 'remove': {
                arr1.splice(firstNum, 1)
                break;
            }
            case 'shift': {
                for (let i = 0; i < firstNum; i++) {
                    arr1.push(+arr1.shift())
                }
                break;
            }
            case 'sumPairs': {
                newArr = [];
                for (let i = 0; i < arr1.length; i += 2) {
                    newArr.push(arr1[i] + (arr1[i + 1] || 0))
                }
                arr1 = newArr;
                break;
            }
        }
        index++
        command = arr2[index].split(' ');
        move = command.shift()

    }
    console.log(`[ ${arr1.join(', ')} ]`);


}

manipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
manipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
manipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"])

