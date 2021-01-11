//2.  Race 
function race(arr) {
    let names = arr.shift().split(", ");
    let obj = {};
    for (let name of names) {
        obj[name] = 0;
    }
    let patternChar = /([A-Za-z])/gm;
    let patternDigit = /[0-9]/gm;

    for (let line of arr) {
        let name = "";
        let char = patternChar.exec(line);
        while (char !== null) {
            name += char[0];
            char = patternChar.exec(line);
        }
        if (obj.hasOwnProperty(name)) {
            let sum = Number(obj[name]);
            let digit = patternDigit.exec(line);
            while (digit !== null) {
                sum += Number(digit[0]);
                digit = patternDigit.exec(line);
            }
            obj[name] = sum;
        }
    }

    let order = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

    for (let i = 0; i < 3; i++) {
        let place = "";
        if (i + 1 === 1) {
            place += "1st place:";
        } else if (i + 1 === 2) {
            place += "2nd place:";
        } else if (i + 1 === 3) {
            place += "3rd place:";
        }
        console.log(`${place} ${order[i]}`);
    }
}

race([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"
]);
