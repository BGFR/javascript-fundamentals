//1. Smallest of Three Numbers 
function smallestOfThree(x, y, z) {
    let smallest = Number.MAX_SAFE_INTEGER;

    function smaller(n, small) {
        if (n < small) {
            small = n;
        }
        return small;
    }
    smallest = smaller(x, smallest);
    smallest = smaller(y, smallest);
    smallest = smaller(z, smallest);

    return smallest;
}

console.log(smallestOfThree(6, 5, 2));
