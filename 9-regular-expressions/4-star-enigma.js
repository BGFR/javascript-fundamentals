//4. Star Enigma 
function starEnigma(arr) {
    let messages = Number(arr.shift());
    let obj = {};

    let index = 0;
    while (index < messages) {
        let regex = /[s, t, a, r,S, T, A, R]/gm;
        let newArr = [];
        let cypher = arr[index].length - arr[index].split(regex).join("").length;
        for (let i = 0; i < arr[index].length; i++) {
            let curCharCode = arr[index].charCodeAt(i);
            let newChar = String.fromCharCode(curCharCode - cypher);
            newArr.push(newChar);
        }
        let str = newArr.join("");

        let regex2 = /(?:.+)?@(?<planetName>[A-Za-z]+)(?:.+)?:(?<planetPopulation>\d+)(?:.+)?!(?:.+)?(?<attack>[A,D])(?:.+)?!(?:.+)?->(?<soldiers>\d+)(?:.+)?/g;
        let match = regex2.exec(str);
        if (match) {
            if (!obj.hasOwnProperty(match.groups.attack)) {
                obj[match.groups.attack] = [];
            }
            obj[match.groups.attack].unshift(match.groups.planetName);
        }
        index++;
    }

    if (!obj.hasOwnProperty("A")) {
        console.log(`Attacked planets: 0`);
    } else {
        let sortedA = obj["A"].sort((a, b) => a.localeCompare(b));
        console.log(`Attacked planets: ${obj["A"].length}`);
        for (let planet of sortedA) {
            console.log(`-> ${planet}`);
        }
    }

    if (!obj.hasOwnProperty("D")) {
        console.log(`Destroyed planets: 0`);
    } else {
        let sortedB = obj["D"].sort((a, b) => a.localeCompare(b));
        console.log(`Destroyed planets: ${obj["D"].length}`);
        for (let planet of sortedB) {
            console.log(`-> ${planet}`);
        }
    }
}
