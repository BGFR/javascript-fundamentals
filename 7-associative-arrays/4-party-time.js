// 4. Party Time 

function partyTime(arr) {
    let outputVip = new Map();
    let outputReg = new Map();

    for (let line of arr) {
        if (line == "PARTY") {
            continue;
        } else if (!outputVip.has(line) && Number(line.split("")[0]) < 10) {
            outputVip.set(line);
        } else if (!outputReg.has(line) && isNaN(Number(line.split("")[0]))) {
            outputReg.set(line);
        } else if (outputVip.has(line)) {
            outputVip.delete(line);
        } else if (outputReg.has(line)) {
            outputReg.delete(line);
        }
    }

    console.log(Array.from(outputVip).length + Array.from(outputReg).length);
    for (let guest of outputVip.keys()) {
        console.log(`${guest}`);
    }

    for (let guest of outputReg.keys()) {
        console.log(`${guest}`);
    }
}

partyTime([
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "xys2FYzn",
    "MDzcM9ZK",
    "PARTY",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ"
]);
