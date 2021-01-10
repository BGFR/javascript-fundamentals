//07. Company Users
function companyUser(arr) {
    arr = arr.sort((a, b) => {
        let comp1 = a.split(" -> ")[0];
        let comp2 = b.split(" -> ")[0];
        return comp1.localeCompare(comp2);
    });

    let obj = {};
    for (let line of arr) {
        let [company, id] = line.split(" -> ");
        if (!obj.hasOwnProperty(company)) {
            obj[company] = [];
        }
        if (!obj[company].includes(id)) {
            obj[company].push(id);
        }
    }

    for (let comp of Object.keys(obj)) {
        console.log(comp);

        for (let empl of obj[comp]) {
            console.log("-- " + empl);
        }
    }
}

companyUser([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345"
]);
companyUser([
    "SoftUni -> AA12345",
    "SoftUni -> CC12344",
    "Lenovo -> XX23456",
    "SoftUni -> AA12345",
    "Movement -> DD11111"
]);
