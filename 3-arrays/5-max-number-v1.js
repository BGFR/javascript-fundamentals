//5.  Max Number (v1)
function maxNum(arr) {
    let newArr = [];
    let isBigger = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (Number(arr[i]) > Number(arr[j]) || arr[j] === undefined) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(" "));
}

maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);
