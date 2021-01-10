//2. Common Elements
function commonElements(arr1, arr2) {
    let check = 0;
    for (let i = 0; i < arr1.length; i++) {
        check = arr2.includes(arr1[i]);
        if (check) {
            console.log(arr1[i]);
        }
    }
}

commonElements(
    ["Hey", "hello", 2, 4, "Peter", "e"],
    ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
    ["S", "o", "f", "t", "U", "n", "i", " "],
    ["s", "o", "c", "i", "a", "l"]
);

function commonElements(arr1, arr2) {
    for (let el of arr1) {
        let isCommon = arr2.includes(el);
        if (isCommon) {
            console.log(el);
            break;
        }
    }
}

commonElements(
    ["Hey", "hello", 2, 4, "Peter", "e"],
    ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
    ["S", "o", "f", "t", "U", "n", "i", " "],
    ["s", "o", "c", "i", "a", "l"]
);
