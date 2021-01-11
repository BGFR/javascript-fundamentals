//5.  Nether Realms 
function netherRealms(arr) {
    let namePat = /^(?<name>[A-Za-z]+[^\s,]+)$/gm;
    let damagePat = /(?<damage>([-\+\.]?\d+)+)/gm;
    let healthPat = /(?<health>[^0-9\+\-\*\/\.])/gm;
    let symPat = /(?<symbol>\*+|\/+)$/gm;

    let obj = {};

    let newArr = arr.join(",").split(", ");
    for (let line of newArr) {
        if (line.match(healthPat)) {
            let healthMatches = line.match(healthPat);
            let health = healthMatches.map((el) => {
                return el.charCodeAt(0);
            });
            let totalHealth = health.reduce((acc, cur) => acc + cur);
            let damage = 0;
            if (line.match(damagePat)) {
                let damageMatches = line.match(damagePat);
                damage = damageMatches.map(Number).reduce((acc, cur) => acc + cur);

                if (symPat.test(line)) {
                    let symbols = line.match(symPat).join("").split("");
                    for (let one of symbols) {
                        one === "*" ? (damage *= 2) : "";
                        one === "/" ? (damage /= 2) : "";
                    }
                }
            }

            obj[line] = [];
            obj[line].push(totalHealth);
            obj[line].push(damage);
        }
    }
    let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));
    for (let sort of sorted) {
        console.log(
            `${sort} - ${obj[sort][0]} health, ${obj[sort][1].toFixed(2)} damage`
        );
    }
}

netherRealms(["M3ph-0.5s-0.5t0.0**"]);
netherRealms(["M3ph1st0**, Azazel"]);
netherRealms(["Gos/ho"]);
