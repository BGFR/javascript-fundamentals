//5. Palindrome Integers 

function palindrome(a) {
    for (let i = 0; i < a.length; i++) {
        let array = Number(String(a[i]).split("").reverse().join(""));
        if (Number(a[i]) == array) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindrome([123, 323, 421, 121]);
