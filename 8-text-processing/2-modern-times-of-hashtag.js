//2. Modern Times of #(HashTag) 
function modernTimesOf(str) {
    str = str.split(" ");
    for (let one of str) {
        if (one.includes("#") && one.length > 1) {
            let word = one.slice(1, one.length);
            if (word.match(/^[A-Za-z]+\b/)) {
                let result = word.match(/^[A-Za-z]+\b/);
                console.log(result[0]);
            }
        }
    }
}

modernTimesOf(
    "Nowadays everyone uses #$$%fdsges to tag a #special word in #socialMedia"
);
