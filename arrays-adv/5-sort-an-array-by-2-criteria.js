//5. Sort an Array by 2 Criteria 
function sorting2(arr) {
    let asc = arr.sort(customSort).sort(customSort)


    function customSort(a, b) {
        if (a.length > b.length) {
            return 1
        } else if (a.length < b.length) {
            return -1
        } else {
            return a.localeCompare(b)
        }
    }

    console.log(asc.join('\n'));

}
sorting2(["alpha", "beta", "gamma"])
sorting2(["Isacc", "Theodor", "Jack", "Harrison", "George"])
