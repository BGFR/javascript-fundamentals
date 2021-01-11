//3.  SoftUni Bar Income 
function softUniBarIncome(arr) {
    let total = 0;
    for (let line of arr) {
        const namePat = /(?<=%)(?<name>[A-Z][a-z]+)(?=%)/gm;
        const productPat = /(?<=<)(?<product>\w+)(?=>)/gm;
        const quantityPat = /(?<=\|)(?<quantity>\d+)(?=\|)/gm;
        const pricePat = /(?<=|([A-Za-z]+)?)(?<price>\d+\.?\d+)(?=\$)/gm;

        if (line === "end of shift") {
            break;
        } else {
            let nameMatch = namePat.exec(line);
            let productMatch = productPat.exec(line);
            let quantityMatch = quantityPat.exec(line);
            let priceMatch = pricePat.exec(line);

            if (nameMatch && productMatch && quantityMatch && priceMatch) {
                let totalPrice =
                    quantityMatch.groups.quantity * priceMatch.groups.price;
                total += totalPrice;
                console.log(
                    `${nameMatch.groups.name}: ${productMatch.groups.product
                    } - ${totalPrice.toFixed(2)}`
                );
            }
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBarIncome([
    "%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"
]);

softUniBarIncome([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"
]);

softUniBarIncome([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"
]);
