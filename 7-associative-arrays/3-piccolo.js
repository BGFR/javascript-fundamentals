// 3. Piccolo 

function piccolo(arr) {
    let output = new Map();
    for (let line of arr) {
        let [move, plate] = line.split(", ");
        if (move == "IN") {
            output.set(plate);
        } else {
            output.has(plate) ? output.delete(plate) : "";
        }
    }

    let sorted = Array.from(output.keys()).sort((a, b) => a.localeCompare(b));
    if (sorted.length > 0) {
        for (key of sorted) {
            console.log(key);
        }
    } else {
        console.log(`Parking Lot is Empty`);
    }
}
