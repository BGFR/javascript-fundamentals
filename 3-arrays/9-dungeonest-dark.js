//9. Dungeonest Dark

function dungDark(arr) {
    let str = arr[0].split("|");
    let healed = 100;
    let count = 0;
    let coins = 0;
    let isMade = true;

    for (let rooms of str) {
        count++;
        let room = rooms.split(" ");
        let first = room[0];
        let second = Number(room[1]);

        if (first == "potion") {
            if (healed + second >= 100) {
                second = 100 - healed;
                healed = 100;
            } else {
                healed += second;
            }
            console.log(`You healed for ${second} hp.`);
            console.log(`Current health: ${healed} hp.`);
        } else if (first == "chest") {
            coins += second;
            console.log(`You found ${second} coins.`);
        } else {
            healed -= second;
            if (healed > 0) {
                console.log(`You slayed ${first}.`);
            } else {
                console.log(`You died! Killed by ${first}.`);
                console.log(`Best room: ${count}`);
                isMade = false;
                break;
            }
        }
    }

    if (isMade) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${healed}`);
    }
}

dungDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
