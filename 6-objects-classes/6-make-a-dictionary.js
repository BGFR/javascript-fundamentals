// 6. Make a Dictionary 
function dictionary(arr) {
    let translator = {};

    for (let line of arr) {
        let obj = JSON.parse(line);
        translator = Object.assign(translator, obj);
    }

    Object.keys(translator)
        .sort((a, b) => a.localeCompare(b))
        .forEach((x) => {
            console.log(`Term: ${x} => Definition: ${translator[x]}`);
        });
}
