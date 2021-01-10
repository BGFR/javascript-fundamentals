//6.  Equal Sums 

function equalSums(arr) {
    let left = 0;
    let right = 0;
    let counter = 0;
    let isEqual = false;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            right += Number(arr[j]);
        }
        for (let k = i - 1; k >= 0; k--) {
            left += Number(arr[k]);
        }

        if (right == left) {
            isEqual = true;
            counter = i;
        } else {
            left = 0;
            right = 0;
        }
    }
    if (isEqual) {
        console.log(counter);
    } else if (arr.length == 1) {
        console.log(0);
    } else {
        console.log(`no`);
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
