//PB-03. School Register
function schoolReg(arr) {

    let mainObj = {}

    for (let one of arr) {
        let [forName, forGrade, forScore] = one.split(', ')
        let name = forName.substring(14);
        let grade = Number(forGrade.substring(7)) + 1
        let score = Number(forScore.slice(-4))
        if (!mainObj.hasOwnProperty(grade)) {
            mainObj[grade] = {}
            mainObj[grade]['name'] = []
            mainObj[grade]['score'] = [Number(0)]
        }

        if (score >= 3) {
            mainObj[grade]['name'].push(name)
            mainObj[grade]['score'][0] += score
        }

    }

    for (let line of Object.keys(mainObj)) {
        if (mainObj[line]['name'].length > 0) {
            console.log(line + ' Grade');
            let nameList = mainObj[line]['name'].join(', ')
            let avScore = Number(mainObj[line]['score'] / mainObj[line]['name'].length)

            console.log(`List of students: ${nameList}`);
            console.log(`Average annual grade from last year: ${(avScore).toFixed(2)}\n`);
        }
    }
}
schoolReg(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
)
