// 2. Odd Occurrences 
function oddOccurrences(arr) {
    let obj = {};
    let newArr = arr.split(" ");
    for (let line of newArr) {
        line = line.toLowerCase();
        if (!obj.hasOwnProperty(line)) {
            obj[line] = 0;
        }
        obj[line]++;
    }
    let print = [];
    Object.entries(obj)
        .sort(([a, a1], [b, b1]) => b1 - a1)
        .filter(([a, b]) => {
            b % 2 !== 0 ? print.push(a) : "";
        });
    console.log(print.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
