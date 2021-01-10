// 6. Travel Time 
function travelTime(arr) {
    let obj = {};
    arr = arr.sort((a, b) => a.localeCompare(b));
    for (let line of arr) {
        let [country, city, price] = line.split(" > ");
        !obj.hasOwnProperty(country) ? (obj[country] = {}) : "";
        if (!obj[country].hasOwnProperty(city)) {
            obj[country][city] = price;
        } else {
            Number(obj[country][city]) > Number(price)
                ? (obj[country][city] = price)
                : "";
        }
    }

    for (let i of Object.keys(obj)) {
        let result = [];
        result.push(`${i} -> `);
        sorted = Object.keys(obj[i]).sort(
            (a, b) => Number(obj[i][a]) - Number(obj[i][b])
        );
        for (let j of sorted) {
            result.push(`${j} -> ${obj[i][j]} `);
        }
        console.log(result.join(""));
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
