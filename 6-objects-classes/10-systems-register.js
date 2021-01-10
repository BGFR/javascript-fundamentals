// 10. Systems Register 

function systemReg(arr) {
    let system = {};

    for (let line of arr) {
        let [sys, comp, sub] = line.split(" | ");
        !system.hasOwnProperty(sys) ? (system[sys] = {}) : "";
        !system[sys].hasOwnProperty(comp) ? (system[sys][comp] = []) : "";
        system[sys][comp].push(sub);
    }

    let systemSorted = Object.keys(system).sort(
        (a, b) =>
            Object.keys(system[b]).length - Object.keys(system[a]).length ||
            a.localeCompare(b)
    );

    for (let sys1 of systemSorted) {
        console.log(sys1);

        let compSorted = Object.keys(system[sys1]).sort(
            (a, b) =>
                Object.keys(system[sys1][b]).length -
                Object.keys(system[sys1][a]).length
        );

        for (let comp1 of compSorted) {
            console.log("|||" + comp1);

            for (let sub1 of system[sys1][comp1]) {
                console.log("||||||" + sub1);
            }
        }
    }
}

systemReg([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"
]);
