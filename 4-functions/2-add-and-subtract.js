//2. Add and Subtract 

function sumAndSubstract(x, y, z) {
    function sum(x1, y1) {
        return x1 + y1;
    }
    let result = sum(x, y);
    return result - z;
}
console.log(sumAndSubstract(23, 6, 10));
