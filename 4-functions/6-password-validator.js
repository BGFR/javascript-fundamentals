//6. Password Validator 

function passValidation(a) {
    let isLong = false;
    let isOnlyLetterDigit = false;
    let counter;
    let result = [];

    if (passLength(a) !== true) {
        result.push(passLength(a));
    }
    if (letterDigit(a) !== true) {
        result.push(letterDigit(a));
    }
    if (digit(a) !== true) {
        result.push(digit(a));
    }

    if (passLength(a) == true && letterDigit(a) == true && digit(a) == true) {
        result.push(`Password is valid`);
    }

    return result.join("\n");

    function passLength(a1) {
        if (Number(a1.length) >= 6 && Number(a1.length) <= 10) {
            isLong = true;
        }
        return !isLong ? `Password must be between 6 and 10 characters` : true;
    }

    function letterDigit(a2) {
        String(a2).split("");
        let checkLetDig = /^[0-9a-zA-Z]+$/;

        for (let i = 0; i < a2.length; i++) {
            if (a2[i].match(checkLetDig)) {
                isOnlyLetterDigit = true;
            } else {
                isOnlyLetterDigit = false;
                break;
            }
        }
        return !isOnlyLetterDigit
            ? `Password must consist only of letters and digits`
            : true;
    }

    function digit(a3) {
        String(a3).split("");
        let checkTwoDigit = /^[0-9]+$/;
        counter = 0;

        for (let i = 0; i < a3.length; i++) {
            if (a3[i].match(checkTwoDigit)) {
                counter += 1;
            }
        }
        return counter < 2 ? `Password must have at least 2 digits` : true;
    }
}

console.log(passValidation("logIn"));
console.log(passValidation("MyPass123"));
console.log(passValidation("Pa$s$s"));
