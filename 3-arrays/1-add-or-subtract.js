//1.  Add or Subtract
function addSubstract(input) {
    let originalArray = 0;
    let modifiedArray = 0;
    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        let current = Number(input[i]);
        originalArray += current;
        if (current % 2 !== 0) {
            current -= i;
            newArray.push(current);
        } else {
            current += i;
            newArray.push(current);
        }
        modifiedArray += current;
    }

    console.log(newArray);
    console.log(originalArray);
    console.log(modifiedArray);
}

addSubstract([5, 15, 23, 56, 35]);
addSubstract([-5, 11, 3, 0, 2]);
