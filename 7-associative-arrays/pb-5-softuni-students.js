//PB-5.  SoftUni Students 
function softUniStudents(arr) {
    let courses = {}

    for (let line of arr) {
        if (line.includes(':')) {
            let [courseName, places] = line.split(': ')
            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = {
                    places: 0,
                    studentInfo: []
                }
            }
            courses[courseName]['places'] += Number(places)
        }
    }

    for (let line of arr) {
        let pattern = /(?<userName>user\d+)\[(?<credits>\d+)\] with email (?<email>[^\s]+) joins (?<courseAttended>.*)/g
        let match = pattern.exec(line)
        while (match !== null) {
            if (courses.hasOwnProperty(match.groups.courseAttended) && courses[match.groups.courseAttended]['places'] > 0) {
                let studentCredits = Number(match.groups.credits)

                courses[match.groups.courseAttended]['studentInfo'].push({
                    userName: match.groups.userName,
                    studentCredits: studentCredits,
                    email: match.groups.email
                })

                courses[match.groups.courseAttended]['places'] -= 1;
            }
            match = pattern.exec(line)
        }

    }

    let sortedCourse = Object.entries(courses)
        .sort(([keyA, valueA], [keyB, valueB]) =>
            valueB['studentInfo'].length - valueA['studentInfo'].length
        )

    for (let one of sortedCourse) {
        console.log(`${one[0]}: ${one[1]['places']} places left`);
        let userSorted = Object.values(one[1]['studentInfo'])
            .sort((a, b) => b['studentCredits'] - a['studentCredits'])
        for (let one of userSorted) {
            console.log(`--- ${one['studentCredits']}: ${one['userName']}, ${one['email']}`);
        }


    }
}


softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]
)
