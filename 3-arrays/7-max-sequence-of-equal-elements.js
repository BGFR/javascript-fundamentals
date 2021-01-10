//7.  Max Sequence of Equal Elements 
function maxSeq(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentSeq = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentSeq.push(arr[j]);
            } else {
                break;
            }
        }

        if (result.length < currentSeq.length) {
            result = currentSeq;
        }
    }

    console.log(result.join(" "));
}

maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSeq([1, 1, 1, 2, 3, 1, 3, 3]);
maxSeq([4, 4, 4, 4]);
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3]);
