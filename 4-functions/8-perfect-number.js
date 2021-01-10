//8. Perfect Number 

function divisors(a) {
    let perfectNum = 0;
    for (let i = 1; i <= a / 2; i++) {
        if (a % i === 0) {
            perfectNum += i;
        }
    }
    return perfectNum == a ? `We have a perfect number!` : `It's not so perfect.`;
}

console.log(divisors(6));
console.log(divisors(28));
console.log(divisors(1236498));
