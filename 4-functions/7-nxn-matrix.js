//7. NxN Matrix 
function matrix(a) {
    results(a);
    function results(a1) {
        let result = "";
        for (let i = 0; i < a1; i++) {
            for (let j = 0; j < a1; j++) {
                result += a1 + " ";
            }
            result += "\n";
        }
        return result;
    }

    return results(a);
}
console.log(matrix(3));
