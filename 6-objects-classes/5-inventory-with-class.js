// 5. Inventory  (with class) 
function inventory(input = []) {
    class Inventory {
        constructor(hero, level, items) {
            this.Hero = hero;
            this.level = level;
            this.items = items;
        }
    }

    let result = [];
    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(" / ");
        let items = element[2];
        items = items.split(", ").sort().join(", ");
        element[2] = items;
        let j = 0;
        result.push(new Inventory(element[j], element[j + 1], element[j + 2]));
    }

    result.sort(function (a, b) {
        return Number(a.level) - Number(b.level);
    });

    for (let i = 0; i < result.length; i++) {
        let element = result[i];
        console.log(`Hero: ${element.Hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    }
}
