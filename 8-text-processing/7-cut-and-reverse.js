//7. Cut and Reverse 
function cutAndReverse(str) {
    str = str.split("").reverse().join("");
    let result1 = "";
    let result2 = "";
    for (let i = 0; i < str.length / 2; i++) {
        result1 += str[i];
        result2 += str[i + str.length / 2];
    }

    console.log(result2);
    console.log(result1);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
