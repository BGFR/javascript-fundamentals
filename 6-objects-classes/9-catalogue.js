// 9. Catalogue 

function catalogue(arr) {
    let catalogueObj = {};

    for (let line of arr) {
        let tuple = line.split(" : ");
        let product = tuple[0];
        let price = tuple[1];
        catalogueObj[product] = price;
    }
    let firstLetter = "";
    let print = [];
    Object.keys(catalogueObj)
        .sort((a, b) => a.localeCompare(b))
        .forEach((x) => {
            firstLetter !== x.substring(0, 1) ? print.push(firstLetter) : "";
            let price = catalogueObj[x];
            print.push(`${x}: ${price}`);
            firstLetter = x.substring(0, 1);
        });
    print.push(firstLetter);
    print
        .sort((a, b) => a.localeCompare(b))
        .forEach((x) => {
            x.length > 1 ? console.log(`  ${x}`) : console.log(x);
        });
}

catalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
]);
