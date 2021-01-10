// 5. Card Game 

function cardGame(arr) {
    let obj = {};
    for (let line of arr) {
        let [name, cards] = line.split(":");
        if (!obj.hasOwnProperty(name)) {
            obj[name] = [];
        }
        let singleCards = cards.trim().split(", ");
        for (let card of singleCards) {
            if (!Object.values(obj[name]).includes(card)) {
                obj[name].push(card);
            }
        }
    }

    for (let one of Object.entries(obj)) {
        let [player, total] = one;
        let result = 0;
        for (let all of total) {
            let first = "";
            let second = "";
            if (all.length < 3) {
                first = all.substring(0, 1);
                second = all.substring(1, 2);
            } else {
                first = all.substring(0, 2);
                second = all.substring(2, 3);
            }
            switch (first) {
                case "J":
                    first = Number(11);
                    break;
                case "Q":
                    first = Number(12);
                    break;
                case "K":
                    first = Number(13);
                    break;
                case "A":
                    first = Number(14);
                    break;
                default:
                    first = Number(first);
            }

            switch (second) {
                case "S":
                    second = Number(4);
                    break;
                case "H":
                    second = Number(3);
                    break;
                case "D":
                    second = Number(2);
                    break;
                case "C":
                    second = Number(1);
                    break;
            }
            result += first * second;
        }
        obj[player] = result;
    }

    for (let print of Object.keys(obj)) {
        console.log(`${print}: ${obj[print]}`);
    }
}

cardGame(["Slav: 3H, 10S, JC, KD, 5S, 10S", "Slav: 6H, 7S, KC, KD, 5S, 10C"]);
