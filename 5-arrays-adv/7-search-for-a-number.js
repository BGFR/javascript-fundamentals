//7. Search for a Number 
function searchNum(arr1, arr2) {

    let modArr = arr1.splice(0, arr2[0])
    modArr.splice(0, arr2[1]);
    let index = modArr.indexOf(arr2[2])
    let counter = 0;

    while (index !== -1) {
        counter++;
        modArr.splice(index, 1)
        index = modArr.indexOf(arr2[2])
    }
    console.log(`Number ${arr2[2]} occurs ${counter} times.`);
}

searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3])
