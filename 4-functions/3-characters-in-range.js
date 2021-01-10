//3. Characters in Range

function asciiCodes(a, b) {
    function smallToBig(a1, b1) {
        let result1 = "";
        for (let i = a1.charCodeAt(0) + 1; i < b1.charCodeAt(0); i++) {
            result1 += String.fromCharCode(i) + " ";
        }
        return result1;
    }

    function bigToSmall(a2, b2) {
        let result2 = "";
        for (let i = b2.charCodeAt(0) + 1; i < a2.charCodeAt(0); i++) {
            result2 += String.fromCharCode(i) + " ";
        }
        return result2;
    }

    if (a.charCodeAt(0) < b.charCodeAt(0)) {
        return smallToBig(a, b);
    } else {
        return bigToSmall(a, b);
    }
}

console.log(asciiCodes("C", "#"));
