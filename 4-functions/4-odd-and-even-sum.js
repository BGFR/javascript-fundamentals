//4. Odd and Even Sum

function evenOdd(a) {
    function numberToArray(a1) {
        let array = a1.toString().split("");
        return array;
    }
    let odd = 0;
    let even = 0;
    for (let i = 0; i < numberToArray(a).length; i++) {
        if (Number(numberToArray(a)[i]) % 2 == 0) {
            even += Number(numberToArray(a)[i]);
        } else {
            odd += Number(numberToArray(a)[i]);
        }
    }
    return `Odd sum = ${odd}, Even sum = ${even}`;
}

console.log(evenOdd(1000435));
